import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Layers, Lock, PanelsTopLeft, Activity } from "lucide-react";
import { useLanguageStore } from "@/store/Language-store";
import { productTranslations } from "@/i18n/product-translation";

export default function PlatformHighlights() {
  const { language } = useLanguageStore();
  const t = productTranslations[language].platformHighlights;

  return (
    <section className="w-full bg-[#E6EBF4] py-16 font-['IBM Plex Sans']">
      <div className="mx-auto max-w-[1230px] px-4">
        <div className="text-center">
          <h2 className="text-[28px] font-semibold tracking-[0.02em] text-[#0B0D12]">
            {t.heading}
          </h2>
          <p className="mt-2 text-sm text-[#4B5563]">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <Card className="border-[#CDD5E0] bg-[#E6EBF4] shadow-none">
            <CardHeader className="flex flex-col items-center gap-2 pb-2 text-center">
              <Layers className="h-6 w-6 text-slate-700" />
              <CardTitle className="text-[16px] ">{t.scalable.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-center text-sm text-[#4B5563]">
              {t.scalable.desc}
            </CardContent>
          </Card>

          <Card className="border-[#CDD5E0] bg-[#E6EBF4] shadow-none">
            <CardHeader className="flex flex-col items-center gap-2 pb-2 text-center">
              <Lock className="h-6 w-6 text-slate-700" />
              <CardTitle className="text-[16px] font-semibold">
                {t.secureApis.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-center text-sm text-[#4B5563]">
              {t.secureApis.desc}
            </CardContent>
          </Card>

          <Card className="border-[#CDD5E0] bg-[#E6EBF4] shadow-none">
            <CardHeader className="flex flex-col items-center gap-2 pb-2 text-center">
              <PanelsTopLeft className="h-6 w-6 text-slate-700" />
              <CardTitle className="text-[16px] font-semibold">
                {t.modular.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-center text-sm text-[#4B5563]">
              {t.modular.desc}
            </CardContent>
          </Card>

          <Card className="border-[#CDD5E0] bg-[#E6EBF4] shadow-none">
            <CardHeader className="flex flex-col items-center gap-2 pb-2 text-center">
              <Activity className="h-6 w-6 text-slate-700" />
              <CardTitle className="text-[16px] font-semibold">
                {t.insights.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-center text-sm text-[#4B5563]">
              {t.insights.desc}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
