"use client"

import { useState } from "react";
import { i18n, TFunction } from "i18next";
import Link from "next/link";
import Image from "next/image";

interface MobileHeaderProps {
  t: TFunction<string | string[], undefined>;
  i18n: i18n;
  handleSearchOpen: () => void;
}

interface NavLink {
  href: string;
  label: string;
  isExternal: boolean;
}

export default function MobileHeader({ t, i18n, handleSearchOpen }: MobileHeaderProps): React.ReactNode {
  const navLinks: NavLink[] = [
    { href: `/${i18n.language}/learn`, label: t("header.learn"), isExternal: false },
    { href: `/${i18n.language}/deploy`, label: t("header.deploy"), isExternal: false },
    { href: `/${i18n.language}/showcase`, label: t("header.showcase"), isExternal: false },
    { href: `/${i18n.language}/docs`, label: t("header.docs"), isExternal: false },
    { href: `/${i18n.language}/blog`, label: t("header.blog"), isExternal: false },
    { href: `/${i18n.language}/commerce`, label: t("header.commerce"), isExternal: false },
    { href: `/${i18n.language}/templates`, label: t("header.templates"), isExternal: false },
    { href: `/${i18n.language}/enterprise`, label: t("header.enterprise"), isExternal: false },
    { href: `/${i18n.language}/github`, label: t("header.github"), isExternal: false }
  ];
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
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
      <div className="flex space-x-3 ml-auto">
        <button
          className="cursor-pointer flex items-center text-[14px] text-[#171717] font-medium px-1 py-[5px]"
          onClick={handleSearchOpen}
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

      {isMenuOpen && (
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
    </>
  );
}
