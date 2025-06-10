"use client"

import { useEffect, useState } from "react";
import { ResponsiveContextValue, useResponsiveContext } from "./ResponsiveContext";

export default function Section(): React.ReactNode {
  const [hydrated, setHydrated] = useState<boolean>(false);
  const { isMobileScreen }: ResponsiveContextValue = useResponsiveContext();

  useEffect((): void => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <section className={`flex flex-col row-start-3 ${isMobileScreen ? "w-[100vw]" : "w-full"} py-[33px] items-center justify-center bg-[var(--theme-bg-base)]`}>
    </section>
  );
}
