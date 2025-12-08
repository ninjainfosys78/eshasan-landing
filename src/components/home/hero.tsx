import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from "@/store/Language-store";
import { translations } from "@/i18n/translations";

// Lazy load the heavy WireframeGlobe component
const WireframeGlobe = lazy(() => import("./WireframeGlobe"));

export default function Hero() {
  const { language } = useLanguageStore();
  const t = translations[language].hero;

  return (
    <section
      className="box-border flex items-center justify-center px-4 sm:px-6 min-h-[90vh] md:py-[1.5rem]"
      aria-label="Hero section"
    >
      <div
        className="hero__inner relative mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-[20px] md:flex-row md:gap-[32px]"
      >
        <div className="relative z-10 min-w-[320px] max-w-[600px] flex-1">
          <h1
            className="
              m-0 font-extrabold leading-[1.05] text-black
              text-[2.2rem]
              sm:text-[2.5rem]
              md:text-[3.2rem]
              lg:text-[3.6rem]
              xl:text-[3.9rem]
              2xl:text-[4.2rem]
            "
          >
            {t.title1}
            <br />
            <span className="block text-[#003893]">{t.title2}</span>
          </h1>

          <p
            className="
              mt-5 mb-8 text-black max-w-[620px]
              text-[1rem]
              sm:text-[1.1rem]
              md:text-[1.2rem]
              xl:text-[1.3rem]
              2xl:text-[1.38rem]
            "
          >
            {t.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-[14px]">
            <Button
              size="cta"
              className="!rounded-none bg-[#003893]! border-[#003893]! text-white! md:h-12 md:text-[17px]! xl:h-[54px] xl:text-[18px]! cursor-pointer"
              onClick={() => {
                window.location.href = "/#";
              }}
            >
              {t.requestDemo}
            </Button>

            <Button
              size="cta"
              variant="outline"
              className="!rounded-none bg-transparent! border-[#003893]! text-[#003893]! md:h-12 md:text-[17px]! xl:h-[54px] xl:text-[18px]! cursor-pointer"
              onClick={() => {
                window.location.href = "/#";
              }}
            >
              {t.seeModules}
            </Button>
          </div>
        </div>

        <div
          className="
            hero-visual flex items-center justify-center
            md:static md:mt-0
            max-[750px]:pointer-events-none
            max-[750px]:absolute
            max-[750px]:inset-0
            max-[750px]:flex
            max-[750px]:items-center
            max-[750px]:justify-center
            max-[750px]:z-0
            max-[750px]:opacity-40
          "
          aria-hidden="true"
        >
          <Suspense
            fallback={
              <div className="w-[500px] h-[500px] flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-[#003893] border-t-transparent rounded-full animate-spin"></div>
              </div>
            }
          >
            <WireframeGlobe />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
