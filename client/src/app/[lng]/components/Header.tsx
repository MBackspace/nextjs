"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useT } from "@/app/i18n/client";
import LongHeader from "./LongHeader";
import ShortHeader from "./ShortHeader";
import SearchModal from "./SearchModal";

export default function Header(): React.ReactNode {
  const { t, i18n } = useT("app", {});
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [isShortScreen, setIsShortScreen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSearchClosing, setIsSearchClosing] = useState<boolean>(false);

  useEffect((): () => void => {
    const handleResize = (): void => {
      setIsShortScreen(window.innerWidth <= 1024);
    };
    handleResize();
    setHydrated(true);
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect((): () => void => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        handleSearchOpen();
      }
      if (e.key === "Escape") {
        handleSearchClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return (): void => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSearchOpen = (): void => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = (): void => {
    setIsSearchClosing(true);
    setTimeout((): void => {
      setIsSearchOpen(false);
      setIsSearchClosing(false);
    }, 200);
  };

  if (!hydrated) return null;

  return (
    <>
      <header className={`fixed top-0 left-0 w-full h-[65px] z-60 flex items-center bg-[var(--theme-bg-base)]/80 backdrop-blur-[5px] border-b border-[var(--theme-border-base)] ${isShortScreen ? "px-6" : "px-14"} py-[15px] bg-[var(--theme-bg-base)] font-[family-name:var(--font-geist-sans)]`}>
        <div className="flex items-center space-x-3 mr-10">
          <Link href="/">
            <Image
              style={{ filter: "var(--theme-image-filter-light)" }}
              src="/assets/vercel.svg"
              alt="Vercel logo"
              width={25.4}
              height={22}
              priority
            />
          </Link>
          <span className="text-[var(--theme-text-subtle)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="26" viewBox="0 0 12 26" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round">
              <line x1="0" y1="28" x2="14" y2="0" />
            </svg>
          </span>
          <Link href="/">
            <Image
              style={{ filter: "var(--theme-image-filter-dark)" }}
              src="/assets/next.svg"
              alt="Next.js logo"
              width={89.76}
              height={18}
              priority
            />
          </Link>
        </div>
        {isShortScreen ? (
          <ShortHeader
            t={t}
            i18n={i18n}
            handleSearchOpen={handleSearchOpen}
          />
        ) : (
          <LongHeader
            t={t}
            i18n={i18n}
            handleSearchOpen={handleSearchOpen}
          />
        )}
      </header>

      {isSearchOpen && (
        <SearchModal
          isSearchOpen={isSearchOpen}
          isSearchClosing={isSearchClosing}
          handleSearchClose={handleSearchClose}
        />
      )}
    </>
  );
}
