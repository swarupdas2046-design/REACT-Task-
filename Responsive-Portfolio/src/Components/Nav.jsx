import React, { useState } from "react";
const Nav = () => {
  const [menu, setmenu] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className=" relative rounded-3xl lg:rounded-none w-full h-18 p-7 bg-linear-to-r from-gray-950   to-purple-950 
     flex  items-center justify-between  "
    >
      <img
        className="h-18 w-18 object-cover rounded-full"
        src="https://images.scalebranding.com/lion-eagle-logo-fb4d6934-37aa-44a8-99e0-277e440dec5e.jpg"
        alt=""
      />

      {/* <div className=" hidden lg:flex lg:gap-5 items-center">
        <Link className="text-white text-2xl font-semibold " to="/home">
          Home
        </Link>
        <Link className="text-white text-2xl font-semibold " to="/about">
          About
        </Link>
        <Link className="text-white text-2xl font-semibold " to="/services">
          Services
        </Link>
        <a
          className="text-white text-2xl font-semibold whitespace-nowrap"
          href="#"
        >
          Contact us
        </a>
      </div> */}
      <div className=" hidden lg:flex lg:gap-5 items-center ">
        <button
          onClick={() => scrollToSection("home")}
          className="text-white text-2xl font-semibold cursor-pointer"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("services")}
          className="text-white text-2xl font-semibold cursor-pointer"
        >
          Services
        </button>

        <button
          onClick={() => scrollToSection("works")}
          className="text-white text-2xl font-semibold cursor-pointer"
        >
          Work
        </button>

        <button
          onClick={() => scrollToSection("skill")}
          className="text-white text-2xl font-semibold cursor-pointer"
        >
          Skill
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="text-white text-2xl font-semibold cursor-pointer"
        >
          Contact
        </button>
      </div>

      <i
        onClick={() => {
          setmenu(!menu);
          console.log("all okay set ");
        }}
        className="ri-menu-line text-3xl cursor-pointer text-white lg:hidden"
      ></i>

      <div
        className={`  ${
          menu
            ? "opacity-100 transition-all ease-linear duration-300 rounded-2xl translate-y-2"
            : "opacity-0 transition-all ease-linear duration-300 rounded-2xl  -translate-y-2"
        } 
 
 absolute flex gap-5 flex-col w-full top-20 left-0 bg-linear-to-r from-gray-950 to-purple-950 text-center`}
      >
        <button
          onClick={() => scrollToSection("home")}
          className="text-white text-2xl font-semibold cursor-pointer"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("services")}
          className="text-white text-2xl font-semibold mb-2 cursor-pointer"
        >
          Services
        </button>

        <button
          onClick={() => scrollToSection("works")}
          className="text-white text-2xl font-semibold cursor-pointer"
        >
          Work
        </button>

        <button
          onClick={() => scrollToSection("skill")}
          className="text-white text-2xl font-semibold cursor-pointer"
        >
          Skill
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="text-white text-2xl font-semibold cursor-pointer"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Nav;

{
  /* <a className="text-white text-2xl font-semibold " href="#">
          Home
        </a>
        <a className="text-white text-2xl font-semibold " href="#">
          About
        </a>
        <a className="text-white text-2xl font-semibold " href="#">
          Blogs
        </a>
        <a className="text-white text-2xl font-semibold mb-2 " href="#">
          Contact us
        </a> */
}
