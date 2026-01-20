import React from "react";

const SkillsCard = ({ category, Skills, dark, TextColor }) => {
  return (
    <div
      className={`  ${dark ? "border-2 border-blue-600" : "shadow-2xl"}  rounded p-4 flex flex-col items-center`}
    >
      <h1 className={`text-center ${TextColor} font-bold mb-4`}>{category}</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {Skills.map((icon, index) => (
          <div
            key={index}
            className={`w-24 h-24 flex items-center justify-center  ${dark ? "border border-blue-600" : "shadow-lg"} rounded`}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
