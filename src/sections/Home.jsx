import React from "react";
import { MdVerified } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
const Home = ({ TextColor, bg }) => {
  return (
    <div id="home" className={`h-screen flex justify-center ${bg}`}>
      <div className="max-w-4xl w-full flex justify-center items-center mx-10">
        <div className=" flex flex-col  justify-center items-center gap-5">
          <div className="flex gap-3  items-center">
            <h1 className="text-5xl text-text-primary font-bold animate-fadeIn">
              Hi, I'M Rhine Marco Quibra
            </h1>

            <MdVerified className="w-5 h-5 mt-2 text-text-primary" />
          </div>
          <div className="flex gap-2">
            <SlLocationPin className={`${TextColor} w-8 h-8`} />
            <h1 className={`text-2xl ${TextColor}`}>
              Misamis Occidental, Philippines
            </h1>
          </div>
          <p className={`text-2xl ${TextColor}`}>
            BSIT Student | Aspiring Full Stack Developer
          </p>
          <p className={`text-2xl ${TextColor}`}>From Front to Back</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
