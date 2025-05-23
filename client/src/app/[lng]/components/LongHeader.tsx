"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { i18n, TFunction } from "i18next";

interface LongHeaderProps {
  t: TFunction<string | string[], undefined>;
  i18n: i18n;
  handleSearchOpen: () => void;
}

interface NavLink {
  href: string;
  label: string;
  isExternal: boolean;
}

export default function LongHeader({ t, i18n, handleSearchOpen }: LongHeaderProps): React.ReactNode {
  const pathname: string = usePathname();
  const navLinks: NavLink[] = [
    { href: `/${i18n.language}/showcase`, label: t("header.showcase"), isExternal: false },
    { href: `/${i18n.language}/docs`, label: t("header.docs"), isExternal: false },
    { href: `/${i18n.language}/blog`, label: t("header.blog"), isExternal: false },
    { href: `/${i18n.language}/templates`, label: t("header.templates"), isExternal: true },
    { href: `/${i18n.language}/enterprise`, label: t("header.enterprise"), isExternal: true }
  ];

  return (
    <>
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

      <div className="flex space-x-3 ml-auto">
        <button
          className="cursor-pointer border border-[#f2f2f2] bg-[#f2f2f2] text-[14px] text-[#666666] px-[10px] pl-[8px] pr-[5px] rounded-lg hover:bg-[#ebebeb] hover:border-[#ebebeb] transition duration-200 ease-in-out"
          onClick={handleSearchOpen}
        >
          {t("header.search.button")}
          <span className="border border-[#dfdfdf] bg-[#ffffff] text-[12px] text-[#171717] font-medium px-[6px] py-[3px] rounded-lg ml-10">
            CtrlK
          </span>
        </button>
        <Link
          href={`/${i18n.language}/deploy`}
          className="cursor-pointer flex items-center border border-[#ededed] text-[14px] text-[#171717] font-medium px-3 py-[5px] rounded-lg hover:bg-[#f2f2f2] transition duration-200 ease-in-out"
        >
          <Image
            className="invert"
            src="/assets/vercel.svg"
            alt="Vercel logo"
            width={15}
            height={12.99}
            priority
          />
          <span className="ml-[10px]">
            {t("header.deploy")}
          </span>
        </Link>
        <Link
          href={`/${i18n.language}/learn`}
          className="cursor-pointer border border-[#171717] bg-[#171717] text-[14px] text-[#ededed] font-medium px-3 py-[5px] rounded-lg hover:bg-[#666666] hover:border-[#666666] transition duration-200 ease-in-out"
        >
          {t("header.learn")}
        </Link>
      </div>
    </>
  );
}
