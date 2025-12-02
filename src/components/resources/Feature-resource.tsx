import { FileText, FileType, BookOpen, BarChart3, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useLanguageStore } from "@/store/Language-store";
import { resourceTranslations } from "@/i18n/resource-translation";

export default function FeaturedResources() {
  const { language } = useLanguageStore();
  const t = resourceTranslations[language].featured;

  const RESOURCES = [
    {
      title: t.items.caseStudy.title,
      desc: t.items.caseStudy.desc,
      icon: FileText,
    },
    {
      title: t.items.whitepaper.title,
      desc: t.items.whitepaper.desc,
      icon: FileType,
    },
    {
      title: t.items.documentation.title,
      desc: t.items.documentation.desc,
      icon: BookOpen,
    },
    {
      title: t.items.report.title,
      desc: t.items.report.desc,
      icon: BarChart3,
    },
  ];

  return (
    <section aria-label="Featured Resources" className="w-full bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-4 md:px-3 sm:px-2">
        <h2 className="text-center text-[28px] font-bold text-black mb-10">
          {t.heading}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-[#e1e5ee] shadow-none hover:shadow transition-all flex flex-col">
                <CardHeader className="flex flex-col items-start gap-4 pb-4">
                  <Icon className="h-6 w-6 text-slate-700" />
                  <CardTitle className="text-[16px] text-[#072235] leading-tight text-left min-h-[48px] line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 text-[14px] text-[rgba(7,34,53,0.7)] leading-relaxed flex flex-col flex-1 text-left">
                  <p className="mb-6">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
