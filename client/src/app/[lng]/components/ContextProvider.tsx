"use client";

import { createContext, useContext } from "react";
import { useScreenQuery } from "@/app/hooks/useScreenQuery";
import { FALLBACK_MOBILE_SCREEN_WIDTH, FALLBACK_SHORT_SCREEN_WIDTH } from "@/app/lib/constants";

export interface AppContext {
  isShortScreen: boolean;
  isMobileScreen: boolean;
}

const AppContext: React.Context<AppContext> = createContext<AppContext>({
  isShortScreen: false,
  isMobileScreen: false
});

export const useAppContext = (): AppContext => useContext<AppContext>(AppContext);

export default function ContextProvider({ children }: { children: React.ReactNode }): React.ReactNode {
  const isShortScreen: boolean = useScreenQuery(FALLBACK_SHORT_SCREEN_WIDTH);
  const isMobileScreen: boolean = useScreenQuery(FALLBACK_MOBILE_SCREEN_WIDTH);
  return (
    <AppContext.Provider value={{ isShortScreen, isMobileScreen }}>
      {children}
    </AppContext.Provider>
  );
};
