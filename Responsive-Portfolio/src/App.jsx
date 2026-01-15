import React, { useState } from "react";
import Nav from "./Components/Nav";
import Section_1 from "./Components/Section_1";
import Section_2 from "./Components/Section_2";
import Section_3 from "./Components/Section_3";
import { Route, Routes } from "react-router-dom";
import Section_4 from "./Components/Section_4";
import Section_5 from "./Components/Section_5";
import Section_6 from "./Components/Section_6";
const App = () => {
  return (
    <div className="h-fit w-full bg-black lg:p-5 p-2 ">
      <Nav />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />

    </div>
  );
};

export default App;
