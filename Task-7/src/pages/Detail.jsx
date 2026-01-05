import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  let val = useParams();
  return (
    <div className="h-full w-full bg-black text-white flex items-center justify-center ">
      <h1 className="text-7xl">
  
        sorry we can't share our presoius details...
      </h1>
    </div>
  );
};

export default Detail;
