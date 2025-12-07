"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguageStore } from "@/store/Language-store";
import { contactTranslations } from "@/i18n/contact-translation";

const LEAD_CAPTURE_URL =
  "https://crm.ninjainfosys.com/api/v1/LeadCapture/4f8f1b316323e836e595c49c42337b29";

export default function ContactForm() {
  const { language } = useLanguageStore();
  const t = contactTranslations[language].form;

  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    phoneOptional: "",
    inquiryType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatNepalPhone = (raw: string) => {
    let phone = raw.trim();
    if (!phone) return "";

    if (!phone.startsWith("+")) {
      phone = phone.replace(/\D/g, "");
      if (phone.length === 10) {
        phone = "+977" + phone;
      } else if (phone.length === 9) {
        phone = "+9770" + phone;
      } else {
        phone = "+" + phone;
      }
    }
    return phone;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Split full name into first / middle / last
      const fullNameTrimmed = formData.fullName.trim();
      const nameParts = fullNameTrimmed.split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
      const middleName =
        nameParts.length > 2 ? nameParts.slice(1, -1).join(" ") : "";

      // Choose primary phone (phone -> phoneOptional)
      const primaryPhone =
        formatNepalPhone(formData.phone) ||
        formatNepalPhone(formData.phoneOptional);

      const inquiryTypeLabels: Record<string, string> = {
        demo: t.inquiryTypes.demo,
        pricing: t.inquiryTypes.pricing,
        support: t.inquiryTypes.support,
        partnership: t.inquiryTypes.partnership,
        other: t.inquiryTypes.other,
      };

      const inquiryLabel =
        inquiryTypeLabels[formData.inquiryType] || "General Inquiry";

      const title = `${inquiryLabel} - ${formData.organization || "eShasan"}`;

      const descriptionLines = [
        `Message: ${formData.message}`,
        "",
        `Organization / Institution: ${formData.organization || "N/A"}`,
        `Primary Phone: ${primaryPhone || "N/A"}`,
        `Secondary Phone: ${formData.phoneOptional || "N/A"}`,
        `Inquiry Type: ${inquiryLabel}`,
        `Email: ${formData.email}`,
      ];

      const payload = {
        salutationName: "",
        firstName,
        lastName,
        middleName,
        emailAddress: formData.email.trim(),
        phoneNumber: primaryPhone,
        title,
        description: descriptionLines.join("\n"),
      };

      console.log("Submitting payload:", payload);

      const response = await fetch(LEAD_CAPTURE_URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      console.log("Response status:", response.status);
      console.log("Response body:", responseText);

      if (response.ok || response.status === 200 || response.status === 201) {
        // Reset form
        setFormData({
          fullName: "",
          organization: "",
          email: "",
          phone: "",
          phoneOptional: "",
          inquiryType: "",
          message: "",
        });
        setShowModal(true);
      } else {
        let errorMessage = t.errors.submitFailed;

        try {
          const errorData = JSON.parse(responseText);
          console.log("Error data:", errorData);

          if (errorData.data && errorData.data.field) {
            const field = errorData.data.field;
            if (field === "phoneNumber") {
              errorMessage = t.errors.invalidPhone;
            } else {
              errorMessage = `Invalid ${field}`;
            }
          } else if (errorData.message || errorData.error || errorData.title) {
            errorMessage =
              errorData.message || errorData.error || errorData.title;
          }

          if (errorData.errors) {
            errorMessage = (Object.values(errorData.errors) as string[][])
              .flat()
              .join(", ");
          }
        } catch {
          errorMessage = `Server error (${response.status}): ${
            responseText || "Unknown error"
          }`;
        }

        setError(errorMessage);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(t.errors.networkError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.title}</h2>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm">
          <p className="font-semibold mb-1">{t.errors.errorTitle}</p>
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-normal text-gray-600 mb-2">
            {t.fields.fullName.label}
          </label>
          <input
            type="text"
            name="fullName"
            placeholder={t.fields.fullName.placeholder}
            value={formData.fullName}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-none text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
        </div>

        {/* Organization */}
        <div>
          <label className="block text-xs font-normal text-gray-600 mb-2">
            {t.fields.organization.label}
          </label>
          <input
            type="text"
            name="organization"
            placeholder={t.fields.organization.placeholder}
            value={formData.organization}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-none text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-normal text-gray-600 mb-2">
            {t.fields.email.label}
          </label>
          <input
            type="email"
            name="email"
            placeholder={t.fields.email.placeholder}
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-none text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-normal text-gray-600 mb-2">
            {t.fields.phone.label}
          </label>
          <input
            type="tel"
            name="phone"
            placeholder={t.fields.phone.placeholder}
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-none text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Phone Number Optional */}
        <div>
          <label className="block text-xs font-normal text-gray-600 mb-2">
            {t.fields.phoneOptional.label}
          </label>
          <input
            type="tel"
            name="phoneOptional"
            placeholder={t.fields.phoneOptional.placeholder}
            value={formData.phoneOptional}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-none text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Inquiry Types */}
        <div>
          <label className="block text-xs font-normal text-gray-600 mb-2">
            {t.fields.inquiryType.label}
          </label>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-none text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            required
          >
            <option value="">{t.fields.inquiryType.placeholder}</option>
            <option value="demo">{t.inquiryTypes.demo}</option>
            <option value="pricing">{t.inquiryTypes.pricing}</option>
            <option value="support">{t.inquiryTypes.support}</option>
            <option value="partnership">{t.inquiryTypes.partnership}</option>
            <option value="other">{t.inquiryTypes.other}</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-normal text-gray-600 mb-2">
            {t.fields.message.label}
          </label>
          <textarea
            name="message"
            placeholder={t.fields.message.placeholder}
            value={formData.message}
            onChange={handleChange}
            rows={4}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-none text-sm text-gray-900 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="!bg-[#003893] !hover:bg-[#002970] !text-white px-6 py-2.5 rounded-none flex items-center gap-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {t.buttons.sending}
            </>
          ) : (
            <>
              {t.buttons.send}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-[90%] max-w-md bg-white text-gray-900 p-6 sm:p-8 rounded-none shadow-none">
            <h2 className="text-xl font-semibold mb-2">{t.modal.title}</h2>
            <p className="text-sm text-gray-600 mb-6">
              {t.modal.message}
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-[#003893] !text-white rounded-none !hover:bg-[#002970]"
              >
                {t.modal.button}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
