import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useLanguageStore } from "@/store/Language-store";
import { solutionsTranslations } from "@/i18n/solutions-translation";
import { Settings, Wallet, BarChart3, Users, Shield, Building2 } from "lucide-react";

export default function KeySolutions() {
  const { language } = useLanguageStore();
  const t = solutionsTranslations[language].keySolutions;

  const ITEMS = [
    { 
      title: t.governance.title, 
      desc: t.governance.desc, 
      icon: Settings
    },
    { 
      title: t.finance.title, 
      desc: t.finance.desc, 
      icon: Wallet
    },
    { 
      title: t.analytics.title, 
      desc: t.analytics.desc, 
      icon: BarChart3
    },
    { 
      title: t.citizen.title, 
      desc: t.citizen.desc, 
      icon: Users
    },
    { 
      title: t.security.title, 
      desc: t.security.desc, 
      icon: Shield
    },
    { 
      title: t.infrastructure.title, 
      desc: t.infrastructure.desc, 
      icon: Building2
    },
  ];

  return (
    <section aria-label="Key solution categories" className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-3 sm:px-2">
        <h1 className="text-center text-[28px] font-bold text-black mb-10">
          {t.heading}
        </h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="h-full border-gray-200 shadow-none hover:shadow-md transition-shadow">
                <CardHeader className="px-6 pt-6 pb-2">
                  <div className="flex flex-col items-start text-left gap-3">
                    <Icon className="h-6 w-6 text-black" strokeWidth={1.5} />
                    <CardTitle className="text-[16px] font-semibold text-[#072235] leading-tight">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-2 text-left">
                  <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
