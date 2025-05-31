"use client"

import { useState } from "react";
import Link from "next/link";
import { i18n, TFunction } from "i18next";

interface ShortHeaderProps {
  t: TFunction<string | string[], undefined>;
  i18n: i18n;
  handleSearchOpen: () => void;
}

interface NavLink {
  href: string;
  label: string;
  isExternal: boolean;
}

export default function ShortHeader({ t, i18n, handleSearchOpen }: ShortHeaderProps): React.ReactNode {
  const navLinks: NavLink[] = [
    { href: `/${i18n.language}/learn`, label: t("header.learn"), isExternal: false },
    { href: `/${i18n.language}/deploy`, label: t("header.deploy"), isExternal: false },
    { href: `/${i18n.language}/showcase`, label: t("header.showcase"), isExternal: false },
    { href: `/${i18n.language}/docs`, label: t("header.docs"), isExternal: false },
    { href: `/${i18n.language}/blog`, label: t("header.blog"), isExternal: false },
    { href: `/${i18n.language}/nextjs-commerce`, label: t("header.nextjsCommerce"), isExternal: false },
    { href: `/${i18n.language}/templates`, label: t("header.templates"), isExternal: false },
    { href: `/${i18n.language}/enterprise`, label: t("header.enterprise"), isExternal: false },
    { href: `/${i18n.language}/github`, label: t("header.github"), isExternal: false }
  ];
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex space-x-3 ml-auto">
        <button
          className="cursor-pointer flex items-center text-[14px] text-[var(--theme-fg-base)] font-medium px-1 py-[5px]"
          onClick={handleSearchOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="10" cy="10" r="8" />
            <line x1="22" y1="22" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <button
          className="cursor-pointer flex items-center text-[14px] text-[var(--theme-fg-base)] font-medium px-1 py-[5px]"
          onClick={(): void => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
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
        <div className="fixed top-[65px] left-0 w-full h-[calc(100vh-65px)] bg-[var(--theme-bg-base)] z-40 flex flex-col pl-[25px] pt-[15px] font-[family-name:var(--font-geist-sans)]">
          {navLinks.map(({ href, label }): React.ReactNode => (
            <Link
              key={href}
              href={href}
              className=" transition duration-200 ease-in-out text-left text-[var(--theme-text-muted)] hover:text-[var(--theme-fg-base)] text-[16px] font-medium py-[10px]"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
