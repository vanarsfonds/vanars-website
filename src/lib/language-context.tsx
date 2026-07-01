import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations } from "./translations";

export type Language = "nl" | "en";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "nl",
  setLang: () => {},
});

export function LanguageProvider({
  children,
  lang: forcedLang,
}: {
  children: ReactNode;
  lang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(() => {
    if (forcedLang) return forcedLang;
    if (typeof window === "undefined") return "nl";
    return (localStorage.getItem("lang") as Language) ?? "nl";
  });

  useEffect(() => {
    if (forcedLang) setLangState(forcedLang);
  }, [forcedLang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (!forcedLang) localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const { lang, setLang } = useContext(LanguageContext);
  return { lang, setLang, t: translations[lang] };
}

/** Safely read a localized string without triggering TypeScript index errors. */
export function loc(text: { nl: string; en: string }, lang: Language): string {
  return lang === "en" ? text.en : text.nl;
}
