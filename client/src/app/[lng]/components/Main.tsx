"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { useT } from "@/app/i18n/client";
import { AppContext, useAppContext } from "./ContextProvider";

export default function Main(): React.ReactNode {
  const { t, i18n } = useT("app", {});
  const [hydrated, setHydrated] = useState<boolean>(false);
  const { isShortScreen, isMobileScreen }: AppContext = useAppContext();
  const [hovered, setHovered] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const command: string = "npx create-next-app@latest";

  useEffect((): void => {
    setHydrated(true);
  }, []);

  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
    setTimeout((): void => {
      setCopied(false);
    }, 200);
  };

  const handleCopy = (): void => {
    navigator.clipboard.writeText(command).then((): void => {
      setCopied(true);
    });
  };

  if (!hydrated) return null;

  return (
    <>
      <main className="relative flex flex-col row-start-2 w-full items-center pt-[60px] pb-[130px] bg-[var(--theme-bg-base)]">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl z-0">
          <div
            className={`absolute top-[14%] ${isShortScreen ? "left-[2%] w-[96%] main-width-96" : "left-[-2%] w-[104%] main-width-104"} h-px border-t border-dashed border-[var(--theme-text-subtle-dark)]`}
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)"
            }}
          />
          <div
            className={`absolute top-[34%] ${isShortScreen ? "left-[2%] w-[96%] main-width-96" : "left-[-2%] w-[104%] main-width-104"} h-px border-t border-dashed border-[var(--theme-text-subtle-dark)]`}
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)"
            }}
          />
          <div
            className={`absolute bottom-[41%] ${isShortScreen ? "left-[2%] w-[96%] main-width-96" : "left-[-2%] w-[104%] main-width-104"} h-px border-t border-dashed border-[var(--theme-text-subtle-dark)]`}
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)"
            }}
          />
          <div
            className={`absolute bottom-[13.4%] ${isShortScreen ? "left-[2%] w-[96%] main-width-96" : "left-[-2%] w-[104%] main-width-104"} h-px border-t border-dashed border-[var(--theme-text-subtle-dark)]`}
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)"
            }}
          />
          <div className={`absolute top-[5%] ${isShortScreen ? "left-[7.5%]" : "left-[2.5%]"} h-[94%] w-px border-l border-[1.5px] border-dashed border-[var(--theme-text-subtle-dark)] main-height-94`} />
          <div
            className={`absolute top-[5%] ${isShortScreen ? "left-[32.2%]" : "left-[36.8%]"} h-[9%] w-px border-l border-dashed border-[var(--theme-text-subtle-dark)] main-height-9`}
            style={{
              WebkitMaskImage: "linear-gradient(to top, var(--theme-text-subtle-dark) 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)",
              maskImage: "linear-gradient(to top, var(--theme-text-subtle-dark) 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)"
            }}
          />
          <div
            className={`absolute bottom-[1%] ${isShortScreen ? "left-[31%]" : "left-[36%]"} h-[40%] w-px border-l border-[1.5px] border-dashed border-[var(--theme-text-subtle-dark)] main-height-40`}
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, var(--theme-text-subtle-dark) 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, var(--theme-text-subtle-dark) 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)"
            }}
          />
          <div
            className={`absolute top-[5%] ${isShortScreen ? "right-[32.2%]" : "right-[36.8%]"} h-[9%] w-px border-l border-dashed border-[var(--theme-text-subtle-dark)] main-height-9`}
            style={{
              WebkitMaskImage: "linear-gradient(to top, var(--theme-text-subtle-dark) 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)",
              maskImage: "linear-gradient(to top, var(--theme-text-subtle-dark) 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)"
            }}
          />
          <div
            className={`absolute bottom-[1%] ${isShortScreen ? "right-[31%]" : "right-[36%]"} h-[40%] w-px border-l border-[1.5px] border-dashed border-[var(--theme-text-subtle-dark)] main-height-40`}
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, var(--theme-text-subtle-dark) 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, var(--theme-text-subtle-dark) 0%, var(--theme-text-subtle-dark) 5%, var(--theme-text-subtle-dark) 95%, transparent 100%)"
            }}
          />
          <div className={`absolute top-[5%] ${isShortScreen ? "right-[7.5%]" : "right-[2.5%]"} h-[94%] w-px border-l border-[1.5px] border-dashed border-[var(--theme-text-subtle-dark)] main-height-94`} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            stroke="var(--theme-text-subtle-dark)"
            strokeDasharray="2 2"
            className={`absolute top-[calc(14%-37.5px)] ${isShortScreen ? "left-[calc(7.5%-37.5px)]" : "left-[calc(2.5%-37.5px)]"} main-stroke-dashoffset-in`}
            transform={`${isMobileScreen ? "scale(0.33)" : "scale(1)"}`}
          >
            <path d="M74 37.5C74 30.281 71.8593 23.2241 67.8486 17.2217C63.838 11.2193 58.1375 6.541 51.4679 3.7784C44.7984 1.0158 37.4595 0.292977 30.3792 1.70134C23.2989 3.1097 16.7952 6.58599 11.6906 11.6906C6.58599 16.7952 3.1097 23.2989 1.70134 30.3792C0.292977 37.4595 1.0158 44.7984 3.7784 51.4679C6.541 58.1375 11.2193 63.838 17.2217 67.8486C23.2241 71.8593 30.281 74 37.5 74" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(37.5 37.5) rotate(90) scale(36.5)" gradientUnits="userSpaceOnUse" id="paint0_angular_25_2122" r="1">
                <stop />
                <stop offset="0.5" stopOpacity="0.34" />
                <stop offset="1" />
              </radialGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            stroke="var(--theme-text-subtle-dark)"
            strokeDasharray="2 2"
            className={`absolute bottom-[calc(13.4%-37.5px)] ${isShortScreen ? "right-[calc(31%-37.5px)]" : "right-[calc(36%-37.5px)]"} rotate-180 main-stroke-dashoffset-in`}
            transform={`${isMobileScreen ? "scale(0.33)" : "scale(1)"}`}
          >
            <path d="M74 37.5C74 30.281 71.8593 23.2241 67.8486 17.2217C63.838 11.2193 58.1375 6.541 51.4679 3.7784C44.7984 1.0158 37.4595 0.292977 30.3792 1.70134C23.2989 3.1097 16.7952 6.58599 11.6906 11.6906C6.58599 16.7952 3.1097 23.2989 1.70134 30.3792C0.292977 37.4595 1.0158 44.7984 3.7784 51.4679C6.541 58.1375 11.2193 63.838 17.2217 67.8486C23.2241 71.8593 30.281 74 37.5 74" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(37.5 37.5) rotate(90) scale(36.5)" gradientUnits="userSpaceOnUse" id="paint0_angular_25_2122" r="1">
                <stop />
                <stop offset="0.5" stopOpacity="0.34" />
                <stop offset="1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className={`w-full max-w-screen-xl relative z-10 text-center ${isShortScreen ? "space-y-7 pt-5" : "space-y-3"}`}>
          <h1 className={`font-extrabold bg-gradient-to-b from-[var(--theme-fg-light)]/95 to-[var(--theme-fg-dark)] bg-clip-text text-transparent leading-[2.4] ${isShortScreen ? "text-[50px] tracking-[-0.06em]" : "text-7xl tracking-tight"}`}>
            {t("main.title")}
          </h1>
          <p className={`text-[var(--theme-text-muted)] leading-[1.8] tracking-tight max-w-3xl mx-auto ${isShortScreen ? "text-[20px]" : "text-xl"}`}>
            {t("main.descriptionStart")}{" "}
            <span className="text-[var(--theme-fg-base)] font-medium">{t("main.descriptionHighlight")}</span>{" "}
            {t("main.descriptionEnd")}
          </p>
          <div className="flex justify-center gap-4 mt-20 mb-4">
            <Link
              href={`/${i18n.language}/started`}
              className="cursor-pointer border border-[var(--theme-fg-base)] bg-[var(--theme-fg-base)] text-base text-[var(--theme-border-base)] font-medium px-5 py-3 rounded-lg hover:bg-[var(--theme-text-muted)] hover:border-[var(--theme-text-muted)] transition duration-200 ease-in-out"
            >
              {t("main.started")}
            </Link>
            <Link
              href={`/${i18n.language}/learn`}
              className="cursor-pointer flex items-center border border-[var(--theme-border-base)] text-base text-[var(--theme-fg-base)] font-medium px-5 py-3 rounded-lg hover:bg-[var(--theme-bg-muted)] transition duration-200 ease-in-out"
            >
              {t("main.learn")}
            </Link>
          </div>
          <div className="flex justify-center gap-2">
            <div
              className="relative cursor-copy text-[var(--theme-text-muted)]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleCopy}
            >
              <p className={`font-[family-name:var(--font-geist-mono)] ${isShortScreen ? "text-xs tracking-wide" : "text-sm tracking-tighter"}`}>
                <span className="text-[8px]">▲</span>{" "}
                <span>~{" "}{command}</span>
                <span className={`absolute right-[-28px] top-1/2 -translate-y-1/2 transition duration-200 ease-in-out ${hovered ? "opacity-100" : "opacity-0"}`}>
                  {copied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" strokeLinejoin="round">
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" strokeLinejoin="round">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z" />
                    </svg>
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>

      <style>
        {`
          .main-width-96 {
            animation: main-width-96 0.96s ease forwards;
          }

          .main-width-104 {
            animation: main-width-104 1.04s ease forwards;
          }

          .main-height-94 {
            animation: main-height-94 0.94s ease forwards;
          }

          .main-height-9 {
            animation: main-height-9 0.9s ease forwards;
          }

          .main-height-40 {
            animation: main-height-40 0.4s ease forwards;
          }

          .main-stroke-dashoffset-in {
            animation: main-stroke-dashoffset-in 0.5s ease forwards;
          }

          @keyframes main-width-96 {
            0% {
              width: 0;
              opacity: 0;
            }
            95% {
              -webkit-mask-image: linear-gradient(to right, var(--theme-text-subtle-dark) 0%, var(--theme-fg-dark) 5%, var(--theme-fg-dark) 95%, transparent 100%);
              mask-image: linear-gradient(to right, var(--theme-text-subtle-dark) 0%, var(--theme-fg-dark) 5%, var(--theme-fg-dark) 95%, transparent 100%);
            }
            100% {
              width: 96%;
              opacity: 1;
            }
          }

          @keyframes main-width-104 {
            0% {
              width: 0;
              opacity: 0;
            }
            95% {
              -webkit-mask-image: linear-gradient(to right, var(--theme-text-subtle-dark) 0%, var(--theme-fg-dark) 5%, var(--theme-fg-dark) 95%, transparent 100%);
              mask-image: linear-gradient(to right, var(--theme-text-subtle-dark) 0%, var(--theme-fg-dark) 5%, var(--theme-fg-dark) 95%, transparent 100%);
            }
            100% {
              width: 104%;
              opacity: 1;
            }
          }

          @keyframes main-height-94 {
            0% {
              height: 0;
              opacity: 0;
            }
            95% {
              -webkit-mask-image: linear-gradient(to bottom, var(--theme-text-subtle-dark) 0%, var(--theme-fg-dark) 5%, var(--theme-fg-dark) 95%, transparent 100%);
              mask-image: linear-gradient(to bottom, var(--theme-text-subtle-dark) 0%, var(--theme-fg-dark) 5%, var(--theme-fg-dark) 95%, transparent 100%);
            }
            100% {
              height: 94%;
              opacity: 1;
            }
          }

          @keyframes main-height-9 {
            0% {
              height: 0;
              opacity: 0;
            }
            95% {
              -webkit-mask-image: linear-gradient(to bottom, var(--theme-text-subtle-dark) 0%, var(--theme-fg-dark) 5%, var(--theme-fg-dark) 95%, transparent 100%);
              mask-image: linear-gradient(to bottom, var(--theme-text-subtle-dark) 0%, var(--theme-fg-dark) 5%, var(--theme-fg-dark) 95%, transparent 100%);
            }
            100% {
              height: 9%;
              opacity: 1;
            }
          }

          @keyframes main-height-40 {
            0% {
              height: 0;
              opacity: 0;
            }
            95% {
              -webkit-mask-image: linear-gradient(to bottom, var(--theme-text-subtle-dark) 0%, var(--theme-fg-dark) 5%, var(--theme-fg-dark) 95%, transparent 100%);
              mask-image: linear-gradient(to bottom, var(--theme-text-subtle-dark) 0%, var(--theme-fg-dark) 5%, var(--theme-fg-dark) 95%, transparent 100%);
            }
            100% {
              height: 40%;
              opacity: 1;
            }
          }

          @keyframes main-stroke-dashoffset-in {
            from {
              stroke-dashoffset: 500;
              opacity: 0;
            }
            to {
              stroke-dashoffset: 0;
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}
