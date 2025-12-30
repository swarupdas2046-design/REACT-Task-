const Card = (props) => {
  console.log(props.elem);
        let c1 = Math.floor(Math.random()*256)
        let c2 = Math.floor(Math.random()*256)
        let c3 = Math.floor(Math.random()*256)
        
  return (
    <div 
      key={props.idx}
      className=" h-87.5 w-68  bg-white/10
  backdrop-blur-xl
  rounded-2xl
  shadow-2xl
  border border-white/20 text-white  flex relative flex-col gap-2.5 p-3 hover:scale-[1.05] transition-all duration-300 ease-linear
"
    >
      <img
        className="h-25 w-25 rounded-full object-cover   border-2 border-white/40"
        src={props.elem.Image}
        alt=""
      />
      <h1 className="text-3xl font-semibold text-white">{props.elem.Name}</h1>
      <h3 className="text-2xl ">{props.elem.Role}</h3>
      <p className="">Company: {props.elem.company}</p>
      <p className=" mb-1.5 whitespace-nowrap">email: {props.elem.mail}</p>
      <button
        onClick={() => {
          props.remove(props.idx);
        }}
        className="px-6 py-2 rounded-xl cursor-pointer
  bg-red-600/90 hover:bg-red-700
  transition active:scale-95"
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
