import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useLanguageStore } from "@/store/Language-store";
import { aboutTranslations } from "@/i18n/about-translation";

export default function Mission() {
  const { language } = useLanguageStore();
  const t = aboutTranslations[language].mission;

  return (
    <section className="bg-transparent">
      <div className="max-w-[1400px] mx-auto px-4 py-10">

        {/* Core Values */}
        <div className="text-center mb-8">
          <h2 className="text-[28px] font-bold text-[#000000]">{t.coreValues.title}</h2>
          <p className="mt-2 text-[16px] text-slate-600 max-w-2xl mx-auto">
            {t.coreValues.subtitle}
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {t.coreValues.values.map((value, index) => (
            <Card key={index} className="border-[#B0C1DE] bg-white">
              <CardHeader className="px-6 pt-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="flex-none">
                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" aria-hidden>
                      {index === 0 && (
                        <path
                          d="M12 2l7 3v5c0 5-3.5 9.7-7 12-3.5-2.3-7-7-7-12V5l7-3z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}
                      {index === 1 && (
                        <path
                          d="M9 18h6M12 2a7 7 0 00-4 12.9V17a1 1 0 001 1h6a1 1 0 001-1v-2.1A7 7 0 0012 2z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}
                      {index === 2 && (
                        <>
                          <circle cx="12" cy="8" r="2.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M6 18c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <polyline
                            points="3 17 7 11 11 15 15 9 21 13"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                          <path
                            d="M18.5 7 L23 13 L18.5 15.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </>
                      )}
                    </svg>
                  </div>
                  <CardTitle className="text-[16px] font-semibold text-[#000000]">{value.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-3 text-center">
                <p className="text-[14px] text-slate-500">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Pillars */}
        <div className="flex justify-center">
          <div className="max-w-[960px] w-full bg-[#083a8a] text-white py-10 mb-10 rounded-none">
            <div className="px-4">
              <div className="text-center mb-6">
                <h3 className="text-[20px] font-semibold">{t.keyPillars.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {t.keyPillars.pillars.map((pillar, index) => (
                  <div key={index} className="flex flex-col items-center text-center px-4">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-transparent flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="text-[16px] font-semibold">{pillar.title}</div>
                    <p className="mt-2 text-[14px] text-white/80 max-w-xs">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission/Vision content */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Mission card */}
          <Card className="border-[#B0C1DE] bg-white rounded-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-none w-10 h-10 flex items-center justify-center -mt-1" aria-hidden>
                  <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <h3 className="text-[16px] font-semibold text-[#000000]">{t.ourMission.title}</h3>
                  <p className="mt-3 text-[16px] text-slate-600">
                    {t.ourMission.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vision card */}
          <Card className="border-[#B0C1DE] bg-white rounded-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-none w-10 h-10 flex items-center justify-center -mt-1" aria-hidden>
                  <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <h3 className="text-[16px] font-semibold text-[#000000]">{t.ourVision.title}</h3>
                  <p className="mt-3 text-[16px] text-slate-600">
                    {t.ourVision.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
