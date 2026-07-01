import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageShell, DonateCTA } from "@/components/SiteLayout";
import { getSeminarist, seminaristen } from "@/data/seminaristen";
import { useLanguage } from "@/lib/language-context";

export const Route = createFileRoute("/$lang/seminaristen/$slug")({
  loader: ({ params }) => {
    const s = getSeminarist(params.slug);
    if (!s) throw notFound();
    return { seminarist: s };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Seminarist ${loaderData.seminarist.name} — Van Ars Fonds` },
          {
            name: "description",
            content: `${loaderData.seminarist.name}, ${loaderData.seminarist.subtitle.nl}. ${loaderData.seminarist.intro.nl}`,
          },
          { property: "og:title", content: `Seminarist ${loaderData.seminarist.name}` },
          { property: "og:image", content: loaderData.seminarist.image },
          { property: "twitter:image", content: loaderData.seminarist.image },
        ]
      : [],
  }),
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorPage,
  component: SeminaristDetail,
});

function NotFoundPage() {
  const { lang, t } = useLanguage();
  return (
    <PageShell>
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-4xl">{t.seminarist_not_found}</h1>
        <Link to="/$lang/seminaristen" params={{ lang }} className="mt-6 inline-block underline">
          {t.seminarist_back}
        </Link>
      </div>
    </PageShell>
  );
}

function ErrorPage() {
  const { t } = useLanguage();
  return (
    <PageShell>
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-3xl">{t.seminarist_error}</h1>
      </div>
    </PageShell>
  );
}

function SeminaristDetail() {
  const { seminarist: s } = Route.useLoaderData() as {
    seminarist: import("@/data/seminaristen").Seminarist;
  };
  const { lang, t } = useLanguage();
  const l = (text: { nl: string; en: string }): string =>
    lang === "en" ? text.en : text.nl;
  const others = seminaristen.filter((x) => x.slug !== s.slug);

  return (
    <PageShell>
      <article className="bg-background">
        <header className="mx-auto max-w-4xl px-6 pt-20 pb-12 md:pt-28 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-sans-ui">
            {t.seminarist_label}
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl">{s.name}</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            {t.seminarist_birth_year}: {s.birthYear}
            <br />
            {l(s.origin)}
          </p>
        </header>

        <div className="mx-auto max-w-5xl px-6">
          <img
            src={s.image}
            alt={s.name}
            className="w-full aspect-[4/3] object-cover"
            width={1200}
            height={900}
            loading="lazy"
          />
        </div>

        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xl md:text-2xl leading-relaxed text-center italic">
            {l(s.intro)}
          </p>
        </div>

        {s.sections.map((section) => (
          <section key={section.title.nl} className="border-t border-border">
            <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
              <h2 className="text-3xl md:text-4xl leading-tight">
                {l(section.title)}
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{l(p)}</p>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="border-t border-border bg-muted/40">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-10">
            {s.numbered.map((item, i) => (
              <div key={item.title.nl}>
                <h3 className="text-2xl md:text-3xl">
                  <span className="text-muted-foreground mr-3">{i + 1} —</span>
                  {l(item.title)}
                </h3>
                <p className="mt-5 text-lg leading-relaxed">{l(item.quote)}</p>
              </div>
            ))}
          </div>
        </section>

        {others.length > 0 && (
          <section className="border-t border-border">
            <div className="mx-auto max-w-6xl px-6 py-20 text-center">
              <h2 className="text-3xl">{t.seminarist_others}</h2>
              <div className="mt-10 flex flex-wrap justify-center gap-6">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    to="/$lang/seminaristen/$slug"
                    params={{ lang, slug: o.slug }}
                    className="underline text-lg hover:no-underline"
                  >
                    {o.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
      <DonateCTA />
    </PageShell>
  );
}
