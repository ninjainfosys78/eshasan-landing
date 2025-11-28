import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GitMerge, ShieldCheck, Users, Cloud } from "lucide-react";
import { useLanguageStore } from "@/store/Language-store";
import { productTranslations } from "@/i18n/product-translation";

export default function WhyChooseEshasan() {
  const { language } = useLanguageStore();
  const t = productTranslations[language].whyChoose;

  return (
    <section className="w-full bg-white py-16 font-['IBM Plex Sans']">
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
          <Card className="border-gray-200 shadow-none">
            <CardHeader className="flex flex-col items-center gap-3 pb-2 px-6 pt-6 text-center">
              <GitMerge className="h-6 w-6 text-black" strokeWidth={1.5} />
              <CardTitle className="text-[16px] font-semibold text-[#000000]">{t.integration.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-2 pb-6 px-6 text-[13px] text-[#6B7280] leading-relaxed text-center">
              {t.integration.desc}
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-none">
            <CardHeader className="flex flex-col items-center gap-3 pb-2 px-6 pt-6 text-center">
              <ShieldCheck className="h-6 w-6 text-black" strokeWidth={1.5} />
              <CardTitle className="text-[16px] font-semibold text-[#000000]">{t.security.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-2 pb-6 px-6 text-[13px] text-[#6B7280] leading-relaxed text-center">
              {t.security.desc}
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-none">
            <CardHeader className="flex flex-col items-center gap-3 pb-2 px-6 pt-6 text-center">
              <Users className="h-6 w-6 text-black" strokeWidth={1.5} />
              <CardTitle className="text-[16px] font-semibold text-[#000000]">{t.citizen.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-2 pb-6 px-6 text-[13px] text-[#6B7280] leading-relaxed text-center">
              {t.citizen.desc}
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-none">
            <CardHeader className="flex flex-col items-center gap-3 pb-2 px-6 pt-6 text-center">
              <Cloud className="h-6 w-6 text-black" strokeWidth={1.5} />
              <CardTitle className="text-[16px] font-semibold text-[#000000]">{t.cloud.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-2 pb-6 px-6 text-[13px] text-[#6B7280] leading-relaxed text-center">
              {t.cloud.desc}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
