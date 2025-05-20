"use client"

import { useEffect, useState } from "react";
import { useT } from "@/app/i18n/client";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import SearchModal from "./SearchModal";

export default function Header(): React.ReactNode {
  const { t, i18n } = useT("app", {});
  const [hydrated, setHydrated] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
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

  const toggleSearch = (): void => {
    setSelectedResultIndex(0);
    setIsSearchOpen(!isSearchOpen);
  };

  if (!hydrated) return null;

  return (
    <>
      <header className={`fixed top-0 left-0 w-full h-[65px] z-50 flex items-center border-b border-[#ededed] ${!isMobile ? "px-14" : "px-6"} py-[15px] bg-[#ffffff] font-[family-name:var(--font-geist-sans)]`}>
        {!isMobile ? (
          <DesktopHeader
            t={t}
            i18n={i18n}
            toggleSearch={toggleSearch}
          />
        ) : (
          <MobileHeader
            t={t}
            i18n={i18n}
            toggleSearch={toggleSearch}
          />
        )}
      </header>

      {isSearchOpen && (
        <SearchModal
          t={t}
          i18n={i18n}
          setIsSearchOpen={setIsSearchOpen}
          selectedResultIndex={selectedResultIndex}
          setSelectedResultIndex={setSelectedResultIndex}
        />
      )}
    </>
  );
}
