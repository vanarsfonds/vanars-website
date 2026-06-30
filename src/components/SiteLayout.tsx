import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useLanguage, type Language } from "@/lib/language-context";

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <header
      className={
        transparent
          ? "absolute top-0 left-0 right-0 z-20 text-white"
          : "border-b border-border bg-background text-foreground"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link to="/" className="text-xl md:text-2xl tracking-wide">
          Van Ars Fonds
        </Link>
        <nav className="flex items-center gap-6 md:gap-8 text-sm md:text-base tracking-wide">
          <Link to="/seminaristen" className="hover:opacity-70 transition">
            {t.nav_seminarians}
          </Link>
          <Link to="/doneer" className="hover:opacity-70 transition">
            {t.nav_donate}
          </Link>
          <LanguageToggle lang={lang} setLang={setLang} transparent={transparent} />
        </nav>
      </div>
    </header>
  );
}

function LanguageToggle({
  lang,
  setLang,
  transparent,
}: {
  lang: Language;
  setLang: (l: Language) => void;
  transparent: boolean;
}) {
  const base = transparent
    ? "text-white/70 hover:text-white transition text-xs md:text-sm tracking-widest font-medium"
    : "text-muted-foreground hover:text-foreground transition text-xs md:text-sm tracking-widest font-medium";
  const active = transparent
    ? "text-white font-semibold"
    : "text-foreground font-semibold";

  return (
    <div className="flex items-center gap-1 ml-2">
      <button
        onClick={() => setLang("nl")}
        className={lang === "nl" ? active : base}
        aria-label="Nederlands"
      >
        NL
      </button>
      <span className={transparent ? "text-white/40" : "text-muted-foreground/60"}>
        /
      </span>
      <button
        onClick={() => setLang("en")}
        className={lang === "en" ? active : base}
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
        <p className="mt-4">info@vanars.nl</p>
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
  const { t } = useLanguage();
  return (
    <section className="bg-neutral-500/80 bg-[linear-gradient(rgba(60,55,50,0.55),rgba(60,55,50,0.55))] text-white">
      <div className="mx-auto max-w-3xl px-6 py-28 text-center">
        <h2 className="text-5xl md:text-6xl">{t.cta_heading}</h2>
        <p className="mt-6 text-lg md:text-xl opacity-90">{t.cta_body}</p>
        <div className="mt-10">
          <Link
            to="/doneer"
            className="inline-block bg-background text-foreground px-12 py-4 text-base tracking-wide hover:bg-white transition"
          >
            {t.cta_btn}
          </Link>
        </div>
      </div>
    </section>
  );
}
