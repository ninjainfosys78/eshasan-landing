import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PrivacyContent from "../components/privacy-policy/content";
import GlobalCTA from "@/components/home/global-cta";
import { useLanguageStore } from "@/store/Language-store";
import { privacyTranslations } from "@/i18n/privacy-translation";

export const Route = createFileRoute("/privacy-policy" as any)({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const { language } = useLanguageStore();
  const t = privacyTranslations[language].hero;

  return (
    <>
      <Header />

      <main>
        <section aria-label="Privacy Policy hero" className="w-full bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="m-0 text-[32px] font-bold text-[#000000]">
              {t.title}
            </h1>

            <p className="mt-3 text-sm sm:text-base font-normal text-[#4B5563]">
              {t.subtitle}
            </p>
          </div>
        </section>

        <PrivacyContent />
        <GlobalCTA />
      </main>

      <Footer />
    </>
  );
}
