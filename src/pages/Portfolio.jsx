import React, { useState, useEffect } from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import Header from "../sections/Header";

const Portfolio = () => {
  const [isDark, setIsDark] = useState(() => localStorage.theme === "dark");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);
  return (
    <div>
      <Header Dark={isDark} setDark={setIsDark} />
      <Home Dark={isDark} />
      <About />
    </div>
  );
};

export default Portfolio;
