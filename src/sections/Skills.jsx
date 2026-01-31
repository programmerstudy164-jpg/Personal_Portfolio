import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPhp, SiMysql, SiTailwindcss } from "react-icons/si";
import SkillsCard from "../components/SkillsCard";
const Skills = ({ TextColor, bg, dark }) => {
  const Skills = [
    {
      Category: "FrontEnd",
      Skills: [
        <FaHtml5 className="w-15 h-15 text-orange-700" />,
        <FaCss3Alt className="w-15 h-15 text-blue-700" />,
        <FaJsSquare className="w-15 h-15 text-yellow-400" />,
        <FaReact className="w-15 h-15 text-blue-700" />,
        <SiTailwindcss className="w-15 h-15 text-blue-700" />,
        <FaBootstrap className="w-15 h-15 text-blue-700" />,
      ],
    },
    {
      Category: "BackEnd",
      Skills: [
        <SiPhp className="w-15 h-15 text-purple-900" />,
        <SiMysql className="w-15 h-15 text-blue-700" />,
      ],
    },
    {
      Category: "Tools",
      Skills: [
        <FaGitAlt className="w-15 h-15 text-orange-400" />,
        <FaGithub
          className={`w-15 h-15 ${dark ? "text-amber-50" : "text-black"}`}
        />,
        <VscVscode className="w-15 h-15 text-blue-700" />,
      ],
    },
  ];
  return (
    <div id="skills" className={`min-h-screen flex justify-center ${bg}`}>
      <div className=" flex flex-col items-center gap-20 pt-32 w-full">
        <h1 className={`font-bold text-4xl text-center ${TextColor}`}>
          Skills
        </h1>
        <div className="max-w-7xl w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 p-5">
          {Skills.map((item) => (
            <SkillsCard
              category={item.Category}
              Skills={item.Skills}
              dark={dark}
              TextColor={TextColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
