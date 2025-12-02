import { useLanguageStore } from "@/store/Language-store";
import { aboutTranslations } from "@/i18n/about-translation";
import { useEffect, useState } from "react";
import { type Leader } from "@/services/pocketbase";
import { leadershipService } from "@/services/leadershipService";

export default function Leadership() {
	const { language } = useLanguageStore();
	const t = aboutTranslations[language].leadership;
	const [leaders, setLeaders] = useState<Leader[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchLeaders = async () => {
			try {
				const items = await leadershipService.getLeaders();
				setLeaders(items);
			} catch (error: any) {
				setError(error?.message || "Failed to fetch leaders");
			} finally {
				setLoading(false);
			}
		};

		fetchLeaders();
	}, []);

	if (loading) {
		return (
			<section className="bg-white">
				<div className="max-w-[1400px] mx-auto px-4 py-12">
					<p className="text-center text-[#072235]">Loading team...</p>
				</div>
			</section>
		);
	}

	if (error) {
		return (
			<section className="bg-white">
				<div className="max-w-[1400px] mx-auto px-4 py-12">
					<p className="text-center text-red-600">{error}</p>
				</div>
			</section>
		);
	}

	if (leaders.length === 0) {
		return null;
	}

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
					{leaders.map((leader) => (
						<article key={leader.id} className="flex flex-col bg-transparent">
							<div className="w-full h-44 bg-gray-100 overflow-hidden rounded-none">
								<img
									src={leadershipService.getImageUrl(leader)}
									alt={leader.Name}
									className="w-full h-full object-cover block"
								/>
							</div>

							<div className="mt-4">
								<h3 className="text-[16px] font-semibold text-slate-900">
									{leader.Name}
								</h3>
								<p className="text-[14px] text-[#003893] block mt-1">
									{leader.Position}
								</p>
								<p className="mt-2 text-[14px] text-slate-600">
									{leader.Description}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
