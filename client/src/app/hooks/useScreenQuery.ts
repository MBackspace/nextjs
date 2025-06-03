import { useEffect, useState } from "react";

export const useScreenQuery = (breakpoint: number): boolean => {
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = (): void => {
      setMatches(window.innerWidth <= breakpoint);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return matches;
};
