import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("isDarkMode", false);

  useEffect(() => {
    const body = document.querySelector("body");
    darMode ? body.classList.toggle("dark-mode") : null;
  }, [darkMode]);
  console.log(useDarkMode());

  return [darkMode, setDarkMode];
};
