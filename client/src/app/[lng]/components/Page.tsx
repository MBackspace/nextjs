"use client"

import Header from "./Header";
import Main from "./Main";
import Section from "./Section";
import Footer from "./Footer";

export default function Page(): React.ReactNode {
  return (
    <div className="grid pt-[120px] bg-[var(--theme-bg-base)] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Main />
      <Section />
      <Footer />
    </div>
  );
}
