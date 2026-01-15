import React from "react";

const Section_5 = () => {
  return (
    <div
      id="skill"
      className=" w-full bg-linear-to-tl  from-black to-purple-950
     text-white p-3 mt-3 "
    >
      <div className="flex flex-col items-center gap-2.5 text-center">
        <h1 className="text-4xl text-center font-semibold lg:text-5xl bg-linear-to-r from-purple-700 to-white bg-clip-text text-transparent ">
          My skill
        </h1>
        <p className="mt-2 lg:w-125 text-center">
          We put your idea's and thus your wishes in the form of a unique web
          project that you and your costomers.
        </p>
      </div>

      <div className=" flex items-center flex-col lg:flex-row lg:items-center lg:justify-center gap-3 mt-10  ">
        <div className="flex gap-2 ">
          <div className="flex items-center justify-center rounded-xl lg:rounded-2xl gap-1.5 flex-col h-25 w-25 lg:h-36 lg:w-30 bg-purple-950 hover:-translate-y-2 transition-all duration-300 ease-linear cursor-pointer">
            <img
              className="h-12 w-12"
              src="https://icon.icepanel.io/Technology/svg/React.svg"
              alt=""
            />
            <h3 className="text-xl font-semibold">89%</h3>
          </div>

          <div className="flex items-center justify-center rounded-xl lg:rounded-2xl gap-1.5 flex-col h-25 w-25 lg:h-36 lg:w-30 bg-purple-950 hover:-translate-y-2 transition-all duration-300 ease-linear cursor-pointer">
            <img
              className="h-12 w-12"
              src="https://icon.icepanel.io/Technology/svg/JavaScript.svg"
              alt=""
            />
            <h3 className="text-xl font-semibold">93%</h3>
          </div>

          <div className="flex items-center justify-center rounded-xl lg:rounded-2xl gap-1.5 flex-col h-25 w-25 lg:h-36 lg:w-30 bg-purple-950 hover:-translate-y-2 transition-all duration-300 ease-linear cursor-pointer">
            <img
              className="h-12 w-12"
              src="https://icon.icepanel.io/Technology/png-shadow-512/WordPress.png"
              alt=""
            />
            <h3 className="text-xl font-semibold">99%</h3>
          </div>
        </div>

        <div className="flex gap-2 mb-3">
          <div className="flex items-center justify-center rounded-xl lg:rounded-2xl gap-1.5 flex-col h-25 w-25 lg:h-36 lg:w-30 bg-purple-950 hover:-translate-y-2 transition-all duration-300 ease-linear cursor-pointer">
            <img
              className="h-12 w-12"
              src="https://icon.icepanel.io/Technology/svg/Figma.svg"
              alt=""
            />
            <h3 className="text-xl font-semibold">92%</h3>
          </div>

          <div className="flex items-center justify-center rounded-xl lg:rounded-2xl gap-1.5 flex-col h-25 w-25 lg:h-36 lg:w-30 bg-purple-950 hover:-translate-y-2 transition-all duration-300 ease-linear cursor-pointer">
            <img
              className="h-12 w-12"
              src="https://icon.icepanel.io/Technology/svg/Kotlin.svg"
              alt=""
            />
            <h3 className="text-xl font-semibold">95%</h3>
          </div>

          <div className="flex items-center justify-center rounded-xl lg:rounded-2xl gap-1.5 flex-col h-25 w-25 lg:h-36 lg:w-30 bg-purple-950 hover:-translate-y-2 transition-all duration-300 ease-linear cursor-pointer">
            <img
              className="h-12 w-12"
              src="https://icon.icepanel.io/Technology/svg/Sketch.svg"
              alt=""
            />
            <h3 className="text-xl font-semibold">90%</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_5;
