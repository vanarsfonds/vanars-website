import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLanguage, type Language } from "@/lib/language-context";

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={
        transparent
          ? "absolute top-0 left-0 right-0 z-20 text-white"
          : "relative z-20 border-b border-border bg-background text-foreground"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link to="/$lang" params={{ lang }} className="text-xl md:text-2xl tracking-wide">
          Van Ars Fonds
        </Link>
        <nav className="hidden md:flex items-center gap-6 md:gap-8 text-sm md:text-base tracking-wide">
          <Link to="/$lang/seminaristen" params={{ lang }} className="hover:opacity-70 transition">
            {t.nav_seminarians}
          </Link>
          <Link to="/$lang/doneer" params={{ lang }} className="hover:opacity-70 transition">
            {t.nav_donate}
          </Link>
          <LanguageToggle lang={lang} transparent={transparent} />
        </nav>
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          aria-label={t.nav_toggle_menu}
          className="md:hidden flex h-11 w-11 items-center justify-center -mr-2"
        >
          <HamburgerIcon open={isOpen} />
        </button>
      </div>

      <div
        id="mobile-nav-panel"
        ref={panelRef}
        className={`md:hidden absolute inset-x-0 top-full z-30 overflow-hidden border-b border-border bg-background text-foreground shadow-lg transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4 text-base tracking-wide">
          <Link
            to="/$lang/seminaristen"
            params={{ lang }}
            onClick={closeMenu}
            className="flex min-h-11 items-center px-2 py-3 hover:opacity-70 transition"
          >
            {t.nav_seminarians}
          </Link>
          <Link
            to="/$lang/doneer"
            params={{ lang }}
            onClick={closeMenu}
            className="flex min-h-11 items-center px-2 py-3 hover:opacity-70 transition"
          >
            {t.nav_donate}
          </Link>
          <div className="mt-2 border-t border-border pt-3">
            <LanguageToggle lang={lang} transparent={false} onNavigate={closeMenu} />
          </div>
        </nav>
      </div>
    </header>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-4 w-5 flex-col justify-between">
      <span
        className={`block h-0.5 w-full bg-current transition-transform duration-200 ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-current transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-current transition-transform duration-200 ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

function LanguageToggle({
  lang,
  transparent,
  onNavigate,
}: {
  lang: Language;
  transparent: boolean;
  onNavigate?: () => void;
}) {
  const navigate = useNavigate();

  const switchLang = (newLang: Language) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(nl|en)/, `/${newLang}`);
    navigate({ to: newPath as any });
    onNavigate?.();
  };

  const base = transparent
    ? "text-white/70 hover:text-white transition text-xs md:text-sm tracking-widest font-medium"
    : "text-muted-foreground hover:text-foreground transition text-xs md:text-sm tracking-widest font-medium";
  const active = transparent
    ? "text-white font-semibold"
    : "text-foreground font-semibold";

  return (
    <div className="flex items-center gap-1 ml-2">
      <button
        onClick={() => switchLang("nl")}
        className={`min-h-11 min-w-11 inline-flex items-center justify-center px-3 py-2 ${lang === "nl" ? active : base}`}
        aria-label="Nederlands"
      >
        NL
      </button>
      <span className={transparent ? "text-white/40" : "text-muted-foreground/60"}>
        /
      </span>
      <button
        onClick={() => switchLang("en")}
        className={`min-h-11 min-w-11 inline-flex items-center justify-center px-3 py-2 ${lang === "en" ? active : base}`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="bg-muted text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h3 className="text-3xl md:text-4xl">{t.footer_heading}</h3>
        <p className="mt-8 font-semibold">{t.footer_org}</p>
        <p className="mt-4">vanarsfonds@protonmail.com</p>
        <p className="mt-1">IBAN: NL43 RABO 0134 4856 10</p>
        <p className="mt-1 text-sm text-muted-foreground">{t.footer_tnv}</p>
      </div>
    </footer>
  );
}

export function PageShell({
  children,
  headerTransparent = false,
}: {
  children: ReactNode;
  headerTransparent?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader transparent={headerTransparent} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function DonateCTA() {
  const { lang, t } = useLanguage();
  return (
    <section className="bg-neutral-500/80 bg-[linear-gradient(rgba(60,55,50,0.55),rgba(60,55,50,0.55))] text-white">
      <div className="mx-auto max-w-3xl px-6 py-28 text-center">
        <h2 className="text-5xl md:text-6xl">{t.cta_heading}</h2>
        <p className="mt-6 text-lg md:text-xl opacity-90">{t.cta_body}</p>
        <div className="mt-10">
          <Link
            to="/$lang/doneer"
            params={{ lang }}
            className="inline-block bg-background text-foreground px-12 py-4 text-base tracking-wide hover:bg-white transition"
          >
            {t.cta_btn}
          </Link>
        </div>
      </div>
    </section>
  );
}
