import React from "react";

const Section_2 = () => {
  return (
    <div id="about" className="w-full p-5 bg-black rounded-2xl mt-3 text-white flex justify-between lg:items-center lg:justify-center lg:gap-50 ">

      <div className="  lg:flex lg:flex-row lg:items-center lg:gap-50 ">

        <div className="flex flex-col gap-1.5 ">
          <h1 className="text-3xl lg:text-5xl text-center font-semibold">14</h1>
          <p className="text-2xl text-center">Years of Experience</p>
        </div>

        <div className="flex flex-col gap-1.5 lg:mt-0 mt-2">
          <h1 className="text-3xl lg:text-5xl text-center font-semibold">10K</h1>
          <p className="text-2xl text-center">happy clients</p>
        </div>

      </div>

      <div className=" lg:flex lg:flex-row lg:items-center lg:gap-50  ">

        <div className="flex flex-col gap-1.5 ">
          <h1 className="text-3xl lg:text-5xl text-center font-semibold">1000</h1>
          <p className="text-2xl text-center">project completed</p>
        </div>

        <div className="flex flex-col gap-1.5 lg:mt-0 mt-2">
          <h1 className="text-3xl lg:text-5xl text-center font-semibold">100</h1>
          <p className="text-2xl text-center">awards won</p>
        </div>
        
      </div>

    </div>
  );
};

export default Section_2;
