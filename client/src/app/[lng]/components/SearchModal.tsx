"use client"

import { useState } from "react";
import { i18n, TFunction } from "i18next";
import Link from "next/link";
import Image from "next/image";

interface SearchModalProps {
  t: TFunction<string | string[], undefined>;
  i18n: i18n;
  isClosing: boolean;
  handleSearchClose: () => void;
  selectedResultIndex: number;
  setSelectedResultIndex: (selectedResultIndex: number) => void;
}

interface SearchResult {
  href: string;
  label: string;
}

export default function SearchModal({ t, i18n, isClosing, handleSearchClose, selectedResultIndex, setSelectedResultIndex }: SearchModalProps): React.ReactNode {
  const [searchActiveTab, setSearchActiveTab] = useState<string>("app");
  const SearchResults: SearchResult[] = [
    { href: `/${i18n.language}/docs`, label: t("header.search.introduction") },
    { href: `/${i18n.language}/docs/getting-started`, label: t("header.search.gettingStarted") },
    { href: `/${i18n.language}/docs/app-Router`, label: t("header.search.appRouter") },
    { href: `/${i18n.language}/docs/architecture`, label: t("header.search.architecture") },
    { href: `/${i18n.language}/docs/pages-router`, label: t("header.search.pagesRouter") },
    { href: `/${i18n.language}/docs/api-reference`, label: t("header.search.apiReference") },
    { href: `/${i18n.language}/docs/accessibility`, label: t("header.search.accessibility") }
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-gradient-to-t from-[#ffffff]/100 to-transparen flex items-start pt-[110px] justify-center z-50 font-[family-name:var(--font-geist-sans)]"
        onClick={() => handleSearchClose()}
      >
        <div
          className={`bg-[#ffffff] w-full max-w-[640px] min-h-[380px] border border-[#ededed] shadow rounded-[12px] ${isClosing ? "animate-fade-out" : "animate-fade-in"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-3 border-b border-[#ededed]">
            <div className="flex items-center gap-2 mb-3">
              <button
                className={`cursor-pointer transition duration-200 ease-in-out text-xs font-medium border px-1 py-[1.2px] rounded ${searchActiveTab === "app" ? "border-[#cce6ff] text-[#0070f1] bg-[#ebf5ff]" : "border-[#ededed] text-[#666666]"}`}
                onClick={() => setSearchActiveTab("app")}
              >
                {t("header.search.activeTabs.app")}
              </button>
              <button
                className={`cursor-pointer transition duration-200 ease-in-out text-xs font-medium border px-1 py-[1.2px] rounded ${searchActiveTab === "pages" ? "border-[#eddcf9] text-[#995fcc] bg-[#f9f1fe]" : "border-[#ededed] text-[#666666] bg-[#ffffff]"}`}
                onClick={() => setSearchActiveTab("pages")}
              >
                {t("header.search.activeTabs.pages")}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder={t("header.search.input")}
                className="w-full text-[18px] outline-none placeholder-[#666666] pl-1"
              />
              <span
                className="cursor-pointer transition duration-200 ease-in-out border border-[#dfdfdf] bg-[#ffffff] text-[12px] text-[#171717] px-[4px] py-[1px] rounded hover:bg-[#f2f2f2]"
                onClick={() => handleSearchClose()}
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

      <style>
        {`
          .animate-fade-out {
            animation: scale-out 0.2s ease forwards;
          }

          @keyframes scale-out {
            from {
              transform: scale(1);
              opacity: 1;
            }
            to {
              transform: scale(0.8);
              opacity: 0;
            }
          }

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
