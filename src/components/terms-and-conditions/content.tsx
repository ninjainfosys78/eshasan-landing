import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function TermsContent() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1230px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left sidebar - Table of Contents (Fixed) */}
          <aside className="w-full md:w-[280px] flex-shrink-0 md:sticky md:top-24 self-start overflow-x-auto md:overflow-x-visible">
            <Card className="border-gray-200 rounded-none min-w-[280px]">
              <CardHeader className="p-6">
                <CardTitle className="text-[18px] font-bold text-[#000000]">
                  Table of Contents
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <nav className="space-y-4">
                  <div className="flex items-start gap-3 text-[14px] text-slate-600">
                    <span className="text-slate-400">01</span>
                    <span>Acceptance of Terms</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-[14px] text-slate-600">
                    <span className="text-slate-400">02</span>
                    <span>Use of Services</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-[14px] text-slate-600">
                    <span className="text-slate-400">03</span>
                    <span>User Accounts</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-[14px] text-slate-600">
                    <span className="text-slate-400">04</span>
                    <span>User Content</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-[14px] text-slate-600">
                    <span className="text-slate-400">05</span>
                    <span>Privacy Policy</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-[14px] text-slate-600">
                    <span className="text-slate-400">06</span>
                    <span>Intellectual Property</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-[14px] text-slate-600">
                    <span className="text-slate-400">07</span>
                    <span>Prohibited Activities</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-[14px] text-slate-600">
                    <span className="text-slate-400">08</span>
                    <span>Termination</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-[14px] text-slate-600">
                    <span className="text-slate-400">09</span>
                    <span>Limitation of Liability</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-[14px] text-slate-600">
                    <span className="text-slate-400">10</span>
                    <span>Changes to Terms</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-[14px] text-slate-600">
                    <span className="text-slate-400">11</span>
                    <span>Contact Information</span>
                  </div>
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Right content area (Scrollable with fixed height) - Hidden scrollbar */}
          <div className="flex-1 min-w-0 md:sticky md:top-24 md:overflow-y-auto md:max-h-[calc(100vh-8rem)] md:pr-4 
                          [&::-webkit-scrollbar]:w-0 
                          [&::-webkit-scrollbar]:bg-transparent
                          [-ms-overflow-style:none]
                          [scrollbar-width:none]">
            {/* Legal Agreement Header */}
            <div className="mb-8">
              <span className="text-[#003893] text-[14px] font-medium">Legal Agreement</span>
            </div>

            {/* Welcome Section */}
            <div className="mb-12">
              <h2 className="text-[24px] font-bold text-[#000000] mb-6">
                Welcome to Our Service
              </h2>
              
              <p className="text-[16px] text-slate-700 mb-4 leading-relaxed">
                These Terms and Conditions ("Terms") govern your access to and use of our services, including our website, applications, and any related services (collectively, the "Services").
              </p>
              
              <p className="text-[16px] text-slate-700 leading-relaxed">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center">
                  01
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  Acceptance of Terms
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  By creating an account or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                </p>
                
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center">
                  02
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  Use of Services
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  Our Services are provided to you for your personal or internal business use. You agree to use the Services only for lawful purposes and in accordance with these Terms.
                </p>

                <div className="border border-gray-200 bg-gray-50 p-6 rounded-none">
                  <p className="text-[15px] font-semibold text-slate-900 mb-3">You agree not to:</p>
                  <div className="space-y-2">
                    <p className="text-[15px] text-slate-700">Use the Services in any way that violates applicable laws or regulations</p>
                    <p className="text-[15px] text-slate-700">Attempt to gain unauthorized access to any portion of the Services</p>
                    <p className="text-[15px] text-slate-700">Interfere with or disrupt the Services or servers</p>
                    <p className="text-[15px] text-slate-700">Use any automated system to access the Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center">
                  03
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  User Accounts
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  To access certain features of our Services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials.
                </p>
                
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center">
                  04
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  User Content
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  Our Services may allow you to submit, upload, or share content ("User Content"). You retain all rights to your User Content, but you grant us a license to use, modify, and display your User Content in connection with providing the Services.
                </p>
                
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  You represent and warrant that you own or have the necessary rights to all User Content you submit and that such content does not violate any third-party rights or applicable laws.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center">
                  05
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  Privacy Policy
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which describes how we collect, use, and disclose information about you.
                </p>
                
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  By using our Services, you consent to our collection and use of personal data as outlined in our Privacy Policy.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center">
                  06
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  Intellectual Property
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  The Services and all content, features, and functionality are owned by us and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our content without our prior written permission.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center">
                  07
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  Prohibited Activities
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] text-slate-700 leading-relaxed mb-4">
                  You agree not to engage in any of the following prohibited activities:
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-red-50 border border-red-200 rounded-none flex items-center justify-center text-red-500 text-[12px]">✕</span>
                    <p className="text-[15px] text-slate-700 flex-1">Copying, distributing, or disclosing any part of the Services without authorization</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-red-50 border border-red-200 rounded-none flex items-center justify-center text-red-500 text-[12px]">✕</span>
                    <p className="text-[15px] text-slate-700 flex-1">Using any automated system or software to extract data from the Services</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-red-50 border border-red-200 rounded-none flex items-center justify-center text-red-500 text-[12px]">✕</span>
                    <p className="text-[15px] text-slate-700 flex-1">Attempting to interfere with, compromise, or reverse engineer the Services</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-red-50 border border-red-200 rounded-none flex items-center justify-center text-red-500 text-[12px]">✕</span>
                    <p className="text-[15px] text-slate-700 flex-1">Harassing, abusing, or harming other users or third parties</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center">
                  08
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  Termination
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                </p>
                
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center">
                  09
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  Limitation of Liability
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-none">
                  <p className="text-[15px] text-slate-700 leading-relaxed">
                    To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                  </p>
                </div>
                
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  Our total liability to you for any damages arising out of or related to these Terms or the Services shall not exceed the amount you have paid us in the past twelve months.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center">
                  10
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  Changes to Terms
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last updated" date.
                </p>
                
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  Your continued use of the Services after any changes become effective constitutes your acceptance of the new Terms.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-12 h-12 rounded-none bg-[#E8F0FF] text-[#003893] font-bold text-[18px] flex items-center justify-center">
                  11
                </span>
                <h3 className="text-[20px] font-bold text-[#000000] mt-2">
                  Contact Information
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] text-slate-700 leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>

                <div className="space-y-3 pl-4">
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-[15px] text-slate-900 min-w-[80px]">Email:</span>
                    <span className="text-[15px] text-slate-700">info@ninjainfosys.com</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-[15px] text-slate-900 min-w-[80px]">Address:</span>
                    <span className="text-[15px] text-slate-700">Kathmandu, Nepal</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-[15px] text-slate-900 min-w-[80px]">Phone:</span>
                    <span className="text-[15px] text-slate-700">+977-9858042433</span>
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