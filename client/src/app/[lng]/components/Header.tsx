"use client"

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useT } from "@/app/i18n/client";
import Link from "next/link";
import Image from "next/image";

interface NavLink {
  href: string;
  label: string;
  isExternal: boolean;
}

interface SearchResult {
  href: string;
  label: string;
}

export default function Header(): React.ReactNode {
  const { t, i18n } = useT("app", {});
  const pathname: string = usePathname();
  const router: AppRouterInstance = useRouter();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [activeSearchTab, setActiveSearchTab] = useState<string>("app");
  const [SearchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      const isM: boolean = window.innerWidth <= 1024
      setIsMobile(isM);
      setNavLinks(!isM ? [
        { href: `/${i18n.language}/showcase`, label: "Showcase", isExternal: false },
        { href: `/${i18n.language}/docs`, label: "Docs", isExternal: false },
        { href: `/${i18n.language}/blog`, label: "Blog", isExternal: false },
        { href: `/${i18n.language}/templates`, label: "Templates", isExternal: true },
        { href: `/${i18n.language}/enterprise`, label: "Enterprise", isExternal: true }
      ] : [
        { href: `/${i18n.language}/learn`, label: "Learn", isExternal: false },
        { href: `/${i18n.language}/deploy`, label: "Deploy", isExternal: false },
        { href: `/${i18n.language}/showcase`, label: "Showcase", isExternal: false },
        { href: `/${i18n.language}/docs`, label: "Docs", isExternal: false },
        { href: `/${i18n.language}/blog`, label: "Blog", isExternal: false },
        { href: `/${i18n.language}/commerce`, label: "Next.js Commerce", isExternal: false },
        { href: `/${i18n.language}/templates`, label: "Templates", isExternal: false },
        { href: `/${i18n.language}/enterprise`, label: "Enterprise", isExternal: false },
        { href: `/${i18n.language}/github`, label: "Github", isExternal: false }
      ]);
      setSearchResults([
        { href: `/${i18n.language}/docs`, label: "Introduction" },
        { href: `/${i18n.language}/docs/getting-started`, label: "Getting Started" },
        { href: `/${i18n.language}/docs/app-Router`, label: "App Router" },
        { href: `/${i18n.language}/docs/architecture`, label: "Architecture" },
        { href: `/${i18n.language}/docs/pages-router`, label: "Pages Router" },
        { href: `/${i18n.language}/docs/api-reference`, label: "API Reference" },
        { href: `/${i18n.language}/docs/accessibility`, label: "Accessibility" }
      ]);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [t, i18n]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        toggleSearch();
      }
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchOpen]);

  const handlePush = (pathname: string): void => {
    router.push(`/${i18n.language}${pathname}`);
  };

  const toggleSearch = (): void => {
    setSelectedResultIndex(0);
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full h-[65px] z-50 flex items-center border-b border-[#ededed] ${!isMobile ? "px-14" : "px-6"} py-[15px] bg-[#ffffff] font-[family-name:var(--font-geist-sans)]`}>
        <div className="flex items-center space-x-4 mr-10">
          <Link href="/">
            <Image
              className="invert"
              src="/assets/vercel.svg"
              alt="Vercel logo"
              width={25.4}
              height={22}
              priority
            />
          </Link>
          <span className="text-[#dfdfdf]">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="26" viewBox="0 0 12 26" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round">
              <line x1="0" y1="28" x2="14" y2="0" />
            </svg>
          </span>
          <Link href="/">
            <Image
              className="dark:invert"
              src="/assets/next.svg"
              alt="Next.js logo"
              width={89.76}
              height={18}
              priority
            />
          </Link>
        </div>

        {!isMobile && (
          <nav className="flex space-x-6 text-[14px]">
            {navLinks.map(({ href, label, isExternal }) => (
              <Link
                key={href}
                href={href}
                className={`transition duration-200 ease-in-out ${pathname === href ? "text-[#0373F5] font-medium" : "text-[#666666] hover:text-[#171717]"}`}
              >
                {label}
                {isExternal && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 28 28" fill="none" stroke="#666666" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    className="inline relative -top-[6px]">
                    <path d="M10 22 L22 10" />
                    <path d="M10 10 H22 V22" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>
        )}

        {!isMobile ? (
          <div className="flex space-x-3 ml-auto">
            <button
              className="cursor-pointer border border-[#f2f2f2] bg-[#f2f2f2] text-[14px] text-[#666666] px-[10px] pl-[8px] pr-[5px] rounded-lg hover:bg-[#ebebeb] hover:border-[#ebebeb] transition duration-200 ease-in-out"
              onClick={toggleSearch}
            >
              Search documentation...
              <span className="border border-[#dfdfdf] bg-[#ffffff] text-[12px] text-[#171717] font-medium px-[6px] py-[3px] rounded-lg ml-10">
                CtrlK
              </span>
            </button>
            <button
              className="cursor-pointer flex items-center border border-[#ededed] text-[14px] text-[#171717] font-medium px-3 py-[5px] rounded-lg hover:bg-[#f2f2f2] transition duration-200 ease-in-out"
              onClick={() => handlePush("/deploy")}
            >
              <Image
                className="invert"
                src="/assets/vercel.svg"
                alt="Vercel logo"
                width={15}
                height={12.99}
                priority
              />
              <span className="ml-[10px]">Deploy</span>
            </button>
            <button
              className="cursor-pointer border border-[#171717] bg-[#171717] text-[14px] text-[#ededed] font-medium px-3 py-[5px] rounded-lg hover:bg-[#666666] hover:border-[#666666] transition duration-200 ease-in-out"
              onClick={() => handlePush("/learn")}
            >
              Learn
            </button>
          </div>
        ) :
          (
            <div className="flex space-x-3 ml-auto">
              <button
                className="cursor-pointer flex items-center text-[14px] text-[#171717] font-medium px-1 py-[5px]"
                onClick={toggleSearch}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10" cy="10" r="8" />
                  <line x1="22" y1="22" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <button
                className="cursor-pointer flex items-center text-[14px] text-[#171717] font-medium px-1 py-[5px]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height={isMenuOpen ? 26 : 24} viewBox={isMenuOpen ? "0 0 26 26" : "0 0 26 24"} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <line
                    x1="1"
                    y1="8"
                    x2="22"
                    y2="8"
                    className="transition-transform duration-200 ease-in-out origin-center"
                    transform={isMenuOpen ? "translate(0, 5) rotate(45)" : "translate(0, 0) rotate(0)"}
                  />
                  <line
                    x1="1"
                    y1="18"
                    x2="22"
                    y2="18"
                    className="transition-transform duration-200 ease-in-out origin-center"
                    transform={isMenuOpen ? "translate(0, -5) rotate(-45)" : "translate(0, 0) rotate(0)"}
                  />
                </svg>
              </button>
            </div>
          )}
      </header>

      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-t from-[#ffffff]/100 to-transparen flex items-start pt-[110px] justify-center z-50 font-[family-name:var(--font-geist-sans)]"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="bg-[#ffffff] w-full max-w-[640px] min-h-[380px] border border-[#ededed] shadow rounded-[12px] animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 border-b border-[#ededed]">
              <div className="flex items-center gap-2 mb-3">
                <button
                  className={`cursor-pointer transition duration-200 ease-in-out text-xs font-medium border px-1 py-[1.2px] rounded ${activeSearchTab === "app" ? "border-[#cce6ff] text-[#0070f1] bg-[#ebf5ff]" : "border-[#ededed] text-[#666666]"}`}
                  onClick={() => setActiveSearchTab("app")}
                >
                  App
                </button>
                <button
                  className={`cursor-pointer transition duration-200 ease-in-out text-xs font-medium border px-1 py-[1.2px] rounded ${activeSearchTab === "pages" ? "border-[#eddcf9] text-[#995fcc] bg-[#f9f1fe]" : "border-[#ededed] text-[#666666] bg-[#ffffff]"}`}
                  onClick={() => setActiveSearchTab("pages")}
                >
                  Pages
                </button>
              </div>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  placeholder="What are you searching for?"
                  className="w-full text-[18px] outline-none placeholder-[#666666] pl-1"
                />
                <span
                  className="cursor-pointer transition duration-200 ease-in-out border border-[#dfdfdf] bg-[#ffffff] text-[12px] text-[#171717] px-[4px] py-[1px] rounded hover:bg-[#f2f2f2]"
                  onClick={() => setIsSearchOpen(false)}
                >
                  Esc
                </span>
              </div>
            </div>
            <div className="p-2">
              {SearchResults.map(({ href, label }, index) => (
                <Link
                  key={href}
                  href={href}
                  className={`transition duration-200 ease-in-out flex items-center p-[9px] pb-[11px] text-sm rounded ${index === selectedResultIndex ? "bg-[#f2f2f2]" : "hover:bg-[#f2f2f2]"}`}
                  onMouseEnter={() => setSelectedResultIndex(index)}
                >
                  <Image
                    className="dark:invert"
                    src="/assets/file.svg"
                    alt="File logo"
                    width={16}
                    height={16}
                    priority
                  />
                  <span className="pl-[13px]">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {isMenuOpen && isMobile && (
        <div className="fixed top-[65px] left-0 w-full h-[calc(100vh-65px)] bg-[#ffffff] z-40 flex flex-col pl-[25px] pt-[15px] font-[family-name:var(--font-geist-sans)]">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className=" transition duration-200 ease-in-out text-left text-[#666666] hover:text-[#171717] text-[16px] font-medium py-[10px]"
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>
        {`
          .animate-fade-in {
            animation: scale-in 0.2s ease forwards;
          }

          @keyframes scale-in {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}
