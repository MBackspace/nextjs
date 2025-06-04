"use client"

import { AppContext, useAppContext } from "./ContextProvider";
import Main from "./Main";
import Section from "./Section";
import Footer from "./Footer";

export default function Page(): React.ReactNode {
  const { isMobileScreen }: AppContext = useAppContext();
  return (
    <div className={`grid ${isMobileScreen ? "grid-rows-[0fr_1fr_2fr_0.5fr]" : "grid-rows-[0.2fr_1fr_2fr_0.5fr]"} bg-[var(--theme-bg-base)] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}>
      <Main />
      <Section />
      <Footer />
    </div>
  );
}
