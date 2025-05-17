"use client"

import i18next from "./i18next";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatNamespace, KeyPrefix } from "i18next";
import { FallbackNs } from "react-i18next";
import { UseTranslationOptions } from "react-i18next";

const runsOnServerSide = typeof window === "undefined";

type $Tuple<T> = readonly [T?, ...T[]];
type Options<
  Ns extends FlatNamespace | $Tuple<FlatNamespace> | undefined = undefined,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined> = UseTranslationOptions<KPrefix>;

export function useT(ns: string | string[], options: Options) {
  const lng = useParams()?.lng;
  if (typeof lng !== "string") throw new Error("useT is only available inside /app/[lng]");
  useEffect(() => {
    if (runsOnServerSide && i18next.resolvedLanguage !== lng) {
      i18next.changeLanguage(lng);
    }
  }, [lng]);
  const [activeLng, setActiveLng] = useState(i18next.resolvedLanguage);
  useEffect(() => {
    if (activeLng === i18next.resolvedLanguage) return;
    setActiveLng(i18next.resolvedLanguage);
  }, [activeLng, i18next.resolvedLanguage]);
  useEffect(() => {
    if (!lng || i18next.resolvedLanguage === lng) return;
    i18next.changeLanguage(lng);
  }, [lng, i18next]);
  return useTranslation(ns, options);
}
