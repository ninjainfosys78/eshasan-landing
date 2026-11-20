import { mobileAppPolicies } from "@/config/mobileAppPolicies";
import { privacyTranslations } from "@/i18n/privacy-translation";
import { useLanguageStore } from "@/store/Language-store";

export default function MobileAppIdentifiers() {
  const { language } = useLanguageStore();
  const t = privacyTranslations[language].mobileApps;

  return (
    <section id="mobile-apps" className="mb-12 scroll-mt-24" aria-labelledby="mobile-apps-heading">
      <h2 id="mobile-apps-heading" className="text-[20px] font-bold text-[#000000] mb-4">
        {t.title}
      </h2>
      <p className="text-[15px] text-[#374151] leading-relaxed mb-5">{t.intro}</p>

      <div className="space-y-4">
        {mobileAppPolicies.map((app) => (
          <div key={app.packageName} id={app.anchorId} className="border border-[#E8F0FF] p-5 scroll-mt-24">
            <dl className="space-y-2 text-[15px] text-[#374151]">
              <div className="flex flex-wrap gap-x-3">
                <dt className="font-semibold text-[#111827] min-w-[150px]">{t.appName}:</dt>
                <dd>{app.appName}</dd>
              </div>
              <div className="flex flex-wrap gap-x-3">
                <dt className="font-semibold text-[#111827] min-w-[150px]">{t.developer}:</dt>
                <dd>{app.developerName}</dd>
              </div>
              <div className="flex flex-wrap gap-x-3">
                <dt className="font-semibold text-[#111827] min-w-[150px]">{t.packageName}:</dt>
                <dd>{app.packageName}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] text-[#374151] leading-relaxed">{t.note}</p>
    </section>
  );
}
