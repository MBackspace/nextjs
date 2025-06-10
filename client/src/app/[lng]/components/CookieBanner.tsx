"use client";

import { useEffect, useState } from "react";
import { useT } from "@/app/i18n/client";
import { ResponsiveContextValue, useResponsiveContext } from "./ResponsiveContext";
import { COOKIE_KEYS } from "@/app/lib/constants";
import { getCookie } from "@/app/lib/cookies";
import ConsentModal, { handleDeny, handleAcceptAll } from "./ConsentModal";

export default function CookieBanner(): React.ReactNode {
  const { t } = useT("app", {});
  const { isMobileScreen }: ResponsiveContextValue = useResponsiveContext();
  const [visible, setVisible] = useState<boolean>(false);
  const [isConsentOpen, setIsConsentOpen] = useState<boolean>(false);

  useEffect((): void => {
    setVisible(!getCookie(COOKIE_KEYS.CONSENT));
  }, []);

  const handleConsentOpen = (): void => {
    setVisible(false);
    setIsConsentOpen(true);
  };

  const handleConsentClose = (): void => {
    setVisible(false);
    setIsConsentOpen(false);
  };

  if (!visible && !isConsentOpen) return null;

  return (
    <>
      <ConsentModal
        isConsentOpen={isConsentOpen}
        handleConsentClose={handleConsentClose}
      />

      {visible && (
        <>
          <div className="fixed bottom-4 left-4 right-4 w-fit p-4 bg-[var(--theme-bg-dark)] shadow border border-[var(--theme-border-base)] rounded-2xl z-60 cookie-banner-translate-in font-[family-name:var(--font-geist-sans)]">
            <p className={`${isMobileScreen ? "w-[290px]" : "w-[380px]"} text-[var(--theme-fg-base)] text-[14px] mb-3 mr-2`}>
              {t("cookieBanner.message")}
            </p>
            <div className="flex justify-between items-center">
              <div className={`flex gap-[12px] ${isMobileScreen ? "pr-[12px]" : "pr-[24px]"}`}>
                <button
                  className={`${isMobileScreen ? "max-w-[60px]" : ""} whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer border border-[var(--theme-border-base)] bg-[var(--theme-bg-base)] text-[var(--theme-fg-base)] font-medium px-3 py-[5px] rounded-full text-[14px] hover:bg-[var(--theme-bg-muted)] hover:border-[var(--theme-text-subtle)] transition duration-200 ease-in-out`}
                  onClick={(): void => {
                    handleDeny();
                    handleConsentClose();
                  }}>
                  {t("cookieBanner.deny")}
                </button>
                <button
                  className={`${isMobileScreen ? "max-w-[90px]" : ""} whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer border border-[var(--theme-border-base)] bg-[var(--theme-bg-base)] text-[var(--theme-fg-base)] font-medium px-3 py-[5px] rounded-full text-[14px] hover:bg-[var(--theme-bg-muted)] hover:border-[var(--theme-text-subtle)] transition duration-200 ease-in-out`}
                  onClick={(): void => {
                    handleAcceptAll();
                    handleConsentClose();
                  }}>
                  {t("cookieBanner.acceptAll")}
                </button>
              </div>
              <button
                className={`${isMobileScreen ? "max-w-[140px]" : ""} whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer border border-[var(--theme-fg-base)] bg-[var(--theme-fg-base)] text-[var(--theme-border-base)] font-medium px-3 py-[5px] rounded-full text-[14px] hover:bg-[var(--theme-text-muted)] hover:border-[var(--theme-text-muted)] transition duration-200 ease-in-out`}
                onClick={handleConsentOpen}
              >
                {t("cookieBanner.settings")}
              </button>
            </div>
          </div>

          <style>
            {`
              .cookie-banner-translate-in {
                animation: cookie-banner-translate-in 0.6s ease-out forwards;
              }

              @keyframes cookie-banner-translate-in {
                from {
                  transform: translateY(100%);
                  opacity: 0;
                }
                to {
                  transform: translateY(0);
                  opacity: 1;
                }
              }
            `}
          </style>
        </>
      )}
    </>
  );
}
