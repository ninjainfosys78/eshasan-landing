import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
// import Leadership from "../components/about/Leadership";
import Mission from "@/components/about/Mission";
import Testimonials from "@/components/home/testimonials";
import GlobalCTA from "@/components/home/global-cta";
import { useLanguageStore } from "@/store/Language-store";
import { aboutTranslations } from "@/i18n/about-translation";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const { language } = useLanguageStore();
  const t = aboutTranslations[language];

  return (
    <>
      <Header />
      {/* About hero — Tailwind / shadcn-ready classes */}
      <section aria-label="About hero" className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="m-0 text-[32px] font-bold text-[#000000]">{t.hero.title}</h1>
          <p className="mt-3 text-base sm:text-lg font-semibold text-slate-600">
            {t.hero.subtitle}
          </p>

          {/* Decorative wave SVG centered */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-[560px]">
              <svg
                width="560"
                height="200"
                viewBox="0 0 560 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto wave-svg fade-mask"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="fadeGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="18%" stopColor="white" stopOpacity="1" />
                    <stop offset="82%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>

                  <mask id="fadeMask">
                    <rect width="100%" height="100%" fill="url(#fadeGradient)" />
                  </mask>
                </defs>

                <g mask="url(#fadeMask)">
                  {/* THIN, SHARP, FULLY VISIBLE WAVES */}
                  <path
                    d="M30 0 C 170 -5, 260 75, 560 40"
                    stroke="#C7DBFF"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    fill="none"
                  />

                  <path
                    d="M0 35 C 300 40, 260 130, 560 75"
                    stroke="#3B82F6"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />

                  <path
                    d="M0 95 C 100 130, 320 20, 560 115"
                    stroke="#C7DBFF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* FLOATING, BLINKING BUBBLES */}
                  <circle cx="0" cy="52" r="3.5" className="dot dot-1" fill="#5A9BFF" />
                  <circle cx="0" cy="64" r="3.5" className="dot dot-2" fill="#8DB6FF" />
                  <circle cx="0" cy="72" r="3.5" className="dot dot-3" fill="#5A9BFF" />
                  <circle cx="0" cy="48" r="3.5" className="dot dot-4" fill="#8DB6FF" />
                  <circle cx="0" cy="82" r="3.5" className="dot dot-5" fill="#5A9BFF" />
                  <circle cx="0" cy="58" r="3.5" className="dot dot-6" fill="#8DB6FF" />
                  <circle cx="0" cy="68" r="3.5" className="dot dot-7" fill="#5A9BFF" />
                </g>
              </svg>
            </div>

            <style>{`
              .wave-svg {
                overflow: visible;
              }

              .dot {
                animation:
                  dotFloat 8s linear infinite both,
                  dotBlink 3s ease-in-out infinite both;
                transform-origin: center;
              }

              /* visible on first frame */
              .dot-1 { animation-delay: -0s, -0s; }
              .dot-2 { animation-delay: -1s, -1.2s; }
              .dot-3 { animation-delay: -2s, -2.4s; }
              .dot-4 { animation-delay: -3s, -3.6s; }
              .dot-5 { animation-delay: -4s, -4.8s; }
              .dot-6 { animation-delay: -5s, -6.0s; }
              .dot-7 { animation-delay: -6s, -7.2s; }

              @keyframes dotFloat {
                0% {
                  opacity: 0;
                  transform: translateX(-120px) translateY(0px) scale(0.6);
                }
                10% {
                  transform: translateX(-40px) translateY(-2px) scale(0.9);
                }
                35% {
                  transform: translateX(160px) translateY(-4px) scale(1.05);
                }
                60% {
                  transform: translateX(340px) translateY(-3px) scale(1);
                }
                90% {
                  opacity: 0;
                  transform: translateX(520px) translateY(-1px) scale(0.7);
                }
                100% {
                  opacity: 0;
                  transform: translateX(560px) translateY(0px) scale(0.6);
                }
              }

              @keyframes dotBlink {
                0% { opacity: 0; }
                20% { opacity: 1; }
                40% { opacity: 0.3; }
                60% { opacity: 1; }
                80% { opacity: 0.2; }
                100% { opacity: 0; }
              }
            `}</style>
          </div>
        </div>
      </section>
      <Testimonials />
      {/* <Leadership /> */}
      <Mission />
      <GlobalCTA />
      <Footer />
    </>
  );
}
