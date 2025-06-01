import { useEffect, useState } from "react";

export function useIsShortScreen(breakpoint: number): boolean {
  const [isShortScreen, setIsShortScreen] = useState<boolean>(false);
  useEffect((): () => void => {
    const handleResize = (): void => setIsShortScreen(window.innerWidth <= breakpoint);
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isShortScreen;
}
