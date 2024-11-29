import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeigth] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeigth(window.innerHeight);
  };

  return { height, width };
};
