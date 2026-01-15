import React from "react";

const Section_4 = () => {
  return (
    <div
      id="works"
      className=" w-full rounded-xl bg-linear-to-bl from-black to-purple-950 mt-3 "
    >
      <h1
        className=" mt-7 lg:mt-16 text-4xl text-center font-semibold lg:text-5xl bg-linear-to-r from-purple-700 to-white
bg-clip-text  text-transparent"
      >
        My Recent works
      </h1>

      <div className="flex gap-4 flex-col items-center justify-center mt-8 lg:gap-10 ">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-7">
          <img
            className="h-40 w-75 lg:h-70 lg:w-110 hover:scale-101 transition-all duration-300 ease-linear object-cover rounded-xl"
            src="https://i.pinimg.com/1200x/3c/a9/f3/3ca9f3ad4ed064016aea639415b8efa9.jpg"
            alt=""
          />

          <img
            className="h-40 w-75 lg:h-70 lg:w-110 hover:scale-101 transition-all duration-300 ease-linear 
            object-cover rounded-xl"
            src="/videoframe_9880.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-7 mb-7">
          <img
            className="h-40 w-75 object-cover lg:h-70 lg:w-110 hover:scale-101 transition-all duration-300 ease-linear rounded-xl"
            src="https://i.pinimg.com/1200x/e0/e0/6e/e0e06ef32cec0a2f10a3ecee2221d2dc.jpg"
            alt=""
          />

          <img
            className="h-40 w-75 object-cover lg:h-70 lg:w-110 hover:scale-101 transition-all duration-300 ease-linear rounded-xl"
            src="https://i.pinimg.com/1200x/bd/8e/b7/bd8eb77cc4c20e29af2dc7b854251c46.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section_4;
