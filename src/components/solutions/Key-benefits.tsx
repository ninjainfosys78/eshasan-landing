import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useLanguageStore } from "@/store/Language-store";
import { solutionsTranslations } from "@/i18n/solutions-translation";
import { Eye, Zap, Cpu, TrendingUp } from "lucide-react";

export default function KeyBenefits() {
  const { language } = useLanguageStore();
  const t = solutionsTranslations[language].benefits;

  const BENEFITS = [
    { 
      title: t.transparency.title, 
      desc: t.transparency.desc, 
      icon: Eye
    },
    { 
      title: t.efficiency.title, 
      desc: t.efficiency.desc, 
      icon: Zap
    },
    { 
      title: t.automation.title, 
      desc: t.automation.desc, 
      icon: Cpu
    },
    { 
      title: t.impact.title, 
      desc: t.impact.desc, 
      icon: TrendingUp
    },
  ];

  return (
    <section aria-label="Key benefits" className="py-12 bg-[#ffffff]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-3 sm:px-2">
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-bold text-[#000000] mb-3">{t.heading}</h2>
          <p className="text-[16px] text-[#6B7280]">{t.subtitle}</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Card key={idx} className="h-full border-gray-200 bg-white shadow-none hover:shadow-md transition-shadow">
                <CardHeader className="px-6 pt-6 pb-2">
                  <div className="flex flex-col items-center text-center gap-3">
                    <Icon className="h-8 w-8 text-black" strokeWidth={1.5} />
                    <CardTitle className="text-[16px] font-semibold text-[#000000]">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-2 text-center">
                  <p className="text-[14px] text-[#6B7280] leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
