import React, { useState, useEffect } from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import Header from "../sections/Header";
import Project from "../sections/Project";
import Skills from "../sections/Skills";
import Footer from "../sections/Footer";
import Contact from "../sections/Contact";

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
  const Text = isDark ? "text-gray-300" : "text-black";
  const bgColor = isDark ? "bg-bg-primary" : "bg-white";
  return (
    <div>
      <Header Dark={isDark} setDark={setIsDark} TextColor={Text} />
      <Home TextColor={Text} bg={bgColor} />
      <About TextColor={Text} bg={bgColor} />
      <Project TextColor={Text} bg={bgColor} dark={isDark} />
      <Skills TextColor={Text} bg={bgColor} dark={isDark} />
      <Contact TextColor={Text} bg={bgColor} dark={isDark} />
      <Footer TextColor={Text} bg={bgColor} dark={isDark} />
    </div>
  );
};

export default Portfolio;
