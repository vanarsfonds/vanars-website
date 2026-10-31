import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteLayout";
import { LanguageProvider } from "@/lib/language-context";

const MAP_SRC =
  "https://www.google.com/maps/d/embed?mid=1fVuJpRmUWHh6VKFxrgzbIyJqJWFq2qw&ehbc=2E312F&noprof=1";

// Verborgen pagina: niet gelinkt, niet geïndexeerd (zie ook vercel.json).
export const Route = createFileRoute("/kerken")({
  head: () => ({
    meta: [
      { title: "Kerken — Van Ars Fonds" },
      { name: "robots", content: "noindex, nofollow, noarchive" },
    ],
  }),
  headers: () => ({ "X-Robots-Tag": "noindex, nofollow" }),
  component: KerkenPage,
});

function KerkenPage() {
  return (
    <LanguageProvider lang="nl">
      <PageShell showLanguageToggle={false}>
        <div lang="nl" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <header className="text-center">
            <h1 className="text-5xl md:text-6xl">Potentiële kerken voor ICK in NL</h1>
          </header>

          <div className="mt-12 h-[70vh] min-h-[420px] border border-border">
            <iframe
              src={MAP_SRC}
              title="Kaart met potentiële kerken voor ICK in Nederland"
              loading="lazy"
              className="h-full w-full"
            />
          </div>
        </div>
      </PageShell>
    </LanguageProvider>
  );
}
