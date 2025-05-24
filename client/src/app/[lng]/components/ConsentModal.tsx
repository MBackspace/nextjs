"use client";

import { useState } from "react";
import Link from "next/link";
import { TFunction } from "i18next";
import { Preferences } from "./CookieBanner";


interface ConsentModalProps {
  t: TFunction<string | string[], undefined>;
  preferences: Preferences;
  handleDeny: () => void;
  handleAcceptAll: () => void;
  handleSave: (newPreferences: Preferences) => void;
  handleModalClose: () => void;
}

interface Category {
  id: keyof Preferences;
  name: string;
  description: string;
}

export default function ConsentModal({ t, preferences, handleDeny, handleAcceptAll, handleSave, handleModalClose }: ConsentModalProps): React.ReactNode {
  const [localPreferences, setLocalPreferences] = useState<Preferences>({ ...preferences });
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const [renderKey, setRenderKey] = useState(0);
  const categories: Category[] = [
    {
      id: "essential",
      name: t("consentModal.essential.name"),
      description: t("consentModal.essential.description")
    },
    {
      id: "marketing",
      name: t("consentModal.marketing.name"),
      description: t("consentModal.marketing.description")
    },
    {
      id: "analytics",
      name: t("consentModal.analytics.name"),
      description: t("consentModal.analytics.description")
    },
    {
      id: "functional",
      name: t("consentModal.functional.name"),
      description: t("consentModal.functional.description")
    }
  ];

  const onCategoryClick = (category: Category) => {
    if (expandedIds.includes(category.id)) {
      setExpandedIds(expandedIds.filter(id => id !== category.id));
    } else {
      setExpandedIds([...expandedIds, category.id]);
    }
    setRenderKey(renderKey < 10 ? renderKey + 1 : 0);
  };

  const toggle = (category: Category): void => {
    setLocalPreferences((prev) => ({
      ...prev,
      [category.id]: !prev[category.id]
    }));
  };

  return (
    <>
      <div className="fixed inset-0 bg-[#171717]/45 flex items-center justify-center z-60 font-[family-name:var(--font-geist-sans)]">
        <div className="bg-[#ffffff] w-full max-w-[600px] min-h-[500px] rounded-[12px] animate-slide-in">
          <div className="flex justify-between mb-5 pt-6 px-6">
            <h1 className="text-[22px] text-[#171717] font-bold">
              {t("consentModal.title")}
            </h1>
          </div>
          <p className="text-[16px] text-[#171717] mb-5 px-6">
            {t("consentModal.description")}
          </p>
          <div key={renderKey} className="rounded-lg border border-[#ededed] mb-[45px] m-6">
            {categories.map((category, index) => (
              <div key={category.id}>
                <div
                  className={`flex items-center justify-between px-4 py-[10px] cursor-pointer ${index !== categories.length - 1 ? "border-b border-[#ededed]" : ""}`}
                  onClick={() => onCategoryClick(category)}
                >
                  <span className="text-[14px] text-[#171717] font-medium">{category.name}</span>
                  <label onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={localPreferences[category.id]}
                      onChange={() => toggle(category)}
                      disabled={category.id === "essential"}
                    />
                    <div
                      className={`border w-[42px] h-[26.4px] rounded-full transition-all
                      ${category.id === "essential" ? "bg-[#ffffff] border-[#dfdfdf] cursor-not-allowed" : "bg-[#f2f2f2] border-[#dfdfdf] peer-checked:bg-[#0070f1] peer-checked:border-[#0070f1] cursor-pointer"}`}
                    >
                      <div
                        className={`w-[24.6px] h-[24.6px] rounded-full shadow transition-transform
                        ${category.id === "essential" ? "bg-[#ebebeb]" : "bg-[#ffffff]"} ${localPreferences[category.id] ? "translate-x-4" : "translate-x-0"}`}
                      />
                    </div>
                  </label>
                </div>
                {expandedIds.includes(category.id) && (
                  <div className={`px-4 py-3 text-[14px] text-[#666666] border-[#ededed] ${index !== categories.length - 1 ? "border-b" : "border-t"}`}>
                    {category.description}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center border-t border-[#ededed] p-6 pb-0">
            <div className="flex gap-3">
              <button
                className="cursor-pointer border border-[#ededed] text-[14px] text-[#171717] font-medium px-3 py-[5px] rounded-lg hover:bg-[#f2f2f2] transition duration-200 ease-in-out"
                onClick={() => {
                  handleDeny();
                  handleModalClose();
                }}
              >
                {t("consentModal.deny")}
              </button>
              <button
                className="cursor-pointer border border-[#ededed] text-[14px] text-[#171717] font-medium px-3 py-[5px] rounded-lg hover:bg-[#f2f2f2] transition duration-200 ease-in-out"
                onClick={() => {
                  handleAcceptAll();
                  handleModalClose();
                }}
              >
                {t("consentModal.acceptAll")}
              </button>
            </div>
            <button
              className="cursor-pointer border border-[#171717] bg-[#171717] text-[14px] text-[#ededed] font-medium px-3 py-[5px] rounded-lg hover:bg-[#666666] hover:border-[#666666] transition duration-200 ease-in-out"
              onClick={() => {
                handleSave(localPreferences);
                handleModalClose();
              }}
            >
              {t("consentModal.save")}
            </button>
          </div>
          <p className="text-[12px] mt-4 text-[#666666] p-6 pt-0">
            {t("consentModal.privacyPolicy")}{" "}
            <Link href="#" className="text-[#171717] hover:text-[#666666]">
              {t("consentModal.privacyPolicyLink")}
            </Link>
          </p>
        </div>
      </div>

      <style>
        {`
          .animate-slide-in {
            animation: slide-in 0.2s ease-out forwards;
          }

          @keyframes slide-in {
            from {
              transform: translateY(20px);
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
  );
}
