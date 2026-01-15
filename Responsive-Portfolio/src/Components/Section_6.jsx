import React, { useState } from "react";

const Section_6 = () => {
  const [username, setusername] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  let allsubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
    setusername("");
    setphone("");
    setemail("");
    setmessage("");
  };
  return (
    <div id="contact" className=" w-full  text-white  mt-6">
      <h2 className="text-3xl lg:text-4xl text-center font-semibold bg-linear-to-r from-purple-700 to-white bg-clip-text text-transparent  mb-3">
        Let's work together
      </h2>
      <div className="h-0.5 bg-white w-full mb-6"></div>

      <div className="flex gap-3.5 flex-col-reverse items-center lg:flex-row lg-items-center lg:justify-evenly mb-8">
        <div className="bg-linear-to-bl from-gray-950 to-purple-950 w-full h-fit p-7 lg:w-200 lg:h-50 rounded-2xl lg:flex  lg:justify-center lg:flex-col ">
          <h3 className="text-4xl mb-4">Get in touch</h3>
          <div className="flex gap-2 flex-col">
            <p>
              <i class="ri-mail-line"></i> swarupdas2046@gnail.com
            </p>
            <p>
              <i class="ri-phone-fill"></i> +91 789451236
            </p>
            <p>
              <i class="ri-map-pin-line"></i> Manhattan,New york
            </p>
          </div>
        </div>

        {/* fill the form  */}

        <div className="flex gap-4 flex-col h-fit lg:h-100 w-full lg:w-100 lg:rounded-2xl bg-linear-to-br from-black to-purple-950 items-center p-3.5">
          <p className="text-2xl">Send Message</p>
          <form
            onSubmit={(e) => {
              allsubmit(e);
            }}
            className="bg- flex flex-col gap-4"
          >
            <input
              onChange={(e) => {
                setusername(e.target.value);
              }}
              value={username}
              className="border-2 border-gray-700 bg-black px-5 py-3 rounded-xl "
              required
              type="text"
              placeholder="Enter name"
            />
            <input
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
              className="border-2 border-gray-700 px-5 py-3 rounded-xl bg-black "
              required
              type="email"
              placeholder="Enter email"
            />
            <input
              onChange={(e) => {
                setphone(e.target.value);
              }}
              value={phone}
              className="border-2 border-gray-700 px-5 py-3 rounded-xl bg-black "
              required
              type="number"
              placeholder="Enter number"
            />
            <input
              onChange={(e) => {
                setmessage(e.target.value);
              }}
              value={message}
              className="border-2 border-gray-700 px-5 py-3 rounded-xl bg-black "
              required
              type="text"
              placeholder="Enter message"
            />

            <button className="px-15 py-3 rounded-3xl bg-blue-800">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* connect us  */}
    </div>
  );
};

export default Section_6;
