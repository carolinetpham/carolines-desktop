import { useEffect, useState } from "react";

const getIsMobile = (breakpoint: number) => {
  if (typeof window === "undefined") {
    return false;
  }
  return window.innerWidth < breakpoint;
};

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(() => getIsMobile(breakpoint));

  useEffect(() => {
    const handleResize = () => setIsMobile(getIsMobile(breakpoint));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
