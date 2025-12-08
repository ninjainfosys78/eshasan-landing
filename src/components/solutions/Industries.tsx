import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useLanguageStore } from "@/store/Language-store";
import { solutionsTranslations } from "@/i18n/solutions-translation";

export default function Industries() {
  const { language } = useLanguageStore();
  const t = solutionsTranslations[language].industries;

  const INDUSTRIES = [
    {
      title: t.localGovernments.title,
      desc: t.localGovernments.desc,
      icon: (
        <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t.ngos.title,
      desc: t.ngos.desc,
      icon: (
        <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t.federalAgencies.title,
      desc: t.federalAgencies.desc,
      icon: (
        <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t.privateInstitutions.title,
      desc: t.privateInstitutions.desc,
      icon: (
        <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section aria-label="Industries we serve" className="py-12 bg-[#E6EBF4]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-[28px] font-bold text-[#000000] mb-2">
            {t.heading}
          </h2>
          <p className="text-[16px] text-[#374151]">
            {t.subtitle}
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, idx) => (
            <Card key={idx} className="h-full border-gray-200 bg-white">
              <CardHeader className="px-6 pt-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="flex-none rounded p-2 bg-transparent">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-[16px] font-semibold">
                    {industry.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6 pt-3 text-center">
                <p className="text-sm text-[#374151]">
                  {industry.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
