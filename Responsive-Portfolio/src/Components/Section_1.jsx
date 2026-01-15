import React from "react";

const Section_1 = () => {
  return (
    <div
      id="home"
      className=" bg-linear-to-br from-[#40237A] to-black w-full py-3.5 rounded-2xl mt-8 flex flex-col gap-2.5 items-center lg:flex-row lg:justify-around lg:px-7 "
    >
      <img
        className="h-40 w-40 rounded-3xl object-cover object-top lg:h-100 lg:w-100 lg:rounded-xl "
        src="https://i.pinimg.com/736x/d4/fd/8c/d4fd8c4a169c68d497a13e4b3d835164.jpg"
        alt=""
      />

      <div className=" text-white  px-5 flex flex-col gap-2.5 items-center lg:block ">
        <h1 className=" lg:text-6xl  text-4xl text-center lg:text-left lg:mb-2 ">
          I am Geroid
        </h1>
        <h3 className="lg:text-4xl text-3xl text-center lg:text-left lg:mb-3 ">
          Webdevloper + Designer
        </h3>
        <p className=" text-center lg:text-left lg:mb-5 lg:w-112.5 ">
          I break down Complax user Experience problem to create intergrity
          focused solutions that connect billions of users.
        </p>

        <div className=" lg:flex-row lg:gap-8 lg:items-center flex flex-col items-center gap-5 ">
          <button className="px-6 py-2.5 rounded-3xl border text-purple-500 cursor-pointer  lg:mb-2 ">
            Download CV <i className="ri-square-line ml-2"></i>
          </button>
          <div className="flex gap-7 ">
            <i className="ri-instagram-line text-xl   cursor-pointer rounded-full bg-[rgba(255, 255, 255, 0.495)] "></i>
            <i className="ri-twitter-x-line text-xl  cursor-pointer rounded-full bg-[rgba(255, 255, 255, 0.495)]  "></i>
            <i className="ri-linkedin-fill text-xl  cursor-pointer rounded-full bg-[rgba(255, 255, 255, 0.495)]  "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_1;
