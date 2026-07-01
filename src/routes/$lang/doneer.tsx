import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteLayout";
import { useLanguage } from "@/lib/language-context";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/$lang/doneer")({
  head: ({ params }) => ({
    meta: [
      { title: "Doneer — Van Ars Fonds" },
      {
        name: "description",
        content:
          "Doneer aan het Van Ars Fonds. Giften zijn fiscaal aftrekbaar via de Vereniging van Latijnse Liturgie (ANBI).",
      },
      { property: "og:title", content: "Doneer — Van Ars Fonds" },
      {
        property: "og:description",
        content:
          "Doneer aan het Van Ars Fonds. Giften zijn fiscaal aftrekbaar via de Vereniging van Latijnse Liturgie (ANBI).",
      },
      { property: "og:url", content: `${SITE_URL}/${params.lang}/doneer` },
    ],
  }),
  component: DoneerPage,
});

function DoneerPage() {
  const { t } = useLanguage();

  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <h1 className="text-5xl md:text-6xl text-center">{t.doneer_heading}</h1>
        <p className="mt-6 text-center text-xl text-muted-foreground">
          {t.doneer_subheading}
        </p>

        <div className="mt-16 border-t border-border pt-12 space-y-10 text-lg leading-relaxed">
          <div>
            <h2 className="text-3xl mb-4">{t.doneer_gift_heading}</h2>
            <p>
              {t.doneer_body1_pre}
              <strong className="font-semibold">{t.doneer_body1_strong}</strong>
              {t.doneer_body1_post}
            </p>
            <p className="mt-4">{t.doneer_body2}</p>
          </div>

          <div className="bg-muted/60 p-8 md:p-10 border-l-4 border-accent">
            <h3 className="text-2xl mb-6">{t.doneer_how_heading}</h3>
            <dl className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2">
                <dt className="font-semibold">{t.doneer_iban_label}</dt>
                <dd className="font-sans-ui tracking-wide">
                  NL43 RABO 0134 4856 10
                </dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2">
                <dt className="font-semibold">{t.doneer_tnv_label}</dt>
                <dd>Vereniging van Latijnse Liturgie</dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2">
                <dt className="font-semibold">{t.doneer_ovv_label}</dt>
                <dd>
                  {t.doneer_ovv_value_prefix}
                  <em>{t.doneer_ovv_placeholder}</em>
                  {t.doneer_ovv_value_suffix}
                </dd>
              </div>
            </dl>
          </div>

          <p className="text-center text-xl italic pt-4">{t.doneer_thanks}</p>
        </div>
      </section>
    </PageShell>
  );
}
