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
    // setError("");

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
        } else {
          alert("⚠️ Network error. Try again later.");
        }
        setweather({});
      });
  };

  return (
    <div
      className={`h-full w-full ${dark ? "bg-black text-white" : "bg-amber-100 text-black"} p-5 flex flex-col gap-5 items-center justify-center `}
    >
      <p>
        Sorry for the inconvenience actually this app is under development (lekin weather dekh paoge 👀) , abhi
        mujhe css likhne mein alash araha hain .. nindh arahahain mujhe
        😭😭{" "}
      </p>

      <button
        className="px-11 py-3 rounded-3xl bg-red-800 border-none active:scale-95 cursor-pointer"
        onClick={() => {
          setdark(!dark);
        }}
      >
        Theme
      </button>

      <h1 className=" text-2xl whitespace-nowrap lg:text-6xl capitalize ">
        Hello 👋 welcome to weather Forcaster
      </h1>
      <form
        className="flex gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (City.trim() == "") {
            alert("Please Enter City Name");
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
          className={`p-3 border-none rounded-3xl pl-7  outline-none ${dark ? "bg-gray-600 text-white" : "bg-pink-500 text-black"} text-2xl`}
        />
        <img
          src={search}
          className="p-3 rounded-full bg-white"
          onClick={() => {
            if (City.trim() == "") {
              alert("Please Enter City Name");
            }
            Alldata();
          }}
        />
      </form>
      {/* <button onClick={Alldata} className="p-5 border-2 rounded-3xl outline-none text-white text-2xl">Confirm</button> */}
      <h1 className="text-2xl"> City -- {weather.Location}</h1>
      <h1 className="text-2xl"> temparature -- {weather.temprature}°C </h1>
      <h1 className="text-2xl"> humadity -- {weather.humidity} % </h1>
      <h1 className="text-2xl"> windspeed -- {weather.windspeed} km/h </h1>

      {weather.icon && (
        <img
          className="w-20 h-20"
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="weather icon"
        />
      )}
    </div>
  );
};

export default App;
