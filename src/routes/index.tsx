import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, DonateCTA } from "@/components/SiteLayout";
import heroImg from "@/assets/hero.jpg";
import seminariansImg from "@/assets/seminarians.jpg";
import { seminaristen } from "@/data/seminaristen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pastoor Van Ars Stichting — De toekomst van de Kerk" },
      {
        name: "description",
        content:
          "Ondersteuning van traditioneel katholieke roepingen en Nederlandse seminaristen bij het Instituut Christus Koning en Hogepriester.",
      },
      { property: "og:title", content: "Pastoor Van Ars Stichting" },
      {
        property: "og:description",
        content: "Ondersteuning van traditioneel katholieke roepingen.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell headerTransparent>
      {/* Hero */}
      <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Seminaristen tijdens de Heilige Mis"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-28 text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[1.05]">
            De toekomst van de Kerk.
          </h1>
          <p className="mt-8 text-xl md:text-2xl max-w-2xl opacity-95">
            Ondersteuning van traditioneel katholieke roepingen.
          </p>
          <div className="mt-10">
            <Link
              to="/doneer"
              className="inline-block bg-background/95 text-foreground px-12 py-4 text-base tracking-wide hover:bg-white transition"
            >
              Doneer
            </Link>
          </div>
        </div>
      </section>

      {/* Wat doen we */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12">
          <h2 className="text-5xl md:text-6xl">Wat doen we?</h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            Met onze financiële bijdragen maken wij het mogelijk dat{" "}
            <strong className="font-semibold">seminaristen</strong> hun scholing
            kunnen afmaken bij het Instituut Christus Koning en Hogepriester
            (ICK).
          </p>
        </div>
        <img
          src={seminariansImg}
          alt="Seminaristen in processie"
          className="w-full h-[60vh] object-cover"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </section>

      {/* Seminaristen grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <h2 className="text-4xl md:text-5xl text-center max-w-4xl mx-auto leading-tight">
            We ondersteunen alle Nederlandse seminaristen van het ICK.
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <h3 className="text-2xl">{s.name}</h3>
                  <p className="mt-3 font-semibold">{s.subtitle}</p>
                  <div className="mt-6">
                    <Link
                      to="/seminaristen/$slug"
                      params={{ slug: s.slug }}
                      className="inline-block bg-foreground text-background px-8 py-3 text-sm tracking-wide hover:opacity-90 transition"
                    >
                      Lees verder
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16">
          <h2 className="text-5xl md:text-6xl">Getuigenissen</h2>
          <div className="space-y-12 text-lg md:text-xl leading-relaxed">
            <div>
              <p>
                “Dankzij de steun van weldoeners kan ik mijn opleiding tot
                priester voltooien, zonder zorgen om financiële lasten. Iedere
                Mis die ik straks mag opdragen draag ik mede voor hen op.”
              </p>
              <p className="mt-4 font-semibold">— Een seminarist van het ICK.</p>
            </div>
            <div>
              <p>
                “Wij worden niet door Rome noch door het bisdom ondersteund. De
                bijdragen van de gelovigen maken het mogelijk dat er goed
                gevormde priesters voor de toekomst van de Kerk worden
                opgeleid.”
              </p>
              <p className="mt-4 font-semibold">— Heilige Pastoor Van Ars Stichting.</p>
            </div>
          </div>
        </div>
      </section>

      <DonateCTA />
    </PageShell>
  );
}
