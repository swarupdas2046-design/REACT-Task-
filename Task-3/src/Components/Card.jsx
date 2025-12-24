const Card = ({ lolo }) => {
  console.log(lolo);

  return (
    <div className=" h-145 w-87.5 p-2.5 bg-gray-600 text-white overflow-hidden  rounded-3xl cursor-pointer">
      <img
        className="h-55 w-55 rounded-[50%] m-auto object-cover "
        src={lolo.image}
        alt=""
      />

      <div className="flex flex-col p-5 items-center gap-2.5">
        <h1 className="text-3xl font-bold "> {lolo.username} </h1>
        <p className="text-[20px] text-center"> {lolo.position} </p>

        <div className="flex items-center gap-2 p-2">
          {lolo.skills.map(function (val) {
            return (
   <button className="px-5 py-2 bg-amber-700 rounded-[15px]">{val}</button>
            );
          })}
        </div>
        <p className="text-center mb-2.5"> {lolo.description} </p>
        <div className="h-px w-37.5 bg-white"></div>
        <p>View Profile</p>
      </div>
    </div>
  );
};

export default Card;
