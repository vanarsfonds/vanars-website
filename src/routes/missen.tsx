import { createFileRoute } from "@tanstack/react-router";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { PageShell } from "@/components/SiteLayout";
import { LanguageProvider } from "@/lib/language-context";
import { MISSEN, type Mis } from "@/data/missen";
import { GEO, MAP_VIEWBOX, project } from "@/data/missen-geo";

// Verborgen pagina: niet gelinkt, niet geïndexeerd (zie ook vercel.json).
export const Route = createFileRoute("/missen")({
  head: () => ({
    meta: [
      { title: "Missen — Van Ars Fonds" },
      { name: "robots", content: "noindex, nofollow, noarchive" },
    ],
  }),
  headers: () => ({ "X-Robots-Tag": "noindex, nofollow" }),
  component: MissenPage,
});

type Tab = "zondag" | "alle";

const TABS: { id: Tab; label: string }[] = [
  { id: "zondag", label: "Zondagsmissen" },
  { id: "alle", label: "Alle missen" },
];

const SUNDAY = MISSEN.filter((m) => m.sunday);
const OTHER = MISSEN.filter((m) => !m.sunday);
const COUNTS: Record<Tab, number> = { zondag: SUNDAY.length, alle: MISSEN.length };

function tabFromHash(hash: string): Tab {
  return hash === "#alle" ? "alle" : "zondag";
}

