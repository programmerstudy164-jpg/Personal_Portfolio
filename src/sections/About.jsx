import React from "react";

const About = ({ TextColor, bg }) => {
  return (
    <div className={`h-screen flex justify-center ${bg}`}>
      <div className="w-full max-w-4xl flex flex-col  items-center gap-15 pt-40">
        <h1 className={`font-bold text-4xl text-center ${TextColor}`}>
          About Me
        </h1>
        <div className={`${TextColor} max-w-2xl text-2xl text-center`}>
          Hi! I'm Rhine Marco Quibra, a BSIT student passionate about web
          development and building user-friendly applications. I enjoy creating
          full-stack web projects and learning new technologies.
        </div>
      </div>
    </div>
  );
};

export default About;
