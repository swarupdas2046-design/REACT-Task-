import humidity from "./assets/humidity.png";
import search from "./assets/search.png";
import wind from "./assets/wind.png";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Api_key } from "./Api";
const App = () => {
  const [City, setCity] = useState("");
  const [weather, setweather] = useState([]);
  const [dark, setdark] = useState(true);
  // let Alldata = async () => {
  //   let response = await axios(
  //     ` https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${Api_key}`,
  //   );
  //   console.log(response.data);
  //   setweather({
  //     humidity: response.data.main.humidity,
  //     windspeed: response.data.wind.speed,
  //     temprature: Math.floor(response.data.main.temp),
  //     Location: response.data.name,
  //     icon: response.data.weather[0].icon,
  //   });
  // };

  let Alldata = () => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${Api_key}`,
    )
      .then((response) => {
        console.log(response.data);
        setweather({
          humidity: response.data.main.humidity,
          windspeed: response.data.wind.speed,
          temprature: Math.floor(response.data.main.temp),
          Location: response.data.name,
          icon: response.data.weather[0].icon,
        });
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          alert("❌ City not found. Check spelling.");
          return;
        }
        setweather({});
      });
  };

  return (
    <div
      className={`h-full w-full ${dark ? "bg-black text-white" : "bg-amber-200 text-black"} p-3 flex flex-col gap-5 items-center justify-center `}
    >
      <button
        className={`px-11 py-3 rounded-3xl ${dark ? "border-2 border-white  text-white" : "bg-amber-200  text-black border-2 border-black"}  active:scale-95 cursor-pointer text-xl font-bold capitalize`}
        onClick={() => {
          setdark(!dark);
        }}
      >
        {dark ? "Dark" : "white"}
      </button>

      <div
        className={` lg:w-fit w-full ${dark ? "bg-linear-to-t from-sky-500 to-indigo-500" : "bg-linear-to-tl/srgb from-indigo-500 to-teal-400"}  flex gap-4 flex-col py-4 rounded-xl`}
      >
        <form
          className="flex gap-2 bg-d-900  "
          onSubmit={(e) => {
            e.preventDefault();
            if (City.trim() == "") {
              alert("Please Enter City Name");
              return;
            }
            Alldata();
          }}
        >
          <input
            value={City}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            placeholder="Enter City Name"
            className={`p-3 border-none rounded-3xl pl-7 ml-2 outline-none ${dark ? "bg-gray-600 text-white" : "bg-pink-400 text-black"} text-2xl`}
          />
          <img
            src={search}
            className={`${dark ? "bg-gray-200 " : "bg-pink-400"}  w-12 p-3 rounded-full `}
            onClick={() => {
              if (City.trim() == "") {
                alert("Please Enter City Name");
              }
              Alldata();
            }}
          />
        </form>

        {/* <button onClick={Alldata} className="p-5 border-2 rounded-3xl outline-none text-white text-2xl">Confirm</button> */}
        <div className="flex flex-col items-center gap-5 p-5 mb-8">
          {weather.icon && (
            <img
              className="w-50 object-cover"
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="weather icon"
            />
          )}

          <h1 className="text-5xl font-semibold">{weather.temprature}°C</h1>
          <h1 className="text-5xl font-semibold ">{weather.Location}</h1>
        </div>

        <div className="flex gap-10">
          <div className="flex gap-5 ml-2 mr-4">
            <img src={humidity} className="w-10" alt="" />
            <div>
              <h1 className="text-2xl">{weather.humidity} % </h1>
              <h1 className="text-xl"> Humidity </h1>
            </div>
          </div>

          <div className="flex gap-5">
            <img src={wind} className="w-10" alt="" />
            <div>
              <h1 className="text-2xl"> {weather.windspeed} km/h </h1>
              <h1 className="text-xl"> windspeed</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
