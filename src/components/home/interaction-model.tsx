import { useState } from "react";
import { cn } from "@/lib/utils";
import { Users, Building2, Globe, UserCircle, Home, UserCheck, Briefcase } from "lucide-react";
import { useLanguageStore } from "@/store/Language-store";
import { translations } from "@/i18n/translations";

export default function InteractionModel() {
    const [activeTab, setActiveTab] = useState<string>("g2c");
    const { language } = useLanguageStore();
    const t = translations[language].interactionModel;

    const topTabs = [
        { id: "g2c", label: t.tabs.g2c, icon: Users },
        { id: "g2b", label: t.tabs.g2b, icon: Building2 },
        { id: "g2g", label: t.tabs.g2g, icon: Globe },
        { id: "g2e", label: t.tabs.g2e, icon: UserCircle },
        { id: "g2s", label: t.tabs.g2s, icon: Home },
    ];

    const bottomTabs = [
        { id: "c2g", label: t.tabs.c2g, icon: UserCheck },
        { id: "b2b", label: t.tabs.b2b, icon: Briefcase },
    ];

    const ActiveIcon = [...topTabs, ...bottomTabs].find((tab) => tab.id === activeTab)?.icon || Users;

    return (
        <section
            aria-label="Interaction Models"
            className="w-full bg-white py-16"
        >
            {/* Header */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-3 sm:px-2">
                <h2 className="mb-3 text-center text-[28px] font-bold leading-tight text-black">
                    {t.title}
                </h2>
                <p className="mx-auto mb-10 text-center text-[16px] leading-relaxed text-slate-700">
                    {t.subtitle}
                </p>
            </div>

            {/* Tabs - Perfectly aligned with header on both sides */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-3 sm:px-2 mb-8">
                {/* Top row - 5 tabs */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch justify-center gap-3 mb-3">
                    {topTabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                aria-pressed={isActive}
                                aria-label={`${tab.label} interaction model`}
                                style={{
                                    borderColor: isActive ? "#003893" : "#7a92b0",
                                }}
                                className={cn(
                                    "flex items-center gap-2 border-2 border-solid px-6 py-3 text-[14px] font-medium transition-all duration-200 sm:flex-1 cursor-pointer w-full sm:w-auto",
                                    isActive
                                        ? "bg-[#003893] text-white"
                                        : "bg-white text-[#1a1a1a] hover:bg-gray-50 hover:border-[#003893] hover:text-[#003893]"
                                )}
                            >
                                <Icon className={cn("h-4 w-4 flex-shrink-0 transition-colors duration-200", isActive ? "text-white" : "text-[#1a1a1a] group-hover:text-[#003893]")} aria-hidden="true" />
                                <span className="whitespace-nowrap">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Bottom row - 2 tabs */}
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                    {bottomTabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                aria-pressed={isActive}
                                aria-label={`${tab.label} interaction model`}
                                style={{
                                    borderColor: isActive ? "#003893" : "#7a92b0",
                                }}
                                className={cn(
                                    "flex items-center gap-2 border-2 border-solid px-6 py-3 text-[14px] font-medium transition-all duration-200 cursor-pointer w-full sm:w-auto",
                                    isActive
                                        ? "bg-[#003893] text-white"
                                        : "bg-white text-[#1a1a1a] hover:bg-gray-50 hover:border-[#003893] hover:text-[#003893]"
                                )}
                            >
                                <Icon className={cn("h-4 w-4 flex-shrink-0 transition-colors duration-200", isActive ? "text-white" : "text-[#1a1a1a]")} aria-hidden="true" />
                                <span className="whitespace-nowrap">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content Area - Sharp corners with #b0c1de border */}
            <div className="mx-auto max-w-5xl px-5">
                <div className="border-2 border-[#b0c1de] bg-[#E6EBF4] p-8" role="region" aria-live="polite">
                    <div className="mb-4 flex items-start gap-3">
                        <ActiveIcon className="h-6 w-6 text-[#003893]" aria-hidden="true" />
                        <h3 className="text-[22px] font-bold text-black">
                            {t.content[activeTab as keyof typeof t.content].title}
                        </h3>
                    </div>

                    <p className="mb-6 text-[15px] leading-relaxed text-[#2c2c2c]">
                        {t.content[activeTab as keyof typeof t.content].description}
                    </p>

                    {/* Features - Sharp corners with #b0c1de borders and transparent background */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {t.content[activeTab as keyof typeof t.content].features.map(
                            (feature, index) => (
                                <div
                                    key={index}
                                    className="border-2 border-[#b0c1de] bg-transparent px-5 py-3 text-[14px] font-medium text-[#1a1a1a]"
                                >
                                    {feature}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
