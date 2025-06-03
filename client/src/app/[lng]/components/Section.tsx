"use client"

import { useEffect, useState } from "react";
import { AppContext, useAppContext } from "./ContextProvider";

export default function Section(): React.ReactNode {
  const [hydrated, setHydrated] = useState<boolean>(false);
  const { isShortScreen }: AppContext = useAppContext();

  useEffect((): void => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <section className="flex flex-col row-start-3 w-full items-center bg-[var(--theme-bg-base)]">
      <div className={`w-full max-w-screen-xl text-center ${isShortScreen ? "space-y-7" : "space-y-3"}`}>
      </div>
    </section>
  );
}
