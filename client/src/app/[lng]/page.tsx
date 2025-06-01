import Main from "./components/Main";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div className="grid grid-rows-[0.2fr_1fr_2fr_0.5fr] bg-[var(--theme-bg-base)] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Main />
      <Section />
      <Footer />
    </div>
  );
}
