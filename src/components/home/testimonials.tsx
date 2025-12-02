import { useEffect, useRef, useState } from "react";
import { useLanguageStore } from "@/store/Language-store";
import { translations } from "@/i18n/translations";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const { language } = useLanguageStore();
  const t = translations[language].testimonials;

  const stats = [
    {
      value: t.stats.municipalities.value,
      label: t.stats.municipalities.label,
    },
    { value: t.stats.activeUsers.value, label: t.stats.activeUsers.label },
    { value: t.stats.uptime.value, label: t.stats.uptime.label },
    { value: t.stats.countries.value, label: t.stats.countries.label },
  ];

  const testimonialsData = [
    {
      name: t.testimonials.sarah.name,
      title: t.testimonials.sarah.title,
      quote: t.testimonials.sarah.quote,
    },
    {
      name: t.testimonials.priya.name,
      title: t.testimonials.priya.title,
      quote: t.testimonials.priya.quote,
    },
    {
      name: t.testimonials.ahmed.name,
      title: t.testimonials.ahmed.title,
      quote: t.testimonials.ahmed.quote,
    },
  ];

  const count = testimonialsData.length;
  const intervalRef = useRef<number | null>(null);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pointer = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    const tick = () => {
      pointer.current.tx += (pointer.current.x - pointer.current.tx) * 0.1;
      pointer.current.ty += (pointer.current.y - pointer.current.ty) * 0.1;
      if (el) {
        el.style.transform = `translate3d(${pointer.current.tx}px, ${pointer.current.ty}px, 0)`;
      }
      rafRef.current = null;
    };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      pointer.current.x = nx * 5;
      pointer.current.y = ny * 5;
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [count]);

  const activeTestimonial = testimonialsData[index];

  return (
    <section
      aria-label="Prove impact at scale"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#0F172B] via-[#1C388C] to-[#0F172B] text-white font-['IBM_Plex_Sans',system-ui,-apple-system,'Segoe_UI',Roboto,sans-serif] py-12 sm:py-14 md:py-16"
    >
      <div
        ref={overlayRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
        style={{
          willChange: "transform",
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%22 height=%22100%22 fill=%22none%22/><path d=%22M0 0h100M0 25h100M0 50h100M0 75h100M0 100h100M0 0v100M25 0v100M50 0v100M75 0v100M100 0v100%22 stroke=%22%23003893%22 stroke-opacity=%220.35%22 stroke-width=%221.8%22/></svg>")',
          backgroundRepeat: "repeat",
          backgroundSize: "100px 100px",
          transform: "translate3d(0,0,0)",
        }}
      />

      <div className="relative z-[2] mx-auto flex max-w-7xl flex-col justify-center px-5 max-[700px]:gap-6">
        <h2 className="mb-2 text-center text-[28px] font-semibold leading-tight text-white max-[700px]:mt-2">
          {t.title}
        </h2>

        <p className="mx-auto mb-8 max-w-[880px] text-center text-[16px] leading-relaxed text-white/80">
          {t.subtitle}
        </p>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-6 text-center max-[700px]:mb-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="min-w-[140px] flex-1 px-2">
              <div className="text-[28px] font-extrabold leading-none tracking-tight text-white">
                {value}
              </div>
              <div className="mt-2 text-[11px] font-normal text-white/70">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-[900px] max-[700px]:mb-4">
          <div
            className="relative rounded-none border-[1.5px] border-white/[0.12] bg-white/[0.04] shadow-[inset_0_1px_2px_rgba(255,255,255,0.08),0_10px_40px_rgba(0,0,0,0.3)] px-5 py-6 sm:px-6 md:px-8"
            style={{
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
          >
            <div className="flex w-full items-start gap-5">
              <div className="flex-shrink-0 pt-1">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg" />
              </div>

              <div className="flex min-h-0 flex-1 flex-col">
                <div className="text-[17px] font-bold leading-tight text-white">
                  {activeTestimonial.name}
                </div>
                <div className="mt-1 text-[13px] leading-snug text-white/70">
                  {activeTestimonial.title}
                </div>

                <blockquote className="mt-4 text-[14px] leading-relaxed text-white/90">
                  "{activeTestimonial.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
