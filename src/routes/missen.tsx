import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
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

  return (
    <figure>
      <svg
        viewBox={MAP_VIEWBOX}
        role="group"
        aria-label="Kaart van Nederland met de plaatsen van de missen"
        className="block h-auto max-h-[56vh] w-full md:max-h-[80vh]"
      >
        <path
          d={GEO.de}
          className="fill-card stroke-border"
          strokeWidth={0.75}
          strokeLinejoin="round"
        />
        <path
          d={GEO.be}
          className="fill-card stroke-border"
          strokeWidth={0.75}
          strokeLinejoin="round"
        />
        <path
          d={GEO.nl}
          className="fill-muted stroke-border"
          strokeWidth={0.9}
          strokeLinejoin="round"
        />
        <path
          d={GEO.water}
          className="fill-background stroke-border"
          strokeWidth={0.9}
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
              {/* ruime klikzone */}
              <circle cx={x} cy={y} r={14} fill="transparent" />
              <circle
                cx={x}
                cy={y}
                r={12}
                fill="none"
                strokeWidth={1.5}
                className="stroke-foreground opacity-0 group-focus-visible:opacity-100"
              />
              <Dot x={x} y={y} sunday={m.sunday} r={on ? 7 : 5} />
            </g>
          );
        })}

        {/* Actieve markering en label bovenop, zodat overlappende markers (bv. Leiden) leesbaar blijven. */}
        {active && <ActiveLabel mis={active} />}
      </svg>

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

function Dot({ x, y, sunday, r }: { x: number; y: number; sunday: boolean; r: number }) {
  return sunday ? (
    <circle cx={x} cy={y} r={r} className="fill-accent stroke-background" strokeWidth={1.5} />
  ) : (
    <circle cx={x} cy={y} r={r} className="fill-background stroke-accent" strokeWidth={1.75} />
  );
}

function ActiveLabel({ mis }: { mis: Mis }) {
  const [x, y] = project(mis.lon, mis.lat);
  const right = x < 300;
  return (
    <g aria-hidden="true" pointerEvents="none">
      <circle
        cx={x}
        cy={y}
        r={12}
        fill="none"
        strokeWidth={1}
        className="stroke-accent"
        opacity={0.55}
      />
      <Dot x={x} y={y} sunday={mis.sunday} r={7} />
      <text
        x={x + (right ? 14 : -14)}
        y={y + 5}
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
