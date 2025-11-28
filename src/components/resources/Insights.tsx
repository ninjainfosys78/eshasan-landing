import { ArrowRight } from "lucide-react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { useLanguageStore } from "@/store/Language-store";
import { resourceTranslations } from "@/i18n/resource-translation";

export default function Insights() {
  const { language } = useLanguageStore();
  const t = resourceTranslations[language].insights;

  const POSTS = [
    {
      tag: t.tag.technology,
      title: "5 Key Benefits of Integrated ERP for Public Institutions",
      date: "June 15, 2023",
      image: "/src/assets/insights1.png",
    },
    {
      tag: t.tag.governance,
      title: "Digital Transformation Roadmap for Government Institutions",
      date: "May 28, 2023",
      image: "/src/assets/insights2.png",
    },
    {
      tag: t.tag.policy,
      title: "How Data Analytics is Reshaping Public Policy Decisions",
      date: "May 12, 2023",
      image: "/src/assets/insights3.png",
    },
  ];

  return (
    <section aria-label="Insights & Updates" className="w-full bg-[#E6EBF4] py-14 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h2 className="text-[28px] font-bold text-[#000000]">
            {t.heading}
          </h2>

          <a href="#" className="inline-flex items-center text-[13px] sm:text-[14px] font-medium text-[#000000] no-underline hover:underline">
            {t.viewAll}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, idx) => (
            <Card key={idx} className="flex flex-col overflow-hidden">
              <div className="relative w-full bg-black">
                <img src={post.image} alt={post.title} className="h-[220px] w-full object-cover" />
                <span className="absolute left-4 top-4 bg-[#003893] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
                  {post.tag}
                </span>
              </div>

              <CardContent className="flex flex-col flex-1 px-4 py-5">
                <CardTitle className="text-[15px] sm:text-[16px] text-[#072235] leading-snug">
                  {post.title}
                </CardTitle>

                <p className="mt-3 text-[12px] text-[rgba(7,34,53,0.7)]">{post.date}</p>

                <div className="mt-auto pt-4">
                  <a href="#" className="inline-flex items-center text-[13px] font-medium text-[#003893] no-underline hover:underline">
                    {t.readMore}
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
