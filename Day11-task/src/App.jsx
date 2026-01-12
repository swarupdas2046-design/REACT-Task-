import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import All_product from "./Pages/All_product";
import Details from "./Pages/Details";
const App = () => {
  return (
    <div className="h-full w-full bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<All_product />} />
        <Route path="/product/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;

// <div className='h-full w-full bg-black flex gap-5 flex-wrap overflow-auto p-7 '>

//       {Product.map((elem,idx)=>{
//         return  <a key={idx} className='h-65 w-65 p-1 bg-gray-500 rounded-xl shrink-0' href="" target='_blank'>
//             <div>
//               <img className='w-full h-50 object-cover' src={elem.image} alt="" />
//               <h1 className='text-2xl text-red-700 text-center bg-amber-50 mb-10'> {elem.category} </h1>
//             </div>
//           </a>
//       })}

// </div>
