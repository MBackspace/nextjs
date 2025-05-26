import ThemeSwitcher from "./components/ThemeSwitcher";

export default async function Home(): Promise<React.ReactNode> {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-[var(--theme-bg-base)] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <ThemeSwitcher />
      </footer>
    </div>
  );
}
