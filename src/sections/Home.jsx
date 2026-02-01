import React from "react";
import { MdVerified } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
const Home = ({ TextColor, bg }) => {

  return (
    <div id="home" className={`min-h-screen flex justify-center ${bg}`}>
      <div className="max-w-4xl w-full flex justify-center items-center">
        <div className=" flex flex-col items-center gap-5 m-3">
        
  <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-text-primary font-bold animate-fadeIn flex flex-wrap justify-center items-center gap-2">

    <span>Hi,</span>
    <span>I'M Rhine Marco</span>

   
    <span className="flex items-center gap-1 whitespace-nowrap">
      Quibra
      <MdVerified className="w-5 h-5 sm:w-6 sm:h-6 text-text-primary" />
    </span>

  </h1>


          <div className="flex gap-2 flex-wrap justify-center items-center">
            <SlLocationPin className={`${TextColor} w-8 h-8`} />
            <h1 className={`sm:text-xl md:text-2xl text-center ${TextColor}`}>
              Misamis Occidental, Philippines
            </h1>
          </div>

          <p className={`text-2xl ${TextColor} text-center`}>
            BSIT Student | Aspiring Full Stack Developer
          </p>
          <p className={`text-2xl ${TextColor}`}>From Front to Back</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
