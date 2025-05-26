"use client"

import { useEffect, useState } from "react";
import { getCookie, setCookie } from "@/app/lib/cookies";

const COOKIE_KEY: string = "zeit-theme";

type ThemeMode = "light" | "dark" | "";

export default function ThemeSwitcher(): React.ReactNode {
  const [theme, setTheme] = useState<ThemeMode>("");

  useEffect(() => {
    const savedTheme: ThemeMode = (getCookie(COOKIE_KEY) as ThemeMode) || "";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const handleChangeTheme = (mode: ThemeMode): void => {
    setTheme(mode);
    setCookie(COOKIE_KEY, mode);
    document.documentElement.className = mode;
  };

  const options: { value: ThemeMode; icon: React.ReactNode }[] = [
    {
      value: "light",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )
    },
    {
      value: "",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="19.5" height="12" rx="2" ry="2" />
          <line x1="12" y1="17" x2="12" y2="22" />
          <line x1="9" y1="23" x2="15" y2="23" />
        </svg>
      )
    },
    {
      value: "dark",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 13A9 9 0 1 1 11 3 7 7 0 0 0 21 13z" />
          <line x1="18" y1="2" x2="18" y2="6" />
          <line x1="16" y1="4" x2="20" y2="4" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex items-center border border-[var(--theme-border-base)] bg-[var(--theme-bg-base)] rounded-full px-1 py-1">
      {options.map(({ value, icon }) => {
        return (
          <button
            key={value}
            onClick={() => handleChangeTheme(value)}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition duration-200 ease-in-out ${theme === value ? "bg-[var(--theme-border-base)] text-[var(--theme-fg-base)]" : "text-[var(--theme-text-muted)] hover:text-[var(--theme-fg-base)]"}`}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};
