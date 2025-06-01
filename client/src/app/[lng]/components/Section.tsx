"use client"

import { ScreenContext, useScreen } from "./ScreenProvider";

export default function Section(): React.ReactNode {
  const { isShortScreen }: ScreenContext = useScreen();

  return (
    <section className="flex flex-col row-start-3 w-full items-center bg-[var(--theme-bg-base)]">
      <div className={`w-full max-w-screen-xl text-center ${isShortScreen ? "space-y-7" : "space-y-3"}`}>
      </div>
    </section>
  );
}
