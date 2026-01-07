import React from "react";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import { Outlet, useNavigate } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();
  return (
    <div className="h-full w-full bg-black relative">
     
      <Nav />
       <button
        onClick={() => {
          navigate(-1);
        }}
        className=" capitalize mt-5 ml-10 px-10 py-4 active:scale-95 cursor-pointer rounded-3xl text-amber-50 bg-teal-600"
      >
        go back
      </button>
       <button
        onClick={() => {
          navigate('/');
        }}
        className=" capitalize mt-5 ml-10 px-10 py-4 active:scale-95 cursor-pointer rounded-3xl text-amber-50 bg-teal-600"
      >
         Go-Home
      </button>
      <Outlet />
    </div>
  );
};

export default App;
