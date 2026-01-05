import React from "react";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Branches from "./pages/Branches";
import Snekar from "./pages/Snekar";
import Casual from "./pages/casual";
import No_pages from "./pages/No_pages";
import Demand from "./pages/Demand";
import Detail from "./pages/Detail";
const App = () => {
  return (
    <div className="h-full w-full">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/snekar" element={<Snekar />} />
        <Route path="/product/casual" element={<Casual />} />
        <Route path="/branch" element={<Branches />} />
        <Route path="/branch/:id" element={<Demand />} />
        <Route path="/branch/:id/detail" element={<Detail />} />


        <Route path="*" element={<No_pages/>}/>
      </Routes>
    </div>
  );
};

export default App;
