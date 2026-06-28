import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
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
          Pastoor Van Ars Fonds
        </Link>
        <nav className="flex items-center gap-8 text-sm md:text-base tracking-wide">
          <Link to="/seminaristen" className="hover:opacity-70 transition">
            Seminaristen
          </Link>
          <Link to="/doneer" className="hover:opacity-70 transition">
            Doneer
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-muted text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h3 className="text-3xl md:text-4xl">Heilige Pastoor Van Ars Fonds</h3>
        <p className="mt-8 font-semibold">Heilige Pastoor Van Ars Fonds</p>
        <p className="mt-4">info@vanars.nl</p>
        <p className="mt-1">IBAN: NL43 RABO 0134 4856 10</p>
        <p className="mt-1 text-sm text-muted-foreground">
          t.n.v. Vereniging van Latijnse Liturgie
        </p>
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
  return (
    <section className="bg-neutral-500/80 bg-[linear-gradient(rgba(60,55,50,0.55),rgba(60,55,50,0.55))] text-white">
      <div className="mx-auto max-w-3xl px-6 py-28 text-center">
        <h2 className="text-5xl md:text-6xl">Doneer alstublieft.</h2>
        <p className="mt-6 text-lg md:text-xl opacity-90">
          En investeer in de toekomst van de Kerk.
        </p>
        <div className="mt-10">
          <Link
            to="/doneer"
            className="inline-block bg-background text-foreground px-12 py-4 text-base tracking-wide hover:bg-white transition"
          >
            Doneer
          </Link>
        </div>
      </div>
    </section>
  );
}
