"use client"

import { useEffect, useState } from "react";
import { AppContext, useAppContext } from "./ContextProvider";

export default function Section(): React.ReactNode {
  const [hydrated, setHydrated] = useState<boolean>(false);
  const { isMobileScreen }: AppContext = useAppContext();

  useEffect((): void => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <section className={`flex flex-col row-start-3 ${isMobileScreen ? "w-100" : "w-full"} items-center bg-[var(--theme-bg-base)]`}>
    </section>
  );
}
