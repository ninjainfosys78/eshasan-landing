import { Building2, Flag, Globe2, Building } from "lucide-react";
import { useLanguageStore } from "@/store/Language-store";
import { translations } from "@/i18n/translations";

export default function UseCases() {
  const { language } = useLanguageStore();
  const t = translations[language].useCases;

  const ITEMS = [
    {
      title: t.items.localGovernments.title,
      desc: t.items.localGovernments.desc,
      icon: Building2,
      bgColor: "bg-[#2B7FFF]",
    },
    {
      title: t.items.federalAgencies.title,
      desc: t.items.federalAgencies.desc,
      icon: Flag,
      bgColor: "bg-[#615FFF]",
    },
    {
      title: t.items.ingosNgos.title,
      desc: t.items.ingosNgos.desc,
      icon: Globe2,
      bgColor: "bg-[#8E51FF]",
    },
    {
      title: t.items.privateInstitutions.title,
      desc: t.items.privateInstitutions.desc,
      icon: Building,
      bgColor: "bg-[#AD46FF]",
    },
  ];

  return (
    <section
      aria-label="Trusted across sectors"
      className="w-full bg-[#E6EBF4] py-12"
    >
      {/* Container matching header max-width */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-3 sm:px-2">
        {/* Header Text */}
        <div className="text-center mb-8">
          <h2 className="text-[28px] font-bold text-black">
            {t.title}
          </h2>
          <p className="mt-3 text-[16px] text-slate-700">
            {t.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ITEMS.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div
                key={idx}
                className="border border-[rgba(13,52,86,0.08)] bg-[#E6EBF4] p-6 flex flex-col items-start gap-3"
              >
                <div
                  aria-hidden
                  className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center ${it.bgColor}`}
                >
                  <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                </div>

                <div className="w-full">
                  <h3 className="text-[20px] font-bold text-[#072235]">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-[1.6] text-[rgba(7,34,53,0.7)]">
                    {it.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
