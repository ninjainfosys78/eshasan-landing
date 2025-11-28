import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TermsContent from "../components/terms-and-conditions/content";
import ThankYouBox from "@/components/terms-and-conditions/thankyou-box";
import GlobalCTA from "@/components/home/global-cta";

export const Route = createFileRoute("/terms-and-conditions" as any)({
  component: TermsAndConditionPage,
});

function TermsAndConditionPage() {
  return (
    <>
      <Header />

      <section aria-label="Terms and Condition hero" className="w-screen bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="m-0 text-[32px] font-bold text-[#000000]">
            Terms & Condition
          </h1>

          <p className="mt-4 text-[16px] text-slate-600 max-w-[820px] mx-auto">
            A diverse group of experts united by a passion for transforming
            local governance
          </p>

          {/* decorative wave SVG */}
          <div className="mt-8 flex justify-center">
            <svg
              width="560"
              height="120"
              viewBox="0 0 560 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full"
              aria-hidden
            >
              <path
                d="M0 60 C 80 20, 160 100, 240 60 C 320 20, 400 100, 480 60 C 520 40, 560 80, 560 80"
                stroke="#D9E7FF"
                strokeWidth="2"
                fill="none"
                opacity="0.9"
              />
              <path
                d="M0 80 C 80 40, 160 120, 240 80 C 320 40, 400 120, 480 80 C 520 60, 560 100, 560 100"
                stroke="#EAF2FF"
                strokeWidth="2"
                fill="none"
                opacity="0.8"
              />
              <circle cx="140" cy="55" r="3.5" fill="#5A9BFF" />
              <circle cx="210" cy="45" r="3.5" fill="#8DB6FF" />
              <circle cx="330" cy="65" r="3.5" fill="#5A9BFF" />
              <circle cx="420" cy="50" r="3.5" fill="#8DB6FF" />
            </svg>
          </div>
        </div>
      </section>
      <TermsContent />
      <ThankYouBox />
      <GlobalCTA />
      <Footer />
    </>
  );
}