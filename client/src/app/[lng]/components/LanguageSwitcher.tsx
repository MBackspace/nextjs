"use client"

import { useState } from "react";
import { usePathname } from "next/navigation";
import { i18n } from "i18next";

interface LanguageSwitcherProps {
  i18n: i18n;
}

interface Option {
  value: string;
  icon: React.ReactNode;
}

export default function LanguageSwitcher({ i18n }: LanguageSwitcherProps): React.ReactNode {
  const pathname: string = usePathname();
  const [animationClass, setAnimationClass] = useState<string>("");
  const [localLanguage, setLocalLanguage] = useState<string>(i18n.language);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const options: Option[] = [
    {
      value: "en",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <text x="4" y="17" fontSize="14">EN</text>
        </svg>
      )
    },
    {
      value: "zh-CN",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <text x="5" y="17" fontSize="14">简</text>
        </svg>
      )
    },
    {
      value: "zh-TW",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <text x="5" y="17" fontSize="14">繁</text>
        </svg>
      )
    },
    {
      value: "ja",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <text x="4" y="17" fontSize="14">JA</text>
        </svg>
      )
    },
    {
      value: "ko",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <text x="4" y="17" fontSize="14">KO</text>
        </svg>
      )
    },
    {
      value: "fr",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <text x="4" y="17" fontSize="14">FR</text>
        </svg>
      )
    },
    {
      value: "de",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <text x="4" y="17" fontSize="14">DE</text>
        </svg>
      )
    },
    {
      value: "es",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <text x="4" y="17" fontSize="14">ES</text>
        </svg>
      )
    }
  ];

  const redirectToLanguagePath = (lang: string): void => {
    const segments: string[] = pathname.split("/");
    segments[1] = lang;
    const newPath: string = segments.join("/");
    if (newPath !== pathname) {
      window.location.href = newPath;
    }
  };

  const handleChangeLanguage = (mode: string): void => {
    setLocalLanguage(mode);
    setCollapsed(false);
    i18n.changeLanguage(mode, () => redirectToLanguagePath(mode));
  };

  const toggle = (): void => {
    if (collapsed) {
      setAnimationClass("language-switcher-translate-out");
      setTimeout(() => {
        setCollapsed(!collapsed);
      }, 200);
    } else {
      setAnimationClass("language-switcher-translate-in");
      setCollapsed(!collapsed);
    }
  };

  return (
    <>
      <div className="relative h-10 w-[305px]">
        <div className="absolute right-0 flex items-center border border-[var(--theme-border-base)] bg-[var(--theme-bg-base)] rounded-full px-1 py-1">
          <div className={`flex items-center transition duration-200 ease-in-out ${animationClass}`}>
            {collapsed && options.map(({ value, icon }) => {
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
          {collapsed && (
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17" viewBox="0 0 11 17" fill="none" stroke="var(--theme-text-muted)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="1" width="1" height="15" />
            </svg>
          )}
          <button
            onClick={toggle}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition duration-200 ease-in-out ${collapsed ? "bg-[var(--theme-border-base)] text-[var(--theme-fg-base)]" : "text-[var(--theme-text-muted)] hover:text-[var(--theme-fg-base)]"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>
        </div>
      </div>

      <style>
        {`
          .language-switcher-translate-out {
            animation: language-switcher-translate-out 0.2s ease forwards;
          }

          .language-switcher-translate-in {
            animation: language-switcher-translate-in 0.2s ease forwards;
          }

          @keyframes language-switcher-translate-out {
            from {
              transform: translateX(0%);
              opacity: 1;
            }
            to {
              transform: translateX(100%);
              opacity: 0;
            }
          }

          @keyframes language-switcher-translate-in {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0%);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};
