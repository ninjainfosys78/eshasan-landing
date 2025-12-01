// src/components/products/product-modules.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Settings2,
  WalletCards,
  BarChart3,
  Users,
  ShieldCheck,
  ServerCog,
} from "lucide-react";
import { useLanguageStore } from "@/store/Language-store";
import { productTranslations } from "@/i18n/product-translation";

export default function ProductModules() {
  const { language } = useLanguageStore();
  const t = productTranslations[language].modules;

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

        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <Card className="shadow-none hover:shadow transition-all border-[#E5E7EB]">
            <CardHeader className="flex flex-row items-start gap-3">
              <Settings2 className="h-5 w-5 text-slate-700" />
              <CardTitle>{t.governance.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-[#4B5563]">
              {t.governance.desc}
            </CardContent>
          </Card>

          <Card className="shadow-none hover:shadow transition-all border-[#E5E7EB]">
            <CardHeader className="flex flex-row items-start gap-3">
              <WalletCards className="h-5 w-5 text-slate-700" />
              <CardTitle>{t.finance.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-[#4B5563]">
              {t.finance.desc}
            </CardContent>
          </Card>

          <Card className="shadow-none hover:shadow transition-all border-[#E5E7EB]">
            <CardHeader className="flex flex-row items-start gap-3">
              <BarChart3 className="h-5 w-5 text-slate-700" />
              <CardTitle>{t.analytics.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-[#4B5563]">
              {t.analytics.desc}
            </CardContent>
          </Card>

          <Card className="shadow-none hover:shadow transition-all border-[#E5E7EB]">
            <CardHeader className="flex flex-row items-start gap-3">
              <Users className="h-5 w-5 text-slate-700" />
              <CardTitle>{t.citizen.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-[#4B5563]">
              {t.citizen.desc}
            </CardContent>
          </Card>

          <Card className="shadow-none hover:shadow transition-all border-[#E5E7EB]">
            <CardHeader className="flex flex-row items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-slate-700" />
              <CardTitle>{t.security.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-[#4B5563]">
              {t.security.desc}
            </CardContent>
          </Card>

          <Card className="shadow-none hover:shadow transition-all border-[#E5E7EB]">
            <CardHeader className="flex flex-row items-start gap-3">
              <ServerCog className="h-5 w-5 text-slate-700" />
              <CardTitle>{t.infrastructure.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-[#4B5563]">
              {t.infrastructure.desc}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
