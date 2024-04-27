import { useEffect, useRef } from "react";

export const outClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const outClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (callback) callback();
      }
    };

    window.addEventListener("mousedown", outClick);

    return () => {
      window.removeEventListener("mousedown", outClick);
    };
  }, []);

  return ref;
};
