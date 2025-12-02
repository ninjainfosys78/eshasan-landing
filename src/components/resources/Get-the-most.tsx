import { BookOpen, Users2, Headphones } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useLanguageStore } from "@/store/Language-store";
import { resourceTranslations } from "@/i18n/resource-translation";

export default function GetTheMost() {
  const { language } = useLanguageStore();
  const t = resourceTranslations[language].getTheMost;

  const ITEMS = [
    {
      icon: BookOpen,
      title: t.documentation.title,
      desc: t.documentation.desc,
    },
    {
      icon: Users2,
      title: t.forum.title,
      desc: t.forum.desc,
    },
    {
      icon: Headphones,
      title: t.support.title,
      desc: t.support.desc,
    },
  ];

  return (
    <section aria-label="Get the Most Out of eShasan" className="w-full bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-4">
        <h2 className="text-center text-[28px] font-bold text-[#072235]">
          {t.heading}
        </h2>

        <p className="mt-2 mb-10 text-center text-[16px] text-[rgba(7,34,53,0.7)]">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="border-[#b0c1de] bg-white flex flex-col text-center shadow-none hover:shadow transition-all px-6 py-6">
                <CardHeader className="flex flex-col items-center gap-3 pb-2">
                  <Icon className="h-6 w-6 text-[#072235]" />
                  <CardTitle className="mt-0 text-[15px] sm:text-[16px] text-[#072235]">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 text-[13px] sm:text-[14px] leading-relaxed text-[rgba(7,34,53,0.7)] flex flex-col flex-1">
                  <p className="mb-4">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
