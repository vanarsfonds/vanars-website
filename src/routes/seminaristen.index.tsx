import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, DonateCTA } from "@/components/SiteLayout";
import { seminaristen } from "@/data/seminaristen";
import { useLanguage } from "@/lib/language-context";

export const Route = createFileRoute("/seminaristen/")({
  head: () => ({
    meta: [
      { title: "Seminaristen — Van Ars Fonds" },
      {
        name: "description",
        content:
          "Maak kennis met de Nederlandse seminaristen die wij ondersteunen bij het Instituut Christus Koning.",
      },
    ],
  }),
  component: SeminaristenList,
});

function SeminaristenList() {
  const { lang, t } = useLanguage();
  const l = (text: { nl: string; en: string }): string =>
    lang === "en" ? text.en : text.nl;

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <h1 className="text-5xl md:text-6xl text-center">{t.seminaristen_heading}</h1>
        <p className="mt-6 text-center text-xl text-muted-foreground max-w-2xl mx-auto">
          {t.seminaristen_subheading}
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {seminaristen.map((s) => (
            <article key={s.slug} className="bg-muted/50 p-6 flex flex-col">
              <img
                src={s.image}
                alt={s.name}
                className="aspect-[4/5] w-full object-cover"
                width={800}
                height={1024}
                loading="lazy"
              />
              <div className="text-center pt-8 pb-4 flex-1 flex flex-col">
                <h2 className="text-2xl">{s.name}</h2>
                <p className="mt-3 font-semibold">{l(s.subtitle)}</p>
                <div className="mt-6">
                  <Link
                    to="/seminaristen/$slug"
                    params={{ slug: s.slug }}
                    className="inline-block bg-foreground text-background px-8 py-3 text-sm tracking-wide hover:opacity-90 transition"
                  >
                    {t.grid_read_more}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <DonateCTA />
    </PageShell>
  );
}
