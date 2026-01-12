import React, { useContext } from "react";
import { ItemContext } from "../Context/MainContext";
import { useNavigate, useParams } from "react-router-dom";
const Details = () => {
  let navigate = useNavigate()
  let Data = useContext(ItemContext);
  console.log(Data);

  let { id } = useParams();

  let Selected_item = "Loading....";
  if (Data.length > 0) {
    Selected_item = Data.find((elem) => elem.id == id);
    console.log(Selected_item);
    
  }

  return (
    <div className="  bg-black text-white flex gap-5 flex-col  p-8  lg:flex-row lg:items-center lg:justify-center lg:gap-20  ">
      <i onClick={()=>{
            navigate('/product')
      }} className="ri-arrow-left-line rounded-full lg:p-3 lg:ring-3 lg:absolute lg:top-10 lg:left-5 ring-white  lg:rounded-full lg:bg-[#ffffff4a] text-2xl cursor-pointer lg:active:scale-95 "></i>
      <div className=" h-100  lg:h-130   shrink-0">
        <img
          className="h-[80%] lg:h-full object-cover object-center"
          src={Selected_item.image}
          alt=""
        />
        {/* <h1 className="text-2xl text-red-700 text-center bg-amber-50 mt-6">
          
          {Selected_item.category}
        </h1> */}
      </div>
      <div className="bg-gray-800 w-fit lg:w-120 h-fit flex gap-2.5 flex-col p-4 rounded">
        <h1 className="text-4xl capitalize">{Selected_item.category}</h1>
        <h1 className="text-2xl"> Price - {Selected_item.price} Rupees </h1>
        <p className="text-[12px]"> INFO - {Selected_item.description}</p>
      </div>
    </div>
  );
};

export default Details;
