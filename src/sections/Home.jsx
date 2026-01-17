import React from "react";

const Home = ({ Dark }) => {
  return (
    <div
      className={`h-screen flex justify-center ${
        Dark ? "bg-bg-primary" : "bg-white"
      }`}
    >
      <div className="max-w-4xl w-full flex justify-center items-center mx-10 mb-10 mt-5">
        <div className=" flex flex-col  justify-center items-center">
          <h1 className="text-5xl text-text-primary font-bold mb-4 animate-fadeIn">
            Hi, I'M Rhine Marco Quibra
          </h1>
          <p className="text-2xl text-gray-300 mb-3">
            BSIT Student | Aspiring Full Stack Developer
          </p>
          <p className="text-2xl text-gray-300 mb-8">From Front to Back</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
