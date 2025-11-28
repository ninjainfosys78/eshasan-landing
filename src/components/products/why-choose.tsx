import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GitMerge, ShieldCheck, Users, Cloud } from "lucide-react";
import { useLanguageStore } from "@/store/Language-store";
import { productTranslations } from "@/i18n/product-translation";

export default function WhyChooseEshasan() {
  const { language } = useLanguageStore();
  const t = productTranslations[language].whyChoose;

  return (
    <section className="w-full bg-white py-16 font-['IBM Plex Sans']">
      <div className="mx-auto max-w-[1230px] px-4">
        <div className="text-center">
          <h2 className="text-[28px] font-bold tracking-[0.02em] text-[#0B0D12]">
            {t.heading}
          </h2>
          <p className="mt-2 text-sm text-[#4B5563]">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <Card className="border-[#E5E7EB] shadow-none hover:shadow transition-all">
            <CardHeader className="flex flex-row items-start gap-3 pb-2">
              <GitMerge className="h-6 w-6 text-slate-700" />
              <CardTitle className="text-[16px]">{t.integration.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-sm text-[#4B5563]">
              {t.integration.desc}
            </CardContent>
          </Card>

          <Card className="border-[#E5E7EB] shadow-none hover:shadow transition-all">
            <CardHeader className="flex flex-row items-start gap-3 pb-2">
              <ShieldCheck className="h-6 w-6 text-slate-700" />
              <CardTitle className="text-[16px]">{t.security.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-sm text-[#4B5563]">
              {t.security.desc}
            </CardContent>
          </Card>

          <Card className="border-[#E5E7EB] shadow-none hover:shadow transition-all">
            <CardHeader className="flex flex-row items-start gap-3 pb-2">
              <Users className="h-6 w-6 text-slate-700" />
              <CardTitle className="text-[16px]">{t.citizen.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-sm text-[#4B5563]">
              {t.citizen.desc}
            </CardContent>
          </Card>

          <Card className="border-[#E5E7EB] shadow-none hover:shadow transition-all">
            <CardHeader className="flex flex-row items-start gap-3 pb-2">
              <Cloud className="h-6 w-6 text-slate-700" />
              <CardTitle className="text-[16px]">{t.cloud.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-sm text-[#4B5563]">
              {t.cloud.desc}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
