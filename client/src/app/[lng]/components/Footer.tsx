"use client"

import { useEffect, useState } from "react";
import { useT } from "@/app/i18n/client";
import { COOKIE_KEYS, FALLBACK_THEME } from "@/app/lib/constants";
import { getCookie } from "@/app/lib/cookies";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Footer(): React.ReactNode {
  const { i18n } = useT("", {});
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(FALLBACK_THEME);

  useEffect(() => {
    setTheme(getCookie(COOKIE_KEYS.THEME) || FALLBACK_THEME);
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
