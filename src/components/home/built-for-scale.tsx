import { ArrowRight, ArrowDown, CheckCircle2 } from "lucide-react";
import { useLanguageStore } from "@/store/Language-store";
import { translations } from "@/i18n/translations";

interface BuiltForScaleProps {
    variant?: "default" | "white";
}

function LayerCard({
    title,
    items,
    variant = "default",
}: {
    title: string;
    items: string[];
    variant?: "default" | "white";
}) {
    const cardBg = variant === "white" ? "bg-white" : "bg-[#E6EBF4]";
    const itemBg = variant === "white" ? "bg-gray-50" : "bg-[#E6EBF4]";
    const itemBorder = variant === "white" ? "border-blue-100" : "border-[#b0c1de]";

    return (
        <div
            className={`flex flex-1 min-h-[230px] flex-col ${cardBg} px-6 py-5`}
        >
            <h3 className="mb-3 text-[20px] font-bold text-[#072235] text-center">{title}</h3>

            <div className="flex flex-col gap-2.5">
                {items.map((item) => (
                    <div
                        key={item}
                        className={`border ${itemBorder} ${itemBg} px-4 py-2 text-[16px] text-[#072235] text-center`}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function BuiltForScale({ variant = "default" }: BuiltForScaleProps) {
    const { language } = useLanguageStore();
    const t = translations[language].builtForScale;

    const LAYERS = [
        {
            title: t.layers.frontend.title,
            items: t.layers.frontend.items,
        },
        {
            title: t.layers.api.title,
            items: t.layers.api.items,
        },
        {
            title: t.layers.core.title,
            items: t.layers.core.items,
        },
        {
            title: t.layers.analytics.title,
            items: t.layers.analytics.items,
        },
    ];

    const FEATURES = [
        {
            title: t.features.governance.title,
            desc: t.features.governance.desc,
        },
        {
            title: t.features.secureApis.title,
            desc: t.features.secureApis.desc,
        },
        {
            title: t.features.roleBasedAccess.title,
            desc: t.features.roleBasedAccess.desc,
        },
        {
            title: t.features.cloudNative.title,
            desc: t.features.cloudNative.desc,
        },
    ];

    const [frontend, api, core, analytics] = LAYERS;

    return (
        <section
            aria-label="Built for Scale"
            className="w-full bg-transparent py-12"
        >
            {/* Container matching header max-width */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-3 sm:px-2">
                {/* Header Text */}
                <div className="text-center mb-8">
                    <h2 className="text-[28px] font-bold text-black">{t.title}</h2>
                    <p className="mt-3 text-[16px] text-slate-700">
                        {t.subtitle}
                    </p>
                </div>

                {/* < 500px : 1 column (Frontend ↓ API ↓ Core ↓ Analytics) */}
                <div className="mt-12 block min-[500px]:hidden">
                    <div className="flex flex-col items-stretch gap-6">
                        <LayerCard
                            title={frontend.title}
                            items={frontend.items}
                            variant={variant}
                        />
                        <div className="flex justify-center">
                            <ArrowDown className="h-5 w-5 text-[#072235]" />
                        </div>
                        <LayerCard
                            title={api.title}
                            items={api.items}
                            variant={variant}
                        />
                        <div className="flex justify-center">
                            <ArrowDown className="h-5 w-5 text-[#072235]" />
                        </div>
                        <LayerCard
                            title={core.title}
                            items={core.items}
                            variant={variant}
                        />
                        <div className="flex justify-center">
                            <ArrowDown className="h-5 w-5 text-[#072235]" />
                        </div>
                        <LayerCard
                            title={analytics.title}
                            items={analytics.items}
                            variant={variant}
                        />
                    </div>
                </div>

                {/* 500–999px : 2 columns
              Frontend → API
                   ↓
              Core    → Analytics
          */}
                <div className="mt-12 hidden min-[500px]:block min-[1000px]:hidden">
                    <div className="flex flex-col items-stretch gap-8">
                        {/* Row 1: Frontend -> API */}
                        <div className="flex items-center gap-6">
                            <LayerCard
                                title={frontend.title}
                                items={frontend.items}
                                variant={variant}
                            />
                            <ArrowRight className="h-5 w-5 flex-shrink-0 text-[#072235]" />
                            <LayerCard
                                title={api.title}
                                items={api.items}
                                variant={variant}
                            />
                        </div>

                        {/* Down arrow from API to Core */}
                        <div className="flex justify-center">
                            <ArrowDown className="h-5 w-5 text-[#072235]" />
                        </div>

                        {/* Row 2: Core -> Analytics */}
                        <div className="flex items-center gap-6">
                            <LayerCard
                                title={core.title}
                                items={core.items}
                                variant={variant}
                            />
                            <ArrowRight className="h-5 w-5 flex-shrink-0 text-[#072235]" />
                            <LayerCard
                                title={analytics.title}
                                items={analytics.items}
                                variant={variant}
                            />
                        </div>
                    </div>
                </div>

                {/* 1000–1279px : 3 columns
              Frontend → API → Core
                               ↓
                           Analytics
          */}
                <div className="mt-12 hidden min-[1000px]:block min-[1280px]:hidden">
                    <div className="flex flex-col items-stretch gap-6">
                        {/* Top row: 3 cards with arrows */}
                        <div className="flex items-center gap-6">
                            <LayerCard
                                title={frontend.title}
                                items={frontend.items}
                                variant={variant}
                            />
                            <ArrowRight className="h-5 w-5 flex-shrink-0 text-[#072235]" />
                            <LayerCard
                                title={api.title}
                                items={api.items}
                                variant={variant}
                            />
                            <ArrowRight className="h-5 w-5 flex-shrink-0 text-[#072235]" />
                            <LayerCard
                                title={core.title}
                                items={core.items}
                                variant={variant}
                            />
                        </div>

                        {/* Down arrow from Core to Analytics */}
                        <div className="flex justify-center">
                            <ArrowDown className="h-5 w-5 text-[#072235]" />
                        </div>

                        {/* Analytics centered below Core */}
                        <div className="flex justify-center">
                            <div className="w-1/3">
                                <LayerCard
                                    title={analytics.title}
                                    items={analytics.items}
                                    variant={variant}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ≥1280px : 4 columns
              Frontend → API → Core → Analytics
          */}
                <div className="mt-12 hidden min-[1280px]:block">
                    <div className="flex items-center gap-6">
                        <LayerCard
                            title={frontend.title}
                            items={frontend.items}
                            variant={variant}
                        />
                        <ArrowRight className="h-5 w-5 flex-shrink-0 text-[#072235]" />
                        <LayerCard
                            title={api.title}
                            items={api.items}
                            variant={variant}
                        />
                        <ArrowRight className="h-5 w-5 flex-shrink-0 text-[#072235]" />
                        <LayerCard
                            title={core.title}
                            items={core.items}
                            variant={variant}
                        />
                        <ArrowRight className="h-5 w-5 flex-shrink-0 text-[#072235]" />
                        <LayerCard
                            title={analytics.title}
                            items={analytics.items}
                            variant={variant}
                        />
                    </div>
                </div>

                {/* FEATURES */}
                <div className="mt-14">
                    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                        {FEATURES.map((feat) => (
                            <div key={feat.title} className="flex gap-3">
                                <CheckCircle2 className="mt-1 h-7 w-7 flex-shrink-0 text-[#072235]" />
                                <div>
                                    <h4 className="text-base font-bold text-[#072235]">
                                        {feat.title}
                                    </h4>
                                    <p className="mt-1 text-base leading-relaxed text-[rgba(7,34,53,0.7)]">
                                        {feat.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
