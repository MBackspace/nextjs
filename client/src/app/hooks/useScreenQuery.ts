import { useEffect, useState } from "react";

export interface State {
  matches: boolean;
}

export const useScreenQuery = (breakpoint: number): State => {
  const [state, setState] = useState<State>({
    matches: false
  });
  useEffect(() => {
    const handleResize = (): void => {
      setState({
        matches: window.innerWidth <= breakpoint
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return state;
};
