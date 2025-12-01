import { Button } from "@/components/ui/button";
import { useLanguageStore } from "@/store/Language-store";
import { translations } from "@/i18n/translations";

export default function GlobalCTA() {
  const { language } = useLanguageStore();
  const t = translations[language].globalCta;

  return (
    <section
      aria-label="Global call to action"
      className="w-full box-border py-[48px] text-white bg-[linear-gradient(90deg,_#2b3bbf_0%,_#3b5ad6_40%,_#1f4fe0_100%)] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-4">
        <h2 className="m-0 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold! leading-[1.15]! text-white">
          {t.title}
        </h2>

        <p className="m-0 max-w-[840px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] text-[rgba(255,255,255,0.88)]">
          {t.subtitle}
        </p>

        <div className="mt-[8px] flex !gap-[12px]">
          <Button
            size="cta"
            onClick={() => {
              window.location.href = "/contact";
            }}
            aria-label="Book a Demo"
            className="!rounded-none bg-white! text-[#003893]! border border-white! font-semibold cursor-pointer md:h-12 md:text-[17px]! xl:h-[54px] xl:text-[18px]!"
          >
            <span className="inline-flex items-center !gap-[8px]">
              {t.bookDemo}
              <span
                aria-hidden
                className="!text-[14px] !ml-[6px]"
              >
                →
              </span>
            </span>
          </Button>

          <Button
            size="cta"
            variant="outline"
            onClick={() => {
              window.location.href = "/contact";
            }}
            aria-label="Contact Sales"
            className="!rounded-none bg-transparent! text-white! border border-[rgba(255,255,255,0.85)]! font-semibold cursor-pointer md:h-12 md:text-[17px]! xl:h-[54px] xl:text-[18px]!"
          >
            {t.contactSales}
          </Button>
        </div>
      </div>
    </section>
  );
}
