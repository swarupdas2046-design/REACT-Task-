import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [Name, setName] = useState("");
  const [mail, setmail] = useState("");
  const [company, setcompany] = useState("");
  const [Phone, setPhone] = useState("");
  const [Role, setRole] = useState("");
  const [Image, setImage] = useState("");

  let localData = JSON.parse(localStorage.getItem("Data")) || [];

  const [Alluser, setAlluser] = useState(localData);

  function Submit(e) {
    e.preventDefault();
    let Newuser = [...Alluser];
    Newuser.push({ Name, mail, company, Phone, Role, Image });
    setAlluser(Newuser);

    localStorage.setItem("Data", JSON.stringify(Newuser));
    
    console.log("submitted !");

    setName("");
    setImage("");
    setmail("");
    setcompany("");
    setRole("");
    setPhone("");
  }

  function remove(idx) {
    let allRemove = [...Alluser];
    allRemove.splice(idx, 1);
    setAlluser(allRemove);
    localStorage.setItem("Data", JSON.stringify(allRemove));
  }

  return (
    <div
      className="h-full w-full   bg-linear-to-br
  from-slate-950
  via-slate-900
  to-slate-800 flex gap-30 p-6"
    >
      <div
        className="h-160 w-100  bg-white/10
  backdrop-blur-xl
  rounded-2xl
  border border-white/20
  shadow-2xl
  p-6
  text-white"
      >
        <h1 className="text-3xl font-semibold mb-4 text-indigo-400">
          Add Contacts
        </h1>
        <form
          onSubmit={(e) => {
            Submit(e);
          }}
          className="flex flex-col gap-6  mt-15"
        >
          <input
            // style={{ backgroundColor: "rgba(255, 255, 255, 0.956)" }}
            // className="w-85 h-10 font-semibold text-black px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            className="
    w-full
    bg-white/10
    backdrop-blur-md
    border border-white/20
    rounded-xl
    px-4 py-3
    
    text-white
    placeholder-white/50
    focus:outline-none
    focus:ring-2 focus:ring-indigo-500
  "
            value={Name}
            required
            type="text"
            placeholder="Full Name"
            onChange={(e) => {
              setName(e.target.value);
              // console.log(e.target.value);
            }}
          />

          <input
            // style={{ backgroundColor: "rgba(255, 255, 255, 0.956)" }}
            // className="w-85 h-10 font-semibold text-black px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 "
            className="
    w-full
    bg-white/10
    backdrop-blur-md
    border border-white/20
    rounded-xl
    px-4 py-3
    text-white
    placeholder-white/50
    focus:outline-none
    focus:ring-2 focus:ring-indigo-500
  "
            type="text"
            required
            placeholder="Company Name"
            value={company}
            onChange={(e) => {
              setcompany(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <input
            // style={{ backgroundColor: "rgba(255, 255, 255, 0.956)" }}
            // className="w-85 h-10 font-semibold text-black px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            className="
    w-full
    bg-white/10
    backdrop-blur-md
    border border-white/20
    rounded-xl
    px-4 py-3
    
    text-white
    placeholder-white/50
    focus:outline-none
    focus:ring-2 focus:ring-indigo-500
  "
            type="text"
            required
            placeholder="Poisition"
            value={Role}
            onChange={(e) => {
              setRole(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <input
            // style={{ backgroundColor: "rgba(255, 255, 255, 0.956)" }}
            // className="w-85 h-10 font-semibold text-black px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            className="
    w-full
    bg-white/10
    backdrop-blur-md
    border border-white/20
    rounded-xl
    px-4 py-3
    
    text-white
    placeholder-white/50
    focus:outline-none
    focus:ring-2 focus:ring-indigo-500
  "
            type="text"
            required
            placeholder="Phone Number"
            value={Phone}
            onChange={(e) => {
              setPhone(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <input
            // style={{ backgroundColor: "rgba(255, 255, 255, 0.956)" }}
            // className="w-85 h-10 font-semibold text-black px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            className="
    w-full
    bg-white/10
    backdrop-blur-md
    border border-white/20
    rounded-xl
    px-4 py-3
    
    text-white
    placeholder-white/50
    focus:outline-none
    focus:ring-2 focus:ring-indigo-500
  "
            type="email"
            required
            placeholder="Email"
            value={mail}
            onChange={(e) => {
              setmail(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <input
            // style={{ backgroundColor: "rgba(255, 255, 255, 0.956)" }}
            // className="w-85 h-10 font-semibold text-black px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-[1.02] transition-all"
            className="
    w-full
    bg-white/10
    backdrop-blur-md
    border border-white/20
    rounded-xl
    px-4 py-3
    
    text-white
    placeholder-white/50
    focus:outline-none
    focus:ring-2 focus:ring-indigo-500
  "
            type="text"
            required
            placeholder="Image URL"
            value={Image}
            onChange={(e) => {
              setImage(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <button
            className="w-full
  py-3
  rounded-xl
  bg-linear-to-r from-indigo-500 to-purple-600
  text-white font-semibold
  shadow-lg
  hover:scale-[1.02]
  active:scale-95
  transition cursor-pointer"
          >
            ADD Contact
          </button>
        </form>
      </div>

      <div className="h-full w-237.5  p-4 flex gap-9 flex-wrap overflow-auto  text-white">
        {Alluser.map((elem, idx) => {
          return <Card elem={elem} remove={remove} idx={idx} />;
        })}

        {/* <div className=" h-[350px] w-[270px] rounded-2xl bg-gray-900 flex relative flex-col items-center gap-2.5 p-3">
                <img className="h-[100px] w-[100px] rounded-full object-cover" src="https://i.pinimg.com/1200x/dd/f6/df/ddf6df26bbef9af010f93ebedfc9dced.jpg" alt="" />
                <h1 className="text-4xl text-cyan-800">Swarup</h1>
                <h3 className="text-2xl text-amber-300">Instructor</h3>
                <p className="text-center mb-1.5">Lorem ipsum dolor sit amet consectetur</p>
                <button className="px-8 py-3  rounded-2xl bg-red-700 ml-30 text-amber-100"> Delete</button>
        </div> */}
      </div>
    </div>
  );
};

export default App;

//  className=" mt-5.5  px-6 py-2 rounded-xl
//   bg-indigo-600 hover:bg-indigo-700
//   transition  active:scale-95 cursor-pointer "
