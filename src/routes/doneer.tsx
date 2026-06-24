import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteLayout";

export const Route = createFileRoute("/doneer")({
  head: () => ({
    meta: [
      { title: "Doneer — Pastoor Van Ars Stichting" },
      {
        name: "description",
        content:
          "Doneer aan de Heilige Pastoor Van Ars Stichting. Giften zijn fiscaal aftrekbaar via de Vereniging van Latijnse Liturgie (ANBI).",
      },
    ],
  }),
  component: DoneerPage,
});

function DoneerPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <h1 className="text-5xl md:text-6xl text-center">Doneer alstublieft.</h1>
        <p className="mt-6 text-center text-xl text-muted-foreground">
          En investeer in de toekomst van de Kerk.
        </p>

        <div className="mt-16 border-t border-border pt-12 space-y-10 text-lg leading-relaxed">
          <div>
            <h2 className="text-3xl mb-4">
              Gift t.b.v. priesterstudent bij Instituut Christus Koning
            </h2>
            <p>
              De doelstelling “Het financieel ondersteunen van (buitenlandse)
              priesterstudenten die specifiek opgeleid worden om de liturgie
              volgens de normen van de RK Kerk in het Latijn te vieren” valt
              binnen de statuten van de Vereniging van Latijnse Liturgie en
              binnen de fiscale regelgeving voor een ANBI, waardoor een gift
              fiscaal aftrekbaar is voor de Nederlandse Inkomstenbelasting.
            </p>
            <p className="mt-4">
              De Vereniging maakt de donaties elk kwartaal over naar het
              Instituut Christus Koning, dat zelf geen ANBI in Nederland heeft.
            </p>
          </div>

          <div className="bg-muted/60 p-8 md:p-10 border-l-4 border-accent">
            <h3 className="text-2xl mb-6">Hoe u kunt bijdragen</h3>
            <dl className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2">
                <dt className="font-semibold">IBAN</dt>
                <dd className="font-sans-ui tracking-wide">
                  NL43 RABO 0134 4856 10
                </dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2">
                <dt className="font-semibold">T.n.v.</dt>
                <dd>Vereniging van Latijnse Liturgie</dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2">
                <dt className="font-semibold">O.v.v.</dt>
                <dd>
                  “Gift t.b.v. priesteropleiding van{" "}
                  <em>(naam priesterstudent invullen)</em> bij Instituut
                  Christus Koning”
                </dd>
              </div>
            </dl>
          </div>

          <p className="text-center text-xl italic pt-4">
            Dank voor uw steun, moge God u rijkelijk zegenen.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
