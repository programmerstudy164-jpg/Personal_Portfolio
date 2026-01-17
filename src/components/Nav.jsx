import React from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "Skills" },
  { name: "Contact", id: "contact" },
];
const Nav = ({ Dark }) => {
  return (
    <ul className="flex gap-8">
      {navItems.map((item) => (
        <li
          className={`font-semibold text-md cursor-pointer ${
            Dark ? "text-white" : "text-black"
          }`}
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
