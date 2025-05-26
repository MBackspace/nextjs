"use client"

import { useEffect, useState } from "react";
import { useT } from "@/app/i18n/client";
import { COOKIE_KEYS, getCookie } from "@/app/lib/cookies";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher, { ThemeMode } from "./ThemeSwitcher";

export default function Footer(): React.ReactNode {
  const { i18n } = useT("", {});
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeMode>("");

  useEffect(() => {
    const localTheme = (getCookie(COOKIE_KEYS.THEME) || "") as ThemeMode
    setTheme(localTheme);
    document.documentElement.className = localTheme;
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <LanguageSwitcher i18n={i18n} />
      <ThemeSwitcher theme={theme} />
    </footer>
  );
}
