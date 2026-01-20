import React, { useEffect, useState } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Project", id: "project" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Nav = ({ TextColor }) => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ul className="flex gap-8">
      {navItems.map((item) => (
        <li
          key={item.id}
          onClick={() => handleScroll(item.id)}
          className={`
            font-semibold text-md cursor-pointer transition
            ${
              activeSection === item.id ?
                "text-text-primary border-b-2 border-text-primary"
              : `text-gray-500 hover:text-text-primary ${TextColor}`
            }
          `}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
