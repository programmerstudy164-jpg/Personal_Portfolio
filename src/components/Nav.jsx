import React from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Project", id: "project" },
  { name: "Skills", id: "Skills" },
  { name: "Contact", id: "contact" },
];
const Nav = ({ TextColor }) => {
  return (
    <ul className="flex gap-8">
      {navItems.map((item) => (
        <li
          className={`font-semibold text-md cursor-pointer hover:text-text-primary ${TextColor}`}
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
