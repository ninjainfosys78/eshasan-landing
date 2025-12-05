import { useLanguageStore } from "@/store/Language-store";
import { translations } from "@/i18n/translations";

export default function Footer() {
  const { language } = useLanguageStore();
  const t = translations[language].footer;

  return (
    <footer className="bg-[#003893] text-white px-4 pt-8 pb-4 text-[14px] font-['IBM Plex Sans']">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-2">
          <div className="lg:ml-12 lg:w-[320px]">
            <div className="mb-1 text-[24px] font-semibold tracking-[0.03em]">
              eShasan
            </div>

            <p className="mb-5 leading-[1.4] opacity-90">
              {t.brandDescription}
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/infosysninja"
                target="_blank"
                aria-label="Facebook"
                className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/60 !text-white transition hover:bg-white/20"
              >
                <svg className="h-[16px] w-[16px] fill-current" viewBox="0 0 24 24">
                  <path d="M13.5 8.5V6.75c0-.72.48-1.02 1.14-1.02H16V3h-2.1C11.96 3 10.5 4.38 10.5 6.6V8.5H9v3h1.5V21h3v-9.5H16l.5-3h-3z" />
                </svg>
              </a>

              <a
                href="https://x.com/NinjaPvt"
                target="_blank"
                aria-label="Twitter / X"
                className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/60 !text-white transition hover:bg-white/20"
              >
                <svg className="h-[16px] w-[16px] fill-current" viewBox="0 0 24 24">
                  <path d="M17.5 4H20l-5.25 6.02L20.5 20h-3l-3.75-5.7L9 20H6.5L12 13.6 7.5 4h3L14 9.3 17.5 4z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/ninja-infosys-official/posts/?feedView=all"
                target="_blank"
                aria-label="LinkedIn"
                className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/60 !text-white transition hover:bg-white/20"
              >
                <svg className="h-[16px] w-[16px] fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2h.1c.5-.9 1.7-2.1 3.7-2.1 3.9 0 4.6 2.6 4.6 6V23h-4v-7.8c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.3V23h-4V8z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex gap-12 lg:gap-20">
            <div className="min-w-[140px]">
              <h4 className="mb-2 text-[14px] font-semibold">{t.modules.title}</h4>
              <p className="block opacity-90 text-white">{t.modules.governance}</p>
              <p className="block opacity-90 text-white">{t.modules.finance}</p>
              <p className="block opacity-90 text-white">{t.modules.hrManagement}</p>
              <p className="block opacity-90 text-white">{t.modules.analytics}</p>
            </div>

            <div className="min-w-[140px]">
              <h4 className="mb-2 text-[14px] font-semibold">{t.company.title}</h4>
              <a href="/about" className="block opacity-90 !text-white font-normal! hover:underline! ">
                {t.company.about}
              </a>
              <a href="/products" className="block opacity-90 !text-white font-normal! hover:underline! ">
                {t.company.products}
              </a>
              <a href="/solutions" className="block opacity-90 !text-white font-normal! hover:underline! ">
                {t.company.solutions}
              </a>
              <a href="/resources" className="block opacity-90 !text-white font-normal! hover:underline! ">
                {t.company.resources}
              </a>
              <a href="/contact" className="block opacity-90 !text-white font-normal! hover:underline! ">
                {t.company.contact}
              </a>
            </div>

            <div className="min-w-[200px]">
              <h4 className="mb-2 text-[14px] font-semibold">{t.getInTouch.title}</h4>

              <div className="my-1 flex items-center gap-2">
                <svg className="h-[18px] w-[18px] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2C8.7 2 6 4.7 6 8c0 4.1 4.7 9.6 5.3 10.3.4.4 1 .4 1.4 0C13.3 17.6 18 12.1 18 8c0-3.3-2.7-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 5.5 12 5.5s2.5 1.1 2.5 2.5S13.4 10.5 12 10.5z" />
                </svg>
                <p className="opacity-90">{t.getInTouch.location}</p>
              </div>

              <div className="my-1 flex items-center gap-2">
                <svg className="h-[18px] w-[18px] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M4 6c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h16c.8 0 1.5-.7 1.5-1.5v-9C21.5 6.7 20.8 6 20 6H4zm.7 2h14.6L12 12.8 4.7 8zM4.5 9.4l7 4.2c.3.2.7.2 1 0l7-4.2V16H4.5V9.4z" />
                </svg>
                <p className="opacity-90">{t.getInTouch.email}</p>
              </div>

              <div className="my-1 flex items-center gap-2">
                <svg className="h-[18px] w-[18px] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M6.6 4.5L8.2 4c.5-.1 1 .1 1.3.5l1.4 2.3c.3.5.2 1.1-.2 1.5l-1 1c.2.5.6 1.2 1.3 1.9.7.7 1.4 1.1 1.9 1.3l1-1c.4-.4 1-.5 1.5-.2l2.3 1.4c.4.3.6.8.5 1.3l-.5 1.6c-.2.5-.6.9-1.1 1.1-.7.2-2.2.3-4.4-.9-2-.9-3.7-2.4-5.2-4.4-1.5-2-2.2-3.8-2.4-5-.1-.6.1-1.1.5-1.5.3-.3.6-.5 1-.6z" />
                </svg>
                <p className="opacity-90">{t.getInTouch.phone1}</p>
              </div>

              <div className="my-1 flex items-center gap-2">
                <svg className="h-[18px] w-[18px] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M6.6 4.5L8.2 4c.5-.1 1 .1 1.3.5l1.4 2.3c.3.5.2 1.1-.2 1.5l-1 1c.2.5.6 1.2 1.3 1.9.7.7 1.4 1.1 1.9 1.3l1-1c.4-.4 1-.5 1.5-.2l2.3 1.4c.4.3.6.8.5 1.3l-.5 1.6c-.2.5-.6.9-1.1 1.1-.7.2-2.2.3-4.4-.9-2-.9-3.7-2.4-5.2-4.4-1.5-2-2.2-3.8-2.4-5-.1-.6.1-1.1.5-1.5.3-.3.6-.5 1-.6z" />
                </svg>
                <p className="opacity-90">{t.getInTouch.phone2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 mb-4 max-w-[1380px] border-t border-white/30" />

      <div className="mx-auto flex max-w-[1380px] flex-wrap items-center justify-between gap-4 text-[12px]">
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
