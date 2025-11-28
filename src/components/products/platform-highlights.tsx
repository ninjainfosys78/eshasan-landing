import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Layers, Lock, PanelsTopLeft, Activity } from "lucide-react";
import { useLanguageStore } from "@/store/Language-store";
import { productTranslations } from "@/i18n/product-translation";

export default function PlatformHighlights() {
  const { language } = useLanguageStore();
  const t = productTranslations[language].platformHighlights;

  return (
    <section className="w-full bg-[#E6EBF4] py-16 font-['IBM Plex Sans']">
      <div className="mx-auto max-w-[1400px] px-4 md:px-3 sm:px-2">
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-bold text-[#000000] mb-3">
            {t.heading}
          </h2>
          <p className="text-[16px] text-[#6B7280]">
            {t.subtitle}
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-gray-300 bg-transparent shadow-none hover:shadow-none">
            <CardHeader className="flex flex-col items-center gap-3 pb-2 text-center px-6 pt-6">
              <Layers className="h-6 w-6 text-black" strokeWidth={1.5} />
              <CardTitle className="text-[16px] font-semibold text-[#072235]">{t.scalable.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-2 pb-6 px-6 text-center text-[13px] text-[#6B7280] leading-relaxed">
              {t.scalable.desc}
            </CardContent>
          </Card>

          <Card className="border-gray-300 bg-transparent shadow-none hover:shadow-none">
            <CardHeader className="flex flex-col items-center gap-3 pb-2 text-center px-6 pt-6">
              <Lock className="h-6 w-6 text-black" strokeWidth={1.5} />
              <CardTitle className="text-[16px] font-semibold text-[#072235]">
                {t.secureApis.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2 pb-6 px-6 text-center text-[13px] text-[#6B7280] leading-relaxed">
              {t.secureApis.desc}
            </CardContent>
          </Card>

          <Card className="border-gray-300 bg-transparent shadow-none hover:shadow-none">
            <CardHeader className="flex flex-col items-center gap-3 pb-2 text-center px-6 pt-6">
              <PanelsTopLeft className="h-6 w-6 text-black" strokeWidth={1.5} />
              <CardTitle className="text-[16px] font-semibold text-[#072235]">
                {t.modular.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2 pb-6 px-6 text-center text-[13px] text-[#6B7280] leading-relaxed">
              {t.modular.desc}
            </CardContent>
          </Card>

          <Card className="border-gray-300 bg-transparent shadow-none hover:shadow-none">
            <CardHeader className="flex flex-col items-center gap-3 pb-2 text-center px-6 pt-6">
              <Activity className="h-6 w-6 text-black" strokeWidth={1.5} />
              <CardTitle className="text-[16px] font-semibold text-[#072235]">
                {t.insights.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2 pb-6 px-6 text-center text-[13px] text-[#6B7280] leading-relaxed">
              {t.insights.desc}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
