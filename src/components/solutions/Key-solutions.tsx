import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useLanguageStore } from "@/store/Language-store";
import { solutionsTranslations } from "@/i18n/solutions-translation";

export default function KeySolutions() {
  const { language } = useLanguageStore();
  const t = solutionsTranslations[language].keySolutions;

  const ITEMS = [
    { title: t.governance.title, desc: t.governance.desc, icon: /* same icon */ (
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" />
        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
        <path d="M8 17h6" stroke="currentColor" strokeWidth="2" />
      </svg>
    )},
    { title: t.finance.title, desc: t.finance.desc, icon: (
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 10h8M8 14h8" stroke="currentColor" strokeWidth="2" />
      </svg>
    )},
    { title: t.analytics.title, desc: t.analytics.desc, icon: (
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24">
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" />
        <rect x="7" y="7" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="13" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
      </svg>
    )},
    { title: t.citizen.title, desc: t.citizen.desc, icon: (
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M5 20c1.8-3 5-4 7-4s5.2 1 7 4" stroke="currentColor" strokeWidth="2" />
      </svg>
    )},
    { title: t.security.title, desc: t.security.desc, icon: (
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24">
        <path d="M12 2l7 3v5c0 5-3.5 9.7-7 12-3.5-2.3-7-7-7-12V5l7-3z" stroke="currentColor" strokeWidth="2" />
        <path d="M9 12h6" stroke="currentColor" strokeWidth="2" />
      </svg>
    )},
    { title: t.infrastructure.title, desc: t.infrastructure.desc, icon: (
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M7 11h.01M12 11h.01M17 11h.01" stroke="currentColor" strokeWidth="2" />
      </svg>
    )},
  ];

  return (
    <section aria-label="Key solution categories" className="py-12 bg-white">
      <div className="max-w-[1230px] mx-auto px-4">
        <h1 className="text-center !text-[28px] font-bold text-[#000000] mb-8">
          {t.heading}
        </h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, idx) => (
            <Card key={idx} className="h-full border-gray-200">
              <CardHeader className="px-6 pt-6">
                <div className="flex flex-col items-left text-left gap-3">
                  <div className="rounded p-2 bg-transparent">{item.icon}</div>
                  <CardTitle className="text-[15px] font-medium">{item.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6 pt-3 text-left">
                <p className="text-sm text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
