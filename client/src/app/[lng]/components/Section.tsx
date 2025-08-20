"use client";

import { useEffect, useState } from "react";
// import { i18n, TFunction } from "i18next";
// import { useT } from "@/app/i18n/client";
import { ResponsiveContextValue, useResponsiveContext } from "./ResponsiveContext";

export default function Section(): React.ReactNode {
  // const { t, i18n }: { t: TFunction, i18n: i18n } = useT("app", {});
  const [hydrated, setHydrated] = useState<boolean>(false);
  const { isMobileScreen }: ResponsiveContextValue = useResponsiveContext();

  useEffect((): void => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <section className={`flex flex-col ${isMobileScreen ? "w-[100vw]" : "w-full"} py-[33px] items-center justify-center bg-[var(--theme-bg-base)]`}>
      <div className="w-full max-w-screen-3xl mx-auto space-y-3">
      </div>
    </section>
  );
}
