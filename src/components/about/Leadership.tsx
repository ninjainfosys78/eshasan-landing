// // components/about/leadership.tsx
// import { useLanguageStore } from "@/store/Language-store";
// import { aboutTranslations } from "@/i18n/about-translation";
// import { useEffect, useState } from "react";
// import { type Leader } from "@/services/pocketbase";
// import { leadershipService } from "@/services/leadershipService";

// export default function Leadership() {
//   const { language } = useLanguageStore();
//   const t = aboutTranslations[language].leadership;

//   const [leaders, setLeaders] = useState<Leader[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     let mounted = true;

//     const fetchLeaders = async (): Promise<void> => {
//       try {
//         setLoading(true);
//         const items = await leadershipService.getLeaders({
//           page: 1,
//           perPage: 50,
//           sort: "-created",
//         });
//         if (!mounted) return;
//         setLeaders(items);
//       } catch (err: unknown) {
//         if (!mounted) return;
//         if (err instanceof Error) {
//           setError(err.message);
//         } else {
//           setError(String(err ?? "Failed to fetch leaders"));
//         }
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };

//     fetchLeaders();

//     return () => {
//       mounted = false;
//     };
//   }, []); // one-time fetch; records already contain both languages

//   // language detection: treat 'ne' prefixes as Nepali
//   const langIsNepali = (lang: string | undefined): boolean => {
//     if (!lang) return false;
//     const l = lang.toLowerCase();
//     return l.startsWith("ne") || l.startsWith("np") || l.startsWith("nep");
//   };

//   type FieldBase = "Name" | "Position" | "Description";

//   const getField = (leader: Leader, base: FieldBase): string => {
//     // safe dynamic access: cast Leader -> unknown -> Record<string, unknown>
//     const record = leader as unknown as Record<string, unknown>;

//     const enValue = record[`${base}_EN`] ?? record[`${base}_en`];
//     const neValue = record[`${base}_NE`] ?? record[`${base}_ne`];
//     const legacy = record[base];

//     if (langIsNepali(language)) {
//       if (typeof neValue === "string" && neValue.trim() !== "") return neValue;
//       if (typeof enValue === "string" && enValue.trim() !== "") return enValue;
//       if (typeof legacy === "string") return legacy;
//       return "";
//     }

//     // default english-first
//     if (typeof enValue === "string" && enValue.trim() !== "") return enValue;
//     if (typeof neValue === "string" && neValue.trim() !== "") return neValue;
//     if (typeof legacy === "string") return legacy;
//     return "";
//   };

//   if (loading) {
//     return (
//       <section className="bg-white">
//         <div className="max-w-[1400px] mx-auto px-4 py-12">
//           <p className="text-center text-[#072235]">Loading team...</p>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="bg-white">
//         <div className="max-w-[1400px] mx-auto px-4 py-12">
//           <p className="text-center text-red-600">{error}</p>
//         </div>
//       </section>
//     );
//   }

//   if (!leaders || leaders.length === 0) {
//     return null;
//   }

//   return (
//     <section className="bg-white">
//       <div className="max-w-[1400px] mx-auto px-4 py-12">
//         <div className="text-center mb-8">
//           <h2 className="text-[28px] font-bold text-[#000000]">{t.title}</h2>
//           <p className="mt-2 text-[16px] text-slate-600 max-w-2xl mx-auto">
//             {t.subtitle}
//           </p>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {leaders.map((leader) => {
//             const name = getField(leader, "Name");
//             const position = getField(leader, "Position");
//             const description = getField(leader, "Description");
//             const imgUrl = leadershipService.getImageUrl(leader);

//             return (
//               <article key={leader.id} className="flex flex-col bg-transparent">
//                 <div className="w-full h-44 bg-gray-100 overflow-hidden rounded-none">
//                   <img
//                     src={imgUrl}
//                     alt={name || "leader"}
//                     className="w-full h-full object-cover block"
//                   />
//                 </div>

//                 <div className="mt-4">
//                   <h3 className="text-[16px] font-semibold text-slate-900">
//                     {name}
//                   </h3>
//                   <p className="text-[14px] text-[#003893] block mt-1">
//                     {position}
//                   </p>
//                   <p className="mt-2 text-[14px] text-slate-600">
//                     {description}
//                   </p>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
