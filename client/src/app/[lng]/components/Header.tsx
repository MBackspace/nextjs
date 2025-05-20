"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useT } from "@/app/i18n/client";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import SearchModal from "./SearchModal";

export default function Header(): React.ReactNode {
  const { t, i18n } = useT("app", {});
  const [hydrated, setHydrated] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedResultIndex, setSelectedResultIndex] = useState<number>(0);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        handleSearchOpen();
      }
      if (e.key === "Escape" && isSearchOpen) {
        handleSearchClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchOpen]);

  const handleSearchOpen = (): void => {
    setSelectedResultIndex(0);
    setIsSearchOpen(true);
  };

  const handleSearchClose = (): void => {
    setIsClosing(true);
    setTimeout(() => {
      setIsSearchOpen(false);
      setIsClosing(false);
    }, 200);
  };

  if (!hydrated) return null;

  return (
    <>
      <header className={`fixed top-0 left-0 w-full h-[65px] z-50 flex items-center border-b border-[#ededed] ${!isMobile ? "px-14" : "px-6"} py-[15px] bg-[#ffffff] font-[family-name:var(--font-geist-sans)]`}>
        <div className="flex items-center space-x-3 mr-10">
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
        {!isMobile ? (
          <DesktopHeader
            t={t}
            i18n={i18n}
            handleSearchOpen={handleSearchOpen}
          />
        ) : (
          <MobileHeader
            t={t}
            i18n={i18n}
            handleSearchOpen={handleSearchOpen}
          />
        )}
      </header>

      {isSearchOpen && (
        <SearchModal
          t={t}
          i18n={i18n}
          isClosing={isClosing}
          handleSearchClose={handleSearchClose}
          selectedResultIndex={selectedResultIndex}
          setSelectedResultIndex={setSelectedResultIndex}
        />
      )}
    </>
  );
}