function MissenPage() {
  const [tab, setTab] = useState<Tab>("zondag");
  const [activeId, setActiveId] = useState<string | null>(null);

  // Tab uit de URL-hash lezen (na hydratie) en bijhouden.
  useEffect(() => {
    setTab(tabFromHash(window.location.hash));
    const onHashChange = () => setTab(tabFromHash(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const selectTab = useCallback((next: Tab) => {
    setTab(next);
    setActiveId(null);
    window.history.replaceState(null, "", `#${next}`);
  }, []);

  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let target: number | null = null;
    if (e.key === "ArrowRight") target = (index + 1) % TABS.length;
    else if (e.key === "ArrowLeft") target = (index - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") target = 0;
    else if (e.key === "End") target = TABS.length - 1;
    if (target === null) return;
    e.preventDefault();
    selectTab(TABS[target].id);
    document.getElementById(`tab-${TABS[target].id}`)?.focus();
  };

  const visible = tab === "alle" ? MISSEN : SUNDAY;

  const activate = useCallback((id: string, scroll: boolean) => {
    setActiveId(id);
    if (!scroll) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById(`mis-${id}`)
      ?.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
  }, []);

  return (
    <LanguageProvider lang="nl">
      <PageShell showLanguageToggle={false}>
        <div lang="nl" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <header className="text-center">
            <h1 className="text-5xl md:text-6xl">Traditionele missen</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
              Gemeenschappen in Nederland
            </p>
          </header>

          <div
            role="tablist"
            aria-label="Soort missen"
            className="font-sans-ui mt-12 flex justify-center gap-8 border-b border-border"
          >
            {TABS.map((t, i) => {
              const selected = tab === t.id;
              return (
                <button
                  key={t.id}
                  id={`tab-${t.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="missen-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectTab(t.id)}
                  onKeyDown={(e) => onTabKeyDown(e, i)}
                  className={`-mb-px border-b-[1.5px] pb-3 pt-2 text-sm tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none ${
                    selected
                      ? "border-accent text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                  <span className="ml-2 text-xs text-muted-foreground">{COUNTS[t.id]}</span>
                </button>
              );
            })}
          </div>

          <div
            id="missen-panel"
            role="tabpanel"
            aria-labelledby={`tab-${tab}`}
            className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16"
          >
            <div className="md:sticky md:top-8 md:self-start">
              <MissenMap
                items={visible}
                activeId={activeId}
                showWeekday={tab === "alle"}
                onActivate={activate}
                onLeave={() => setActiveId(null)}
              />
            </div>
            <div>
              {tab === "alle" ? (
                <>
                  <MissenGroup
                    title="Zondagsmissen"
                    items={SUNDAY}
                    activeId={activeId}
                    onActivate={activate}
                  />
                  <MissenGroup
                    title="Overige missen"
                    items={OTHER}
                    activeId={activeId}
                    onActivate={activate}
                  />
                </>
              ) : (
                <MissenGroup items={SUNDAY} activeId={activeId} onActivate={activate} />
              )}
            </div>
          </div>
        </div>
      </PageShell>
    </LanguageProvider>
  );
}

const [MAP_W, MAP_H] = MAP_VIEWBOX.split(" ").slice(2).map(Number);
const MIN_ZOOM = 1;
const MAX_ZOOM = 8;
const BUTTON_ZOOM_STEP = 1.6;
const DRAG_THRESHOLD_PX = 4;

/** z = zoomfactor, (x, y) = middelpunt van het zichtbare gebied in kaartcoördinaten. */
interface View {
  z: number;
  x: number;
  y: number;
}

const HOME: View = { z: 1, x: MAP_W / 2, y: MAP_H / 2 };

function clampView({ z, x, y }: View): View {
  const zc = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));
  const hw = MAP_W / zc / 2;
  const hh = MAP_H / zc / 2;
  return {
    z: zc,
    x: Math.min(MAP_W - hw, Math.max(hw, x)),
    y: Math.min(MAP_H - hh, Math.max(hh, y)),
  };
}

/** Zoom met factor, waarbij kaartpunt (px, py) op dezelfde plek op het scherm blijft. */
function zoomAt(v: View, factor: number, px: number, py: number): View {
  const z = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, v.z * factor));
  const ratio = v.z / z;
  return clampView({ z, x: px - (px - v.x) * ratio, y: py - (py - v.y) * ratio });
}

function MissenMap({
  items,
  activeId,
  showWeekday,
  onActivate,
  onLeave,
}: {
  items: Mis[];
  activeId: string | null;
  showWeekday: boolean;
  onActivate: (id: string, scroll: boolean) => void;
  onLeave: () => void;
}) {
  const active = items.find((m) => m.id === activeId) ?? null;

  const svgRef = useRef<SVGSVGElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const dragged = useRef(false);
  const [view, setView] = useState<View>(HOME);
  const [panning, setPanning] = useState(false);

  const vw = MAP_W / view.z;
  const vh = MAP_H / view.z;
  const x0 = view.x - vw / 2;
  const y0 = view.y - vh / 2;
  const k = 1 / view.z; // tegengewicht, zodat markers en labels even groot blijven

  /** Scherm- naar kaartcoördinaten (houdt rekening met letterboxing van de svg). */
  const toMap = useCallback((clientX: number, clientY: number): [number, number] | null => {
    const svg = svgRef.current;
    const ctm = svg?.getScreenCTM();
    if (!svg || !ctm) return null;
    const p = new DOMPoint(clientX, clientY).matrixTransform(ctm.inverse());
    return [p.x, p.y];
  }, []);

  const zoomBy = useCallback((factor: number) => {
    setView((v) => zoomAt(v, factor, v.x, v.y));
  }, []);

  // Ctrl/⌘ + scrollwiel (en trackpad-pinch) zoomt; gewoon scrollen blijft de pagina scrollen.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const p = toMap(e.clientX, e.clientY);
      if (!p) return;
      const factor = Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.002));
      setView((v) => zoomAt(v, factor, p[0], p[1]));
    };
    svg.addEventListener("wheel", onWheel, { passive: false });
    return () => svg.removeEventListener("wheel", onWheel);
  }, [toMap]);

  const onPointerDown = (e: PointerEvent<SVGSVGElement>) => {
    if (pointers.current.size === 0) dragged.current = false;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
  };

  const onPointerMove = (e: PointerEvent<SVGSVGElement>) => {
    const prev = pointers.current.get(e.pointerId);
    if (!prev) return;
    if (e.pointerType === "mouse" && e.buttons === 0) {
      // Muis losgelaten buiten de kaart: pointerup is dan gemist.
      pointers.current.delete(e.pointerId);
      setPanning(false);
      return;
    }
    const next = { x: e.clientX, y: e.clientY };
    const ctm = svgRef.current?.getScreenCTM();
    if (!ctm) return;

    if (pointers.current.size === 2) {
      // Pinch: zoom rond het midden tussen de twee vingers.
      const other = [...pointers.current.entries()].find(([id]) => id !== e.pointerId)![1];
      const before = Math.hypot(prev.x - other.x, prev.y - other.y);
      const after = Math.hypot(next.x - other.x, next.y - other.y);
      const mid = toMap((next.x + other.x) / 2, (next.y + other.y) / 2);
      pointers.current.set(e.pointerId, next);
      dragged.current = true;
      if (mid && before > 0) setView((v) => zoomAt(v, after / before, mid[0], mid[1]));
      return;
    }

    if (view.z === MIN_ZOOM) return;
    if (!dragged.current) {
      // Pas na een drempel als slepen zien, zodat klikken op een marker blijft werken.
      const start = Math.hypot(next.x - prev.x, next.y - prev.y);
      if (start < DRAG_THRESHOLD_PX) return;
      dragged.current = true;
      setPanning(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    pointers.current.set(e.pointerId, next);
    const dx = (next.x - prev.x) / ctm.a;
    const dy = (next.y - prev.y) / ctm.d;
    setView((v) => clampView({ ...v, x: v.x - dx, y: v.y - dy }));
  };

  const onPointerEnd = (e: PointerEvent<SVGSVGElement>) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size === 0) setPanning(false);
  };

  return (
    <figure className="relative">
      <svg
        ref={svgRef}
        viewBox={`${x0} ${y0} ${vw} ${vh}`}
        role="group"
        aria-label="Kaart van Nederland met de plaatsen van de missen"
        className={`block h-auto max-h-[56vh] w-full select-none md:max-h-[80vh] ${
          view.z > 1 ? (panning ? "cursor-grabbing" : "cursor-grab") : ""
        }`}
        style={{ touchAction: view.z > 1 ? "none" : "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onClickCapture={(e) => {
          // Een sleepgebaar is geen klik op een marker.
          if (!dragged.current) return;
          dragged.current = false;
          e.stopPropagation();
        }}
      >
        <path
          d={GEO.de}
          className="fill-card stroke-border"
          strokeWidth={0.75 * k}
          strokeLinejoin="round"
        />
        <path
          d={GEO.be}
          className="fill-card stroke-border"
          strokeWidth={0.75 * k}
          strokeLinejoin="round"
        />
        <path
          d={GEO.nl}
          className="fill-muted stroke-border"
          strokeWidth={0.9 * k}
          strokeLinejoin="round"
        />
        <path
          d={GEO.water}
          className="fill-background stroke-border"
          strokeWidth={0.9 * k}
          strokeLinejoin="round"
        />

        {items.map((m) => {
          const [x, y] = project(m.lon, m.lat);
          const on = m.id === activeId;
          return (
            <g
              key={m.id}
              role="button"
              tabIndex={0}
              aria-label={`${m.city}, ${m.name}`}
              aria-pressed={on}
              className="group cursor-pointer outline-none"
              onMouseEnter={() => onActivate(m.id, false)}
              onMouseLeave={onLeave}
              onFocus={() => onActivate(m.id, true)}
              onBlur={onLeave}
              onClick={() => onActivate(m.id, true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onActivate(m.id, true);
                }
              }}
            >
              <g transform={`translate(${x} ${y}) scale(${k})`}>
                {/* ruime klikzone */}
                <circle r={14} fill="transparent" />
                <circle
                  r={12}
                  fill="none"
                  strokeWidth={1.5}
                  className="stroke-foreground opacity-0 group-focus-visible:opacity-100"
                />
                <Dot x={0} y={0} sunday={m.sunday} r={on ? 7 : 5} />
              </g>
            </g>
          );
        })}

        {/* Actieve markering en label bovenop, zodat overlappende markers (bv. Leiden) leesbaar blijven. */}
        {active && (
          <ActiveLabel
            mis={active}
            k={k}
            right={project(active.lon, active.lat)[0] < x0 + vw * 0.57}
          />
        )}
      </svg>

      <div className="font-sans-ui absolute right-0 top-0 flex flex-col overflow-hidden border border-border bg-background/90 text-foreground">
        <ZoomButton
          label="Inzoomen"
          disabled={view.z >= MAX_ZOOM}
          onClick={() => zoomBy(BUTTON_ZOOM_STEP)}
        >
          +
        </ZoomButton>
        <ZoomButton
          label="Uitzoomen"
          disabled={view.z <= MIN_ZOOM}
          onClick={() => zoomBy(1 / BUTTON_ZOOM_STEP)}
        >
          −
        </ZoomButton>
        <ZoomButton
          label="Kaart herstellen"
          disabled={view.z === MIN_ZOOM}
          onClick={() => setView(HOME)}
        >
          ⤢
        </ZoomButton>
      </div>

      <figcaption className="font-sans-ui mt-4 flex gap-6 text-xs tracking-wide text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <circle
              cx="6"
              cy="6"
              r="4.5"
              className="fill-accent stroke-background"
              strokeWidth={1.5}
            />
          </svg>
          Zondagsmis
        </span>
        {showWeekday && (
          <span className="inline-flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <circle
                cx="6"
                cy="6"
                r="4.5"
                className="fill-background stroke-accent"
                strokeWidth={1.75}
              />
            </svg>
            Doordeweeks
          </span>
        )}
      </figcaption>
    </figure>
  );
}

function ZoomButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center border-b border-border text-lg leading-none transition-colors last:border-b-0 hover:bg-muted focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent disabled:cursor-default disabled:text-muted-foreground/40 disabled:hover:bg-transparent motion-reduce:transition-none"
    >
      {children}
    </button>
  );
}

function Dot({ x, y, sunday, r }: { x: number; y: number; sunday: boolean; r: number }) {
  return sunday ? (
    <circle cx={x} cy={y} r={r} className="fill-accent stroke-background" strokeWidth={1.5} />
  ) : (
    <circle cx={x} cy={y} r={r} className="fill-background stroke-accent" strokeWidth={1.75} />
  );
}

function ActiveLabel({ mis, k, right }: { mis: Mis; k: number; right: boolean }) {
  const [x, y] = project(mis.lon, mis.lat);
  return (
    <g aria-hidden="true" pointerEvents="none" transform={`translate(${x} ${y}) scale(${k})`}>
      <circle r={12} fill="none" strokeWidth={1} className="stroke-accent" opacity={0.55} />
      <Dot x={0} y={0} sunday={mis.sunday} r={7} />
      <text
        x={right ? 14 : -14}
        y={5}
        textAnchor={right ? "start" : "end"}
        fontSize={17}
        className="fill-foreground stroke-background"
        strokeWidth={4}
        strokeLinejoin="round"
        paintOrder="stroke"
      >
        {mis.city}
      </text>
    </g>
  );
}

