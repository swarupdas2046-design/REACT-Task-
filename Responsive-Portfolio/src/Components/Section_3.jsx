import React from "react";

const Section_3 = () => {
  return (
    <div
      id="services"
      className=" w-full mt-3 bg-linear-to-br  from-black to-purple-950
     text-white p-3"
    >
      <div className="flex flex-col gap-2.5 text-center mt-8">
        <h1
          className="text-3xl lg:text-5xl lg:font-semibold bg-linear-to-r from-purple-700 to-white
bg-clip-text text-transparent"
        >
          MY Quality Services
        </h1>

        <p className="text-gray-300">
          We put your idea's and thus your wishes in the form of a unique web
          project that you and your costomers.
        </p>
      </div>

      <div className="flex gap-2.5 flex-col mt-15 cursor-pointer">
        <div className="flex items-center justify-between  hover:bg-linear-to-r from-black via-purple-900  to-black  hover:scale-101 transition-all duration-300 ease-linear p-3 rounded lg:p-5">
          <h4 className="text-xl">01</h4>
          <h2 className="whitespace-nowrap text-xl">Branding Design</h2>
          <p className=" hidden lg:block">
            Transforming ideas into powerful brand experiences that connect
            emotionally with your audience.
          </p>
          <i class="ri-arrow-right-up-long-fill"></i>
        </div>

        <div className="flex items-center justify-between hover:bg-linear-to-r from-black via-purple-900  to-black  hover:scale-101 transition-all duration-300 ease-linear p-3 rounded lg:p-5">
          <h4 className="text-xl">02</h4>
          <h2 className="text-xl">UI/Ux Design</h2>
          <p className=" hidden lg:block">
            Create intuitive and engaging designs that make products easy to use
            and visually appealing.
          </p>
          <i class="ri-arrow-right-down-long-fill"></i>
        </div>

        <div className="flex items-center justify-between hover:bg-linear-to-r from-black via-purple-900  to-black hover:scale-101 transition-all duration-300 ease-linear p-3 rounded lg:p-5">
          <h4 className="text-xl">03</h4>
          <h2 className="text-xl">Web Design</h2>
          <p className=" hidden lg:block">
            Building elegant, high-performance websites with modern technologies
            and clean design.
          </p>
          <i class="ri-arrow-right-down-long-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default Section_3;
