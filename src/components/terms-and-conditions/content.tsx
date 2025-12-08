import {
  Card,
  CardContent,
  CardHeader,
} from "../ui/card";
import { useLanguageStore } from "@/store/Language-store";
import { termsTranslations } from "@/i18n/terms-translation";

export default function TermsContent() {
  const { language } = useLanguageStore();
  const t = termsTranslations[language];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1230px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left sidebar - Table of Contents (Fixed) */}
          <aside className="w-full md:w-[280px] flex-shrink-0 md:sticky md:top-24 self-start overflow-x-auto md:overflow-x-visible">
            <Card className="border-gray-200 rounded-none min-w-[280px]">
              <CardHeader className="p-6">
                <h2 className="text-[18px] font-bold text-[#000000]">
                  {t.tableOfContents.title}
                </h2>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <nav className="space-y-4" aria-label="Terms sections">
                  {t.tableOfContents.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-[14px] text-[#4B5563]">
                      <span className="text-[#6B7280] font-medium" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Right content area */}
          <div className="flex-1 min-w-0 md:sticky md:top-24 md:overflow-y-auto md:max-h-[calc(100vh-8rem)] md:pr-4 
                          [&::-webkit-scrollbar]:w-0 
                          [&::-webkit-scrollbar]:bg-transparent
                          [-ms-overflow-style:none]
                          [scrollbar-width:none]">
            {/* Legal Agreement Header */}
            <div className="mb-8">
              <span className="text-[#003893] text-[14px] font-medium">{t.legalAgreement}</span>
            </div>

            {/* Welcome Section */}
            <div className="mb-12">
              <h2 className="text-[24px] font-bold text-[#000000] mb-6">
                {t.welcome.title}
              </h2>
              
              <p className="text-[16px] text-[#374151] mb-4 leading-relaxed">
                {t.welcome.description1}
              </p>
              
              <p className="text-[16px] text-[#374151] leading-relaxed">
                {t.welcome.description2}
              </p>
            </div>

            {/* Section 1 - Acceptance of Terms */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center" aria-hidden="true">
                  01
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  {t.sections.acceptanceOfTerms.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {t.sections.acceptanceOfTerms.content.map((paragraph, index) => (
                  <p key={index} className="text-[15px] text-[#374151] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Section 2 - Use of Services */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center" aria-hidden="true">
                  02
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  {t.sections.useOfServices.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {t.sections.useOfServices.content.map((paragraph, index) => (
                  <p key={index} className="text-[15px] text-[#374151] leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                <div className="border border-gray-200 bg-gray-50 p-6 rounded-none">
                  <p className="text-[15px] font-semibold text-[#111827] mb-3">
                    {t.sections.useOfServices.notAllowed.title}
                  </p>
                  <div className="space-y-2">
                    {t.sections.useOfServices.notAllowed.items.map((item, index) => (
                      <p key={index} className="text-[15px] text-[#374151]">{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sections 3-6 */}
            {Object.entries({
              '03': t.sections.userAccounts,
              '04': t.sections.userContent,
              '05': t.sections.privacyPolicy,
              '06': t.sections.intellectualProperty,
            }).map(([num, section]) => (
              <div key={num} className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center" aria-hidden="true">
                    {num}
                  </span>
                  <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                    {section.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {section.content.map((paragraph: string, index: number) => (
                    <p key={index} className="text-[15px] text-[#374151] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Section 7 - Prohibited Activities */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center" aria-hidden="true">
                  07
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  {t.sections.prohibitedActivities.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] text-[#374151] leading-relaxed mb-4">
                  {t.sections.prohibitedActivities.intro}
                </p>

                <div className="space-y-3">
                  {t.sections.prohibitedActivities.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-red-50 border border-red-200 rounded-none flex items-center justify-center text-red-500 text-[12px]" aria-hidden="true">✕</span>
                      <p className="text-[15px] text-[#374151] flex-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sections 8-10 */}
            {Object.entries({
              '08': t.sections.termination,
              '09': t.sections.limitationOfLiability,
              '10': t.sections.changesToTerms,
            }).map(([num, section]) => (
              <div key={num} className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center" aria-hidden="true">
                    {num}
                  </span>
                  <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                    {section.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {num === '09' && (
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-none">
                      <p className="text-[15px] text-[#374151] leading-relaxed">
                        {section.content[0]}
                      </p>
                    </div>
                  )}
                  {section.content.map((paragraph: string, index: number) => (
                    num === '09' && index === 0 ? null : (
                      <p key={index} className="text-[15px] text-[#374151] leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>
              </div>
            ))}

            {/* Section 11 - Contact Information */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center" aria-hidden="true">
                  11
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  {t.sections.contactInformation.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] text-[#374151] leading-relaxed mb-4">
                  {t.sections.contactInformation.intro}
                </p>

                <div className="space-y-3 pl-4">
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-[15px] text-[#111827] min-w-[80px]">{t.sections.contactInformation.email}</span>
                    <a 
                      href="mailto:info@ninjainfosys.com" 
                      className="text-[15px] text-[#003893] hover:text-[#002870] hover:underline focus:outline-2 focus:outline-[#003893]"
                      aria-label={`Email us at ${t.sections.contactInformation.emailValue}`}
                    >
                      {t.sections.contactInformation.emailValue}
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-[15px] text-[#111827] min-w-[80px]">{t.sections.contactInformation.address}</span>
                    <span className="text-[15px] text-[#374151]">{t.sections.contactInformation.addressValue}</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-[15px] text-[#111827] min-w-[80px]">{t.sections.contactInformation.phone}</span>
                    <a 
                      href="tel:+9779858042433" 
                      className="text-[15px] text-[#003893] hover:text-[#002870] hover:underline focus:outline-2 focus:outline-[#003893]"
                      aria-label={`Call us at ${t.sections.contactInformation.phoneValue}`}
                    >
                      {t.sections.contactInformation.phoneValue}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
