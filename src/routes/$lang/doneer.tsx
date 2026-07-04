import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Copy } from "lucide-react";
import { useLanguage, type Language } from "@/lib/language-context";
import { SITE_URL } from "@/lib/site";

const IBAN = "NL43 RABO 0134 4856 10";

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

function DoneerHeader() {
  const { lang, t } = useLanguage();
  return (
    <header className="flex items-center justify-between border-b border-[#e6ddd0] px-6 py-4 md:px-11 md:py-6">
      <Link
        to="/$lang"
        params={{ lang }}
        className="font-[Cormorant_Garamond] text-[21px] font-semibold text-[#2b2420]"
      >
        Van Ars Fonds
      </Link>
      <nav className="flex items-center gap-6 text-sm text-[#6b625a] md:gap-[30px]">
        <Link
          to="/$lang/seminaristen"
          params={{ lang }}
          className="hover:text-[#2b2420] transition"
        >
          {t.nav_seminarians}
        </Link>
        <Link
          to="/$lang/doneer"
          params={{ lang }}
          className="border-b-[1.5px] border-[#a85b3f] pb-0.5 text-[#2b2420]"
        >
          {t.nav_donate}
        </Link>
        <DoneerLanguageToggle lang={lang} />
      </nav>
    </header>
  );
}

function DoneerLanguageToggle({ lang }: { lang: Language }) {
  const navigate = useNavigate();

  const switchLang = (newLang: Language) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(nl|en)/, `/${newLang}`);
    navigate({ to: newPath as any });
  };

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => switchLang("nl")}
        aria-label="Nederlands"
        className={lang === "nl" ? "font-semibold text-[#2b2420]" : "text-[#6b625a]"}
      >
        NL
      </button>
      <span className="text-[#c9c0b3]">/</span>
      <button
        type="button"
        onClick={() => switchLang("en")}
        aria-label="English"
        className={lang === "en" ? "font-semibold text-[#2b2420]" : "text-[#6b625a]"}
      >
        EN
      </button>
    </div>
  );
}

function Divider() {
  return (
    <div className="mb-9 flex items-center justify-center gap-[14px]">
      <span className="h-px flex-1 bg-[#e6ddd0]" />
      <span className="h-[7px] w-[7px] rotate-45 bg-[#a85b3f]" />
      <span className="h-px flex-1 bg-[#e6ddd0]" />
    </div>
  );
}

function CopyIbanButton() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(IBAN);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={t.doneer_copy_iban}
        className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#a85b3f] bg-transparent transition hover:bg-[#a85b3f]/10"
      >
        <Copy className="h-3.5 w-3.5 text-[#a85b3f]" strokeWidth={1.75} />
      </button>
      {copied && (
        <span className="whitespace-nowrap text-[12.5px] text-[#a85b3f]">
          {t.doneer_copied}
        </span>
      )}
    </span>
  );
}

function DoneerPage() {
  const { t } = useLanguage();

  return (
    <div
      className="min-h-screen bg-[#f9f5ef] text-[#2b2420]"
      style={{ fontFamily: "'EB Garamond', serif" }}
    >
      <DoneerHeader />

      <main className="px-6 pb-11 pt-11 md:px-12 md:pb-11 md:pt-[60px]">
        <div className="mx-auto max-w-[720px]">
          <div className="text-center">
            <h1 className="font-[Cormorant_Garamond] mb-[14px] text-[38px] font-semibold leading-[1.08] md:text-[46px]">
              {t.doneer_heading}
            </h1>
            <p className="italic text-[17px] text-[#8b8178]">{t.doneer_subheading}</p>
          </div>

          <div className="mt-9">
            <Divider />
          </div>

          <h2 className="font-[Cormorant_Garamond] mb-5 text-[26px] font-semibold">
            {t.doneer_gift_heading}
          </h2>

          <div className="space-y-5 text-[16.5px] leading-[1.75] text-[#3c352e]">
            <p>
              {t.doneer_body1_pre}
              <strong className="font-semibold">{t.doneer_body1_strong}</strong>
              {t.doneer_body1_post}
            </p>
            <p>{t.doneer_body2}</p>
          </div>

          <div className="mt-9 rounded-r-[3px] border-l-[3px] border-[#a85b3f] bg-[#f2ece2] px-6 py-8 shadow-[0_6px_18px_rgba(43,36,32,0.05)] md:px-[34px] md:py-[30px]">
            <h3 className="font-[Cormorant_Garamond] mb-5 text-xl font-semibold">
              {t.doneer_how_heading}
            </h3>
            <dl className="space-y-4">
              <div className="grid grid-cols-1 gap-1 md:grid-cols-[110px_1fr] md:gap-2 md:items-center">
                <dt className="text-[#8b8178]">{t.doneer_iban_label}</dt>
                <dd className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-base tracking-wide text-[#3c352e]">
                    {IBAN}
                  </span>
                  <CopyIbanButton />
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-[110px_1fr]">
                <dt className="text-[#8b8178]">{t.doneer_tnv_label}</dt>
                <dd className="text-[15.5px] text-[#3c352e]">
                  Vereniging van Latijnse Liturgie
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-[110px_1fr]">
                <dt className="text-[#8b8178]">{t.doneer_ovv_label}</dt>
                <dd className="text-[15.5px] text-[#3c352e]">
                  {t.doneer_ovv_value_prefix}
                  <em>{t.doneer_ovv_placeholder}</em>
                  {t.doneer_ovv_value_suffix}
                </dd>
              </div>
            </dl>
          </div>

          <p className="mt-11 text-center italic text-base text-[#8b8178]">
            {t.doneer_thanks}
          </p>
        </div>
      </main>
    </div>
  );
}
