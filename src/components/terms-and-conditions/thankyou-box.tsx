import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useState } from "react";
import { useLanguageStore } from "@/store/Language-store";
import { termsTranslations } from "@/i18n/terms-translation";

export default function ThankYouBox() {
  const [isAccepted, setIsAccepted] = useState(false);
  const { language } = useLanguageStore();
  const t = termsTranslations[language].thankYou;

  const handleAccept = () => {
    setIsAccepted(true);
  };

  return (
    <section className="bg-white flex justify-center items-center py-8" aria-labelledby="terms-acceptance">
      <Card className="bg-[#E8F0FF] p-12 rounded-none text-center shadow-none max-w-2xl w-full">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full border-2 border-slate-800 flex items-center justify-center">
            <Check className="w-8 h-8 text-slate-800" aria-hidden="true" />
          </div>
        </div>
        
        <h2 id="terms-acceptance" className="text-[24px] font-bold text-slate-900 mb-4">
          {t.title}
        </h2>
        
        <p className="text-[16px] text-[#374151] mb-8 max-w-2xl mx-auto">
          {t.description}
        </p>
        
        <Button 
          onClick={handleAccept}
          disabled={isAccepted}
          aria-label={isAccepted ? t.acceptedButton : t.acceptButton}
          aria-pressed={isAccepted}
          className={`${
            isAccepted 
              ? '!bg-[#003893] hover:bg-[#003893] cursor-default' 
              : '!bg-[#003893] hover:bg-[#002870]'
          } text-white px-12 py-8 rounded-none text-[18px] font-medium inline-flex items-center gap-3 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#003893]`}
        >
          {isAccepted ? t.acceptedButton : t.acceptButton}
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center" aria-hidden="true">
            <Check className="w-4 h-4 text-white" />
          </div>
        </Button>
      </Card>
    </section>
  );
}
