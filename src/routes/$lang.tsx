import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { LanguageProvider, type Language } from "@/lib/language-context";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (params.lang !== "nl" && params.lang !== "en") {
      throw redirect({ to: "/$lang/", params: { lang: "nl" } });
    }
  },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = Route.useParams();
  return (
    <LanguageProvider lang={lang as Language}>
      <Outlet />
    </LanguageProvider>
  );
}
