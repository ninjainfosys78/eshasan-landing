import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useLanguageStore } from "@/store/Language-store";
import { solutionsTranslations } from "@/i18n/solutions-translation";

export default function KeyBenefits() {
  const { language } = useLanguageStore();
  const t = solutionsTranslations[language].benefits;

  const BENEFITS = [
    { title: t.transparency.title, desc: t.transparency.desc, icon: /* same svg */ (
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    )},
    { title: t.efficiency.title, desc: t.efficiency.desc, icon: (
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24">
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" />
        <path d="M18 17V9M13 17V5M8 17v-3" stroke="currentColor" strokeWidth="2" />
      </svg>
    )},
    { title: t.automation.title, desc: t.automation.desc, icon: (
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" />
      </svg>
    )},
    { title: t.impact.title, desc: t.impact.desc, icon: (
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24">
        <polyline points="3 17 7 11 11 15 15 9 21 13" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M18.5 7 L23 13 L18.5 15.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
      </svg>
    )},
  ];

  return (
    <section aria-label="Key benefits" className="py-12 bg-[#ffffff]">
      <div className="max-w-[1230px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-[28px] font-bold text-[#000000] mb-2">{t.heading}</h2>
          <p className="text-sm text-[#6B7280]">{t.subtitle}</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, idx) => (
            <Card key={idx} className="h-full border-gray-200 bg-white">
              <CardHeader className="px-6 pt-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="rounded p-2 bg-transparent">{benefit.icon}</div>
                  <CardTitle className="text-[15px] font-semibold">{benefit.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6 pt-3 text-center">
                <p className="text-sm text-[#6B7280]">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
