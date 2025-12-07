import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguageStore } from "@/store/Language-store";
import { translations } from "@/i18n/translations";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const t = translations[language].header;
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: "en" | "ne") => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className="sticky top-0 left-0 right-0 w-full bg-white border-b border-[rgba(9,30,66,0.06)] z-50"
        aria-label="Eshasan header"
      >
        <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between gap-5 h-[72px] px-4 md:px-3 sm:px-2">
          {/* Brand (left) */}
          <Link
            to="/"
            className="shrink-0 font-bold! text-[28px] leading-none text-[#003893]! no-underline cursor-pointer"
          >
            eShasan
          </Link>

          {/* Centered nav - desktop only */}
          <nav
            className="hidden md:flex flex-1 justify-center gap-8 items-center"
            aria-label="Primary"
          >
            <Link
              to="/products"
              className={`text-[16px] font-normal! no-underline hover:text-[#003893]! cursor-pointer ${
                isActive("/products") ? "text-[#003893]!" : "text-[#000000]!"
              }`}
            >
              {t.products}
            </Link>
            <Link
              to="/solutions"
              className={`text-[16px] font-normal! no-underline hover:text-[#003893]! cursor-pointer ${
                isActive("/solutions") ? "text-[#003893]!" : "text-[#000000]!"
              }`}
            >
              {t.solutions}
            </Link>
            <Link
              to="/resources"
              className={`text-[16px] font-normal! no-underline hover:text-[#003893]! cursor-pointer ${
                isActive("/resources") ? "text-[#003893]!" : "text-[#000000]!"
              }`}
            >
              {t.resources}
            </Link>
            <Link
              to="/about"
              className={`text-[16px] font-normal! no-underline hover:text-[#003893]! cursor-pointer ${
                isActive("/about") ? "text-[#003893]!" : "text-[#000000]!"
              }`}
            >
              {t.about}
            </Link>
          </nav>

          {/* Actions (right) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language selector dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1.5 text-[#000000] text-[14px] font-normal bg-transparent border-none cursor-pointer hover:text-[#003893]"
                aria-label="Select language"
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
              >
                <Globe className="w-4 h-4" />
                <span className="inline-block w-[70px] text-left">
                  {t.language}
                </span>
                <svg
                  className={`w-3 h-3 transition-transform ${
                    isLanguageDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-none z-50">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`w-full text-left px-4 py-2.5 text-[14px] transition-colors cursor-pointer ${
                      language === "en"
                        ? "!bg-[#003893] !text-white !hover:bg-[#002f7a]"
                        : "!text-[#000000] !hover:text-[#003893] !hover:bg-gray-50"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("ne")}
                    className={`w-full text-left px-4 py-2.5 text-[14px] transition-colors cursor-pointer ${
                      language === "ne"
                        ? "!bg-[#003893] !text-white !hover:bg-[#002f7a]"
                        : "!text-[#000000] !hover:text-[#003893] !hover:bg-gray-50"
                    }`}
                  >
                    नेपाली
                  </button>
                </div>
              )}
            </div>

            {/* Desktop CTA */}
            <Link to="/contact">
              <Button
                size="cta"
                className="hidden md:inline-flex bg-[#003893]! text-white! rounded-none! border-none! hover:bg-[#002f7a]! md:w-36 md:h-10 md:text-[15px]! lg:w-40 lg:h-12 lg:text-[16px]! cursor-pointer"
                aria-label="Contact Sales"
              >
                {t.contactSales}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="flex md:hidden items-center justify-center w-10 h-10 bg-transparent! border-none! shadow-none! outline-none! cursor-pointer"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label={
                isMobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
            >
              {isMobileOpen ? (
                <span className="text-[24px] leading-none !text-black">✕</span>
              ) : (
                <div className="flex flex-col items-center justify-center gap-[4px]">
                  <span className="block w-6 h-[3px] bg-black" />
                  <span className="block w-6 h-[3px] bg-black" />
                  <span className="block w-6 h-[3px] bg-black" />
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileOpen && (
        <div className="fixed left-0 right-0 top-[72px] bottom-0 bg-white md:hidden z-[45]">
          <div className="max-w-[1230px] w-full mx-auto px-4 pt-4 pb-6">
            <nav aria-label="Mobile primary">
              <Link
                to="/products"
                className={`block py-4 text-[16px] font-normal! no-underline hover:bg-[#003893] hover:text-white! cursor-pointer ${
                  isActive("/products")
                    ? "bg-[#003893] text-white!"
                    : "text-[#000000]!"
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {t.products}
              </Link>
              <Link
                to="/solutions"
                className={`block py-4 text-[16px] font-normal! no-underline hover:bg-[#003893] hover:text-white! cursor-pointer ${
                  isActive("/solutions")
                    ? "bg-[#003893] text-white!"
                    : "text-[#000000]!"
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {t.solutions}
              </Link>
              <Link
                to="/resources"
                className={`block py-4 text-[16px] font-normal! no-underline hover:bg-[#003893] hover:text-white! cursor-pointer ${
                  isActive("/resources")
                    ? "bg-[#003893] text-white!"
                    : "text-[#000000]!"
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {t.resources}
              </Link>
              <Link
                to="/about"
                className={`block py-4 text-[16px] font-normal! no-underline hover:text-[#003893] hover:text-white! cursor-pointer ${
                  isActive("/about")
                    ? "bg-[#003893] text-white!"
                    : "text-[#000000]!"
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {t.about}
              </Link>

              <Link
                to="/contact"
                className={`block py-4 text-[16px] font-normal! no-underline hover:bg-[#003893] hover:text-white! cursor-pointer ${
                  isActive("/contact")
                    ? "bg-[#003893] text-white!"
                    : "text-[#000000]!"
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {t.contactSales}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
