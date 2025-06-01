"use client";

import { createContext, useContext } from "react";
import { useIsShortScreen } from "@/app/hooks/useIsShortScreen";
import { FALLBACK_SHORT_SCREEN_WIDTH } from "@/app/lib/constants";

export interface ScreenContext {
  isShortScreen: boolean;
}

const ScreenContext: React.Context<ScreenContext> = createContext<ScreenContext>({
  isShortScreen: false
});

export const useScreen = (): ScreenContext => useContext<ScreenContext>(ScreenContext);

export default function ScreenProvider({ children }: { children: React.ReactNode }): React.ReactNode {
  const isShortScreen: boolean = useIsShortScreen(FALLBACK_SHORT_SCREEN_WIDTH);
  return (
    <ScreenContext.Provider value={{ isShortScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};
