import {
  Workflow,
  WalletCards,
  BarChart3,
  Users,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useLanguageStore } from "@/store/Language-store";
import { translations } from "@/i18n/translations";

export default function CoreValue() {
  const { language } = useLanguageStore();
  const t = translations[language].coreValue;

  const CORE_VALUES = [
    {
      title: t.items.governanceAutomation.title,
      desc: t.items.governanceAutomation.desc,
      icon: Workflow,
    },
    {
      title: t.items.financialHr.title,
      desc: t.items.financialHr.desc,
      icon: WalletCards,
    },
    {
      title: t.items.dataIntegration.title,
      desc: t.items.dataIntegration.desc,
      icon: BarChart3,
    },
    {
      title: t.items.citizenEngagement.title,
      desc: t.items.citizenEngagement.desc,
      icon: Users,
    },
  ];

  return (
    <section
      aria-label="Core platform values"
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-[#b0c1de] bg-[#E6EBF4] shadow-none hover:shadow transition-all flex flex-col p-6">
                <CardHeader className="flex flex-col items-start gap-3 pb-3 p-0">
                  <Icon className="h-7 w-7 text-black" />
                  <CardTitle className="text-[20px] font-bold text-[#072235]">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 p-0 text-[16px] text-[rgba(7,34,53,0.7)] leading-[1.6]">
                  {item.desc}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
