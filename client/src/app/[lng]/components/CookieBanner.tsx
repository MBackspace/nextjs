"use client";

import { useEffect, useState } from "react";
import { useT } from "@/app/i18n/client";
import { COOKIE_KEYS, getCookie, setCookie } from "@/app/lib/cookies";
import ConsentModal from "./ConsentModal";

export interface Preferences {
  essential: boolean;
  marketing: boolean;
  analytics: boolean;
  functional: boolean;
}

export default function CookieBanner(): React.ReactNode {
  const { t } = useT("app", {});
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const preferences: Preferences = {
    essential: true,
    marketing: false,
    analytics: false,
    functional: false
  };

  useEffect(() => {
    const savedPreferences = getCookie(COOKIE_KEYS.CONSENT);
    if (!savedPreferences) {
      setVisible(true);
    }
  }, []);

  const savePreferences = (newPreferences: Preferences): void => {
    setCookie(COOKIE_KEYS.CONSENT, JSON.stringify(newPreferences));
    setVisible(false);
  };

  const handleDeny = (): void => {
    const deniedPreferences: Preferences = {
      essential: true,
      marketing: false,
      analytics: false,
      functional: false
    };
    savePreferences(deniedPreferences);
  };

  const handleAcceptAll = (): void => {
    const acceptedPreferences: Preferences = {
      essential: true,
      marketing: true,
      analytics: true,
      functional: true
    };
    savePreferences(acceptedPreferences);
  };

  const handleOpenModal = (): void => {
    setShowModal(true);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  const handleSave = (newPreferences: Preferences): void => {
    savePreferences(newPreferences);
    handleModalClose();
  };

  if (!visible && !showModal) return null;

  return (
    <>
      {visible && (
        <>
          <div className="fixed bottom-4 left-4 right-4 md:right-auto md:w-[420px] p-4 bg-[var(--theme-bg-dark)] shadow border border-[var(--theme-border-base)] rounded-2xl z-60 animate-slide-in font-[family-name:var(--font-geist-sans)]">
            <p className="text-[var(--theme-fg-base)] text-[14px] mb-3 mr-2">
              {t("cookieBanner.message")}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-[12px]">
                <button
                  className="cursor-pointer border border-[var(--theme-border-base)] text-[var(--theme-fg-base)] font-medium px-3 py-[5px] rounded-full text-[14px] hover:bg-[var(--theme-bg-muted)] transition duration-200 ease-in-out"
                  onClick={() => handleDeny()}>
                  {t("cookieBanner.deny")}
                </button>
                <button
                  className="cursor-pointer border border-[var(--theme-border-base)] text-[var(--theme-fg-base)] font-medium px-3 py-[5px] rounded-full text-[14px] hover:bg-[var(--theme-bg-muted)] transition duration-200 ease-in-out"
                  onClick={() => handleAcceptAll()}>
                  {t("cookieBanner.acceptAll")}
                </button>
              </div>
              <button
                className="cursor-pointer border border-[var(--theme-fg-base)] bg-[var(--theme-fg-base)] text-[var(--theme-border-base)] font-medium px-3 py-[5px] rounded-full text-[14px] hover:bg-[var(--theme-text-muted)] hover:border-[var(--theme-text-muted)] transition duration-200 ease-in-out"
                onClick={() => {
                  setVisible(false);
                  handleOpenModal();
                }}
              >
                {t("cookieBanner.settings")}
              </button>
            </div>
          </div>

          <style>
            {`
              .animate-slide-in {
                animation: slide-in 0.8s ease-out forwards;
              }

              @keyframes slide-in {
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

      {showModal && (
        <ConsentModal
          t={t}
          preferences={preferences}
          handleDeny={handleDeny}
          handleAcceptAll={handleAcceptAll}
          handleSave={handleSave}
          handleModalClose={handleModalClose}
        />
      )}
    </>
  );
}
