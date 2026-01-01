import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [User, setUser] = useState([]);
  let getData = async () => {
    let Response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=150"
    );
    console.log(Response.data[1]);
    setUser(Response.data);
  };

  return (
    // <div className="h-full w-full bg-black flex items-center flex-col p-8 gap-4 ">
    <div className="w-full max-w-full bg-black border-2 border-amber-200  p-4 overflow-auto">
    <button
        onClick={getData}
        className="px-10 py-5 rounded-2xl bg-pink-800 active:scale-95 mb-4 text-white font-semibold"
      >
        Click Me
      </button>

      {/* <div className="w-300 h-145 bg-black border-2 border-amber-200 rounded-2xl p-4 flex flex-wrap  gap-3.5 overflow-auto"> */}
          <div className="grid 
    grid-cols-2 
    sm:grid-cols-3 
    md:grid-cols-4 
    lg:grid-cols-5 
    gap-4">
        {User.map((elem, idx) => {
          return (
            <div
              key={idx}
              className=" border aspect-square rounded overflow-hidden border-amber-50"
            >
              <img
                className=" h-full w-full object-cover rounded "
                src={elem.download_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