function MissenGroup({
  title,
  items,
  activeId,
  onActivate,
}: {
  title?: string;
  items: Mis[];
  activeId: string | null;
  onActivate: (id: string, scroll: boolean) => void;
}) {
  return (
    <section className="mb-12 last:mb-0">
      {title && (
        <h2 className="font-sans-ui mb-4 text-xs uppercase tracking-widest text-muted-foreground">
          {title}
        </h2>
      )}
      <ol className="border-b border-border">
        {items.map((m) => (
          <MisItem key={m.id} mis={m} on={m.id === activeId} onActivate={onActivate} />
        ))}
      </ol>
    </section>
  );
}

function MisItem({
  mis,
  on,
  onActivate,
}: {
  mis: Mis;
  on: boolean;
  onActivate: (id: string, scroll: boolean) => void;
}) {
  return (
    <li
      id={`mis-${mis.id}`}
      onMouseEnter={() => onActivate(mis.id, false)}
      onFocus={() => onActivate(mis.id, false)}
      onClick={() => onActivate(mis.id, false)}
      className={`scroll-mt-8 border-t border-l-2 border-border py-6 pl-5 transition-colors motion-reduce:transition-none ${
        on ? "border-l-accent bg-muted/50" : "border-l-transparent"
      }`}
    >
      <h3 className="text-2xl leading-snug">
        <span className="font-sans-ui mr-2 text-xs uppercase tracking-widest text-accent">
          {mis.org}
        </span>
        {mis.name}, {mis.city}
      </h3>
      {mis.time && <p className="mt-1 text-lg">{mis.time}</p>}
      <p className="text-muted-foreground">{mis.address}</p>
      {mis.links.length > 0 && (
        <p className="font-sans-ui mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {mis.links.map(([label, url]) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
            >
              {label}
            </a>
          ))}
        </p>
      )}
    </li>
  );
}
