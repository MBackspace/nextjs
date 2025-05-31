import Main from "./components/Main";
import Footer from "./components/Footer";

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-[var(--theme-bg-base)] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Main />
      <Footer />
    </div>
  );
}
