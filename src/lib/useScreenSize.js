"use client";
import { useState, useEffect } from "react";

const BREAKPOINTS = {
  sm: 640,
  md: 1024,
  lg: 1280,
  xl: 1536
};

export const useScreenSize = () => {
  const getScreenSize = () => {
    if (typeof window === "undefined") return "lg"; // Default for SSR
    const width = window.innerWidth;
    if (width < BREAKPOINTS.sm) return "sm";
    if (width < BREAKPOINTS.md) return "md";
    if (width < BREAKPOINTS.lg) return "lg";
    return "xl";
  };

  const [screenSize, setScreenSize] = useState(getScreenSize);

  useEffect(() => {
    let timeoutId;
    const RESIZE_DEBOUNCE_DELAY = 150;
    const updateScreenSize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenSize(getScreenSize());
      }, RESIZE_DEBOUNCE_DELAY); 
    };

    if (typeof window !== "undefined") {
      // Initialize the screen size
      updateScreenSize();

      window.addEventListener("resize", updateScreenSize);
    }

    return () => {
      clearTimeout(timeoutId);
      if (typeof window !== "undefined") {
     window.removeEventListener("resize", updateScreenSize);
    }}
  }, []);

  return screenSize;
};
