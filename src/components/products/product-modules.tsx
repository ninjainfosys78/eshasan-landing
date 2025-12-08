import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Settings,
  Wallet,
  BarChart3,
  Users,
  Shield,
  Building2,
} from "lucide-react";
import { useLanguageStore } from "@/store/Language-store";
import { productTranslations } from "@/i18n/product-translation";

export default function ProductModules() {
  const { language } = useLanguageStore();
  const t = productTranslations[language].modules;

  const modules = [
    {
      icon: Settings,
      title: t.governance.title,
      desc: t.governance.desc,
    },
    {
      icon: Wallet,
      title: t.finance.title,
      desc: t.finance.desc,
    },
    {
      icon: BarChart3,
      title: t.analytics.title,
      desc: t.analytics.desc,
    },
    {
      icon: Users,
      title: t.citizen.title,
      desc: t.citizen.desc,
    },
    {
      icon: Shield,
      title: t.security.title,
      desc: t.security.desc,
    },
    {
      icon: Building2,
      title: t.infrastructure.title,
      desc: t.infrastructure.desc,
    },
  ];

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-[1400px] px-4 md:px-3 sm:px-2">
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-bold text-[#000000] mb-3">
            {t.heading}
          </h2>
          <p className="text-[16px] text-[#374151]">
            {t.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module, idx) => {
            const Icon = module.icon;
            return (
              <Card key={idx} className="shadow-none hover:shadow-none transition-shadow border-gray-200">
                <CardHeader className="px-6 pt-6 pb-2">
                  <div className="flex flex-col items-start text-left gap-3">
                    <Icon className="h-6 w-6 text-black" strokeWidth={1.5} />
                    <CardTitle className="text-[16px] font-semibold text-[#072235] leading-tight">
                      {module.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-2 text-left">
                  <p className="text-[14px] text-[#374151] leading-relaxed">
                    {module.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
