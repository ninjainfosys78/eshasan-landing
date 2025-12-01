import { useLanguageStore } from "@/store/Language-store";
import { translations } from "@/i18n/translations";

export default function Footer() {
  const { language } = useLanguageStore();
  const t = translations[language].footer;

  return (
    <footer className="bg-[#003893] text-white px-4 pt-8 pb-4 text-[14px] font-['IBM Plex Sans']">
      {/* TOP SECTION */}
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-between gap-[48px]">
        {/* LEFT BRAND SECTION */}
        <div className="max-w-[280px] flex-1 min-w-[220px]">
          <div className="mb-1 text-[24px] font-semibold tracking-[0.03em]">
            eShasan
          </div>

          <p className="mb-5 leading-[1.4] opacity-90">
            {t.brandDescription}
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/60 !text-white transition hover:bg-white/20"
            >
              <svg className="h-[16px] w-[16px] fill-current" viewBox="0 0 24 24">
                <path d="M13.5 8.5V6.75c0-.72.48-1.02 1.14-1.02H16V3h-2.1C11.96 3 10.5 4.38 10.5 6.6V8.5H9v3h1.5V21h3v-9.5H16l.5-3h-3z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/60 !text-white transition hover:bg-white/20"
            >
              <svg className="h-[16px] w-[16px] fill-current" viewBox="0 0 24 24">
                <path d="M17.5 4H20l-5.25 6.02L20.5 20h-3l-3.75-5.7L9 20H6.5L12 13.6 7.5 4h3L14 9.3 17.5 4z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/60 !text-white transition hover:bg-white/20"
            >
              <svg className="h-[16px] w-[16px] fill-current" viewBox="0 0 24 24">
                <path d="M21 8.5s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16.4 5.3 12 5.3 12 5.3s-4.4 0-6.3.3c-.4.1-1.2.1-1.9.9-.6.6-.8 2-.8 2s-.2 1.6-.2 3.1v1c0 1.5.2 3.1.2 3.1s.2 1.4.8 2c.7.8 1.7.8 2.1.9 1.9.3 6.2.3 6.2.3s4.4 0 6.3-.3c.4-.1 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.5.2-3.1v-1c0-1.5-.2-3.1-.2-3.1zM10.4 14.6V9.4l4.4 2.6-4.4 2.6z" />
              </svg>
            </a>
          </div>
        </div>

        {/* FOOTER COLUMN SECTION */}
        <div
          className="
            flex-1 min-w-[260px] text-left
            grid gap-8
            max-[1000px]:grid-cols-2
            max-[500px]:grid-cols-1
            min-[1001px]:grid-cols-4
          "
        >
          <div className="min-w-[160px]">
            <h4 className="mb-2 text-[14px] font-semibold">{t.product.title}</h4>
            <a href="#" className="block opacity-90 !text-white font-normal! hover:underline! ">
              {t.product.features}
            </a>
            <a href="#" className="block opacity-90 !text-white font-normal! hover:underline! ">
              {t.product.pricing}
            </a>
            <a href="#" className="block opacity-90 !text-white font-normal! hover:underline! ">
              {t.product.security}
            </a>
            <a href="#" className="block opacity-90 !text-white font-normal! hover:underline! ">
              {t.product.roadmap}
            </a>
          </div>

          <div className="min-w-[160px]">
            <h4 className="mb-2 text-[14px] font-semibold">{t.modules.title}</h4>
            <a href="#" className="block opacity-90 !text-white font-normal! hover:underline! ">
              {t.modules.governance}
            </a>
            <a href="#" className="block opacity-90 !text-white font-normal! hover:underline!  ">
              {t.modules.finance}
            </a>
            <a href="#" className="block opacity-90 !text-white font-normal! hover:underline! ">
              {t.modules.hrManagement}
            </a>
            <a href="#" className="block opacity-90 !text-white font-normal! hover:underline! ">
              {t.modules.analytics}
            </a>
          </div>

          <div className="min-w-[160px]">
            <h4 className="mb-2 text-[14px] font-semibold">{t.company.title}</h4>
            <a href="#" className="block opacity-90 !text-white font-normal! hover:underline! ">
              {t.company.about}
            </a>
            <a href="#" className="block opacity-90 !text-white font-normal! hover:underline! ">
              {t.company.careers}
            </a>
            <a href="#" className="block opacity-90 !text-white font-normal! hover:underline! ">
              {t.company.partners}
            </a>
            <a href="#" className="block opacity-90 !text-white font-normal! hover:underline! ">
              {t.company.contact}
            </a>
          </div>

          <div className="min-w-[160px]">
            <h4 className="mb-2 text-[14px] font-semibold">{t.getInTouch.title}</h4>

            <div className="my-1 flex items-center gap-2">
              <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.7 2 6 4.7 6 8c0 4.1 4.7 9.6 5.3 10.3.4.4 1 .4 1.4 0C13.3 17.6 18 12.1 18 8c0-3.3-2.7-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 5.5 12 5.5s2.5 1.1 2.5 2.5S13.4 10.5 12 10.5z" />
              </svg>
              <p className="opacity-90">{t.getInTouch.location}</p>
            </div>

            <div className="my-1 flex items-center gap-2">
              <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M4 6c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h16c.8 0 1.5-.7 1.5-1.5v-9C21.5 6.7 20.8 6 20 6H4zm.7 2h14.6L12 12.8 4.7 8zM4.5 9.4l7 4.2c.3.2.7.2 1 0l7-4.2V16H4.5V9.4z" />
              </svg>
              <p className="opacity-90">{t.getInTouch.email}</p>
            </div>

            <div className="my-1 flex items-center gap-2">
              <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M6.6 4.5L8.2 4c.5-.1 1 .1 1.3.5l1.4 2.3c.3.5.2 1.1-.2 1.5l-1 1c.2.5.6 1.2 1.3 1.9.7.7 1.4 1.1 1.9 1.3l1-1c.4-.4 1-.5 1.5-.2l2.3 1.4c.4.3.6.8.5 1.3l-.5 1.6c-.2.5-.6.9-1.1 1.1-.7.2-2.2.3-4.4-.9-2-.9-3.7-2.4-5.2-4.4-1.5-2-2.2-3.8-2.4-5-.1-.6.1-1.1.5-1.5.3-.3.6-.5 1-.6z" />
              </svg>
              <p className="opacity-90">{t.getInTouch.phone1}</p>
            </div>

            <div className="my-1 flex items-center gap-2">
              <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M6.6 4.5L8.2 4c.5-.1 1 .1 1.3.5l1.4 2.3c.3.5.2 1.1-.2 1.5l-1 1c.2.5.6 1.2 1.3 1.9.7.7 1.4 1.1 1.9 1.3l1-1c.4-.4 1-.5 1.5-.2l2.3 1.4c.4.3.6.8.5 1.3l-.5 1.6c-.2.5-.6.9-1.1 1.1-.7.2-2.2.3-4.4-.9-2-.9-3.7-2.4-5.2-4.4-1.5-2-2.2-3.8-2.4-5-.1-.6.1-1.1.5-1.5.3-.3.6-.5 1-.6z" />
              </svg>
              <p className="opacity-90">{t.getInTouch.phone2}</p>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mx-auto mt-6 mb-4 max-w-[1200px] border-t border-white/30" />

      {/* BOTTOM SECTION */}
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 text-[12px]">
        <div className="flex items-center gap-1">
          <span className="text-[12px]">©</span>
          <span>{t.copyright}</span>
        </div>

        <div className="flex items-center gap-2">
          <a href="/terms-and-conditions" className="!text-white font-normal! hover:underline! ">
            {t.privacyPolicy}
          </a>
          <span className="opacity-70">|</span>
          <a href="/terms-and-conditions" className="!text-white font-normal! hover:underline! ">
            {t.termsOfService}
          </a>
        </div>
      </div>
    </footer>
  );
}
