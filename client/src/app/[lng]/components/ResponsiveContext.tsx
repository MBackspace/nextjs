"use client";

import { createContext, useContext } from "react";
import { useResponsive, ResponsiveState } from "@/app/hooks/useResponsive";
import { FALLBACK_LAPTOP_SCREEN_WIDTH } from "@/app/lib/constants";

export interface ResponsiveContextValue {
  width: number;
  isTabletScreen: boolean;
  isMobileScreen: boolean;
}

const defaultValue: ResponsiveContextValue = {
  width: FALLBACK_LAPTOP_SCREEN_WIDTH,
  isTabletScreen: false,
  isMobileScreen: false
};

const ResponsiveContext: React.Context<ResponsiveContextValue> = createContext<ResponsiveContextValue>(defaultValue);

export const useResponsiveContext = (): ResponsiveContextValue => useContext<ResponsiveContextValue>(ResponsiveContext);

export default function ResponsiveProvider({
  children
}: {
  children: React.ReactNode
}): React.ReactNode {
  const { width, isTabletScreen, isMobileScreen }: ResponsiveState = useResponsive();

  return (
    <ResponsiveContext.Provider value={{ width, isTabletScreen, isMobileScreen }}>
      {children}
    </ResponsiveContext.Provider>
  );
};
