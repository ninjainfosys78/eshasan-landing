import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useState } from "react";

export default function ThankYouBox() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  return (
    <div className="bg-white flex justify-center items-center py-8">
      <Card className="bg-[#E8F0FF] p-12 rounded-none text-center shadow-none max-w-2xl w-full">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full border-2 border-slate-800 flex items-center justify-center">
            <Check className="w-8 h-8 text-slate-800" />
          </div>
        </div>
        
        <h3 className="text-[24px] font-bold text-slate-900 mb-4">
          Thank You for Reading
        </h3>
        
        <p className="text-[16px] text-slate-700 mb-8 max-w-2xl mx-auto">
          By using our Services, you acknowledge that you have read and understood these Terms.
        </p>
        
        <Button 
          onClick={handleAccept}
          disabled={isAccepted}
          className={`${
            isAccepted 
              ? '!bg-[#003893] hover:bg-[#003893] cursor-default' 
              : '!bg-[#003893] hover:bg-[#002870]'
          } text-white px-12 py-8 rounded-none text-[18px] font-medium inline-flex items-center gap-3 transition-colors`}
        >
          {isAccepted ? 'Accepted' : 'I accept the Terms'}
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        </Button>
      </Card>
    </div>
  );
}