import React from "react";

const Footer = ({ TextColor, bg, dark }) => {
  return (
    <div
      className={`h-[12vh] flex justify-center items-center border-t ${bg} ${dark ? "border-white" : "border-black"}`}
    >
      <h1 className={`${TextColor} font-bold text-lg`}>
        © 2026 Rhine Marco Quibra. All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
