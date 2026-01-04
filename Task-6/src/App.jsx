import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [UserData, setUserData] = useState([]);
  const [Count, setCount] = useState(1);
  let AllData = async () => {
    let restart = await axios.get(
      `https://picsum.photos/v2/list?page=${Count}&limit=27`
    );
    console.log(restart.data);
    setUserData(restart.data);
  };
  useEffect(() => {
    AllData();
  }, [Count]);
  return (
    <div className="h-full w-full text-white bg-black p-5 flex items-center justify-around">
      <div className="flex gap-2.5 flex-col">
        <button
          className="px-10 py-4 active:scale-95 bg-cyan-700  rounded-xl  text-2xl"
          onClick={() => {
            if (Count > 1) {
              setCount(Count - 1);
            }
          }}
        >
          Prev
        </button>
        <button
          className="px-10 py-4 active:scale-95 bg-cyan-700 rounded-xl  text-2xl "
          onClick={() => {
            setCount(Count + 1);
          }}
        >
          Next
        </button>
        <h1 className="text-4xl"> Page-no : {Count} </h1>
      </div>

      <div className="h-125 w-175 p-4 bg-black shadow-2xl shadow-blue-500 border-2 rounded-2xl flex items-center gap-5 flex-wrap overflow-auto">
        {UserData.map((elem, idx) => {
          return (
            <a key={idx} href={elem.url} target="_blank">
              <div className="h-50 w-50 ">
                <img
                  className="w-full h-[90%] rounded-2xl object-cover"
                  key={idx}
                  src={elem.download_url}
                  alt=""
                />
                <h1>{elem.author}</h1>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default App;

{
  /* <button
        onClick={() => {
          AllData();
        }}
        className="px-6 py-2.5 bg-pink-700 text-white rounded active:scale-95"
      >
        Data Entered
      </button> */
}
