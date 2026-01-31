import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiPhp, SiMysql } from "react-icons/si";
const Project = ({ TextColor, bg, dark }) => {
  const iconFront = [
    <FaHtml5 className="w-9 h-9 text-orange-700" />,
    <FaCss3Alt className="w-9 h-9 text-blue-700" />,
    <FaJsSquare className="w-9 h-9 text-yellow-400" />,
  ];
  const iconback = [
    <SiPhp className="w-9 h-9 text-purple-900" />,
    <SiMysql className="w-9 h-9 text-blue-700" />,
  ];
  return (
    <div id="project" className={`min-h-screen flex justify-center ${bg}`}>
      <div className="w-full max-w-4xl  flex flex-col  pt-24 items-center gap-15 ">
        <h1 className={`font-bold text-4xl text-center ${TextColor}`}>
          My Project
        </h1>
        <div className=" w-full max-w-2xl flex items-center flex-col">
          <div
            className={`w-3/4 p-3  ${dark ? "border-2 border-blue-600" : "shadow-2xl"}  overflow-auto rounded-lg `}
          >
            <div className="rounded-lg overflow-auto">
              <img
                src="src\assets\Screenshot 2026-01-17 125918.png"
                alt=""
                className="w-full h-48  object-center"
              />
            </div>
            <div className=" space-y-3">
              <h1 className={`font-bold text-2xl ${TextColor} text-center`}>
                Motorcycle Rental
              </h1>
              <p className={`font-semibold ${TextColor} text-sm text-center`}>
                A motor rental system built to practice full-stack development
                and real-world booking logic.
              </p>
            </div>
            <div className="mt-2 space-y-3">
              <h1 className={`text-center font-bold ${TextColor}`}>FrontEnd</h1>

              <div className="flex justify-center">
                {iconFront.map((i) => (
                  <div>{i}</div>
                ))}
              </div>
            </div>
            <div className="mt-2 space-y-3">
              <h1 className={`text-center font-bold ${TextColor}`}>BackEnd</h1>

              <div className="flex justify-center items-center gap-2">
                {iconback.map((i) => (
                  <div>{i}</div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-3 ">
              <a
                href={`https://quibrarmrental.muccsbblock1.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-3 py-2 rounded-lg bg-blue-500 cursor-pointer text-white">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
