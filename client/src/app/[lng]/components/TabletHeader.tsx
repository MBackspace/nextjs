"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, TFunction } from "i18next";

interface TabletHeaderProps {
  t: TFunction<string | string[], undefined>;
  i18n: i18n;
  handleSearchOpen: () => void;
}

interface NavLink {
  id: number;
  href: string;
  label: string;
  isExternal: boolean;
}

export default function TabletHeader({
  t, i18n, handleSearchOpen
}: TabletHeaderProps): React.ReactNode {
  const pathname: string = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navLinks: NavLink[] = [
    { id: 1, href: `/${i18n.language}`, label: t("header.learn"), isExternal: false },
    { id: 2, href: `/${i18n.language}`, label: t("header.deploy"), isExternal: false },
    { id: 3, href: `/${i18n.language}`, label: t("header.showcase"), isExternal: false },
    { id: 4, href: `/${i18n.language}`, label: t("header.docs"), isExternal: false },
    { id: 5, href: `/${i18n.language}`, label: t("header.blog"), isExternal: false },
    { id: 6, href: `/${i18n.language}`, label: t("header.nextjsCommerce"), isExternal: false },
    { id: 7, href: `/${i18n.language}`, label: t("header.templates"), isExternal: false },
    { id: 8, href: `/${i18n.language}`, label: t("header.enterprise"), isExternal: false },
    { id: 9, href: `/${i18n.language}`, label: t("header.github"), isExternal: false }
  ];

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
        <div className="fixed top-[65px] left-0 w-full h-[calc(100vh+120px)] bg-[var(--theme-bg-base)] z-40 flex flex-col pl-[25px] pt-[15px] shadow font-[family-name:var(--font-geist-sans)]">
          {navLinks.map(({ id, href, label }): React.ReactNode => (
            <Link
              key={id}
              href={href}
              className={`transition duration-200 ease-in-out text-left ${pathname !== href ? "text-[var(--theme-fg-base)]" : "text-[var(--theme-text-muted)]"} hover:text-[var(--theme-fg-base)] text-[16px] font-medium py-[10px]`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
