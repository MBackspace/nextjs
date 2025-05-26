"use client"

import { useState, useTransition  } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { languages } from "@/app/i18n/settings";
import { useT } from "@/app/i18n/client";

type LanguageMode = typeof languages[number];

export default function LanguageSwitcher(): React.ReactNode {
  const [isPending, startTransition] = useTransition();
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const { i18n } = useT("", {});
  const [language, setLanguage] = useState<LanguageMode>(i18n.language);

  const redirectToLanguagePath = (lang: LanguageMode): void => {
    const segments: string[] = pathname.split("/");
    const currentPrefix: string = segments[1];
    if (currentPrefix === lang) return;
    if (languages.includes(currentPrefix as LanguageMode)) {
      segments[1] = lang;
    } else {
      segments.splice(1, 0, lang);
    }
    const newPath: string = segments.join("/");
    if (newPath !== pathname) {
      startTransition(() => router.replace(newPath));
    }
  };

  const handleChangeLanguage = (mode: LanguageMode): void => {
    setLanguage(mode);
    i18n.changeLanguage(mode, () => redirectToLanguagePath(mode));
  };

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

  return (
    <div className="flex items-center border border-[var(--theme-border-base)] bg-[var(--theme-bg-base)] rounded-full px-1 py-1">
      {options.map(({ value, icon }) => {
        return (
          <button
            key={value}
            disabled={isPending}
            onClick={() => handleChangeLanguage(value)}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition duration-200 ease-in-out ${language === value ? "bg-[var(--theme-border-base)] text-[var(--theme-fg-base)]" : "text-[var(--theme-text-muted)] hover:text-[var(--theme-fg-base)]"}`}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};
