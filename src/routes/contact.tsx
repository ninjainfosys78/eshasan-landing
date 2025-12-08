import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";
import ContactForm from "@/components/contact/contact-form";
import { useLanguageStore } from "@/store/Language-store";
import { contactTranslations } from "@/i18n/contact-translation";

export const Route = createFileRoute("/contact" as any)({
  component: ContactPage,
});

function ContactPage() {
  const { language } = useLanguageStore();
  const t = contactTranslations[language];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* Ellipse Background - moved up */}
        <div
          className="absolute bg-[#E6EBF4]"
          style={{
            width: "2898px",
            height: "2898px",
            top: "190px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>

        <div className="relative" style={{ zIndex: 1 }}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-3 sm:px-2">
            <div className="text-center pt-12 mb-[200px]">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t.hero.title}
              </h1>
              <p className="text-[#4B5563] max-w-3xl mx-auto text-lg">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-24">
              <div>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {t.contactInfo.title}
                </h2>

                {/* removed flex-grow to avoid huge empty space */}
                <div className="space-y-7">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {t.contactInfo.address.label}
                      </h3>
                      <p className="text-gray-600">{t.contactInfo.address.value}</p>
                    </div>
                  </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t.contactInfo.email.label}
                    </h3>
                    <a
                      href={`mailto:${t.contactInfo.email.value}`}
                      className="!text-[#003893] hover:underline"
                    >
                      {t.contactInfo.email.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t.contactInfo.phone.label}
                    </h3>
                    <a
                      href="tel:+977-9858042433"
                      className="!text-[#003893] hover:underline"
                    >
                      {t.contactInfo.phone.value}
                    </a>
                  </div>
                </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {t.contactInfo.businessHours.label}
                      </h3>
                      <p className="text-gray-600">
                        {t.contactInfo.businessHours.value}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-[#547AB7] my-10"></div>

              <div className="mb-10">
                <h3 className="font-semibold text-gray-900 mb-6">
                  {t.social.title}
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-gray-700" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>

                <div className="bg-[#E6EBF4] rounded-none p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-base">
                    {t.callToAction.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t.callToAction.description}
                  </p>
                  <button className="w-full bg-white border border-gray-800 text-gray-900 px-4 py-3 rounded-none font-normal hover:bg-gray-50 transition-colors flex items-center justify-between text-sm">
                    <span>{t.callToAction.button}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;
