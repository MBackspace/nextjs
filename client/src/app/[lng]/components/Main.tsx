"use client"

import { useEffect, useState } from "react";

export default function Main(): React.ReactNode {
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [isShortScreen, setIsShortScreen] = useState<boolean>(false);

  useEffect((): () => void => {
    const handleResize = (): void => {
      setIsShortScreen(window.innerWidth <= 1024);
    };
    handleResize();
    setHydrated(true);
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hydrated) return null;

  return (
    <main className="flex flex-col gap-[32px] row-start-2 w-full items-center bg-[var(--theme-bg-base)]">
      <div className={`${isShortScreen ? "px-[25px]" : "px-[40px]"}`}>
      </div>
    </main>
  );
}
