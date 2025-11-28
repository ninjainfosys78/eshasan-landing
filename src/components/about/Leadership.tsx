import { useLanguageStore } from "@/store/Language-store";
import { aboutTranslations } from "@/i18n/about-translation";

const MEMBER_IMAGES = [
	"/src/assets/image1.jpg",
	"/src/assets/image2.jpg",
	"/src/assets/image3.jpg",
	"/src/assets/image4.jpg",
];

export default function Leadership() {
	const { language } = useLanguageStore();
	const t = aboutTranslations[language].leadership;

	return (
		<section className="bg-white">
			<div className="max-w-[1400px] mx-auto px-4 py-12">
				<div className="text-center mb-8">
					<h2 className="text-[28px] font-bold text-[#000000]">
						{t.title}
					</h2>
					<p className="mt-2 text-[16px] text-slate-600 max-w-2xl mx-auto">
						{t.subtitle}
					</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{t.members.map((m, i) => (
						<article key={i} className="flex flex-col bg-transparent">
							<div className="w-full h-44 bg-gray-100 overflow-hidden rounded-none">
								<img
									src={MEMBER_IMAGES[i]}
									alt={m.name}
									className="w-full h-full object-cover block"
								/>
							</div>

							<div className="mt-4">
								<h3 className="text-[16px] font-semibold text-slate-900">
									{m.name}
								</h3>
								<a
									href="#"
									className="text-[14px] text-[#003893] block mt-1"
									onClick={(e) => e.preventDefault()}
								>
									{m.role}
								</a>
								<p className="mt-2 text-[14px] text-slate-600">{m.bio}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
