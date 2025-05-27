"use client"

import { useState  } from "react";
import { usePathname } from "next/navigation";
import { languages } from "@/app/i18n/settings";
import { i18n } from "i18next";

type LanguageMode = typeof languages[number];

interface LanguageSwitcherProps {
  i18n: i18n;
}

export default function LanguageSwitcher({ i18n }: LanguageSwitcherProps): React.ReactNode {
  const pathname: string = usePathname();
  const [localLanguage, setLocalLanguage] = useState<LanguageMode>(i18n.language);
  const options: { value: LanguageMode; icon: React.ReactNode }[] = [
    {
      value: "en",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <text x="4" y="17" fontSize="14">EN</text>
        </svg>
      )
    },
    {
      value: "zh",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <text x="5" y="17" fontSize="14">中</text>
        </svg>
      )
    }
  ];

  const redirectToLanguagePath = (lang: LanguageMode): void => {
    const segments: string[] = pathname.split("/");
    const currentPrefix: LanguageMode = segments[1];
    if (currentPrefix === lang) return;
    if (languages.includes(currentPrefix)) {
      segments[1] = lang;
    } else {
      segments.splice(1, 0, lang);
    }
    const newPath: string = segments.join("/");
    if (newPath !== pathname) {
      window.location.href = newPath;
    }
  };

  const handleChangeLanguage = (mode: LanguageMode): void => {
    setLocalLanguage(mode);
    i18n.changeLanguage(mode, () => redirectToLanguagePath(mode));
  };

  return (
    <div className="flex items-center border border-[var(--theme-border-base)] bg-[var(--theme-bg-base)] rounded-full px-1 py-1">
      {options.map(({ value, icon }) => {
        return (
          <button
            key={value}
            onClick={() => handleChangeLanguage(value)}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition duration-200 ease-in-out ${localLanguage === value ? "bg-[var(--theme-border-base)] text-[var(--theme-fg-base)]" : "text-[var(--theme-text-muted)] hover:text-[var(--theme-fg-base)]"}`}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};
