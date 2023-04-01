import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ value }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center w-screen h-full ${value?.id === 1 ? 'bg-pink-200' : 'text-[#ffd3c2] bg-[#47342e]'}`}>
      <div className="h-full basis-1/2 ">
        <img src={value?.img} alt="" className="h-full" />
      </div>
      <div className="basis-1/2 p-6 flex flex-col items-center">
        <h2 className="font-bold font-oliver text-5xl tracking-wider">{value?.keyword1}</h2>
        <h2 className="font-bold font-oliver text-5xl tracking-wider">
          {value?.keyword2}
        </h2>
        <p>{value?.heading}</p>
        <Link to={`/${value?.type}`} className={`px-10 py-2 my-5 rounded-md ${value?.id === 1 ? 'bg-black text-white' : 'bg-[#ffd3c2] text-[#47342e]'}`}>
          {value?.callToAction}
        </Link>
      </div>
    </div>
  );
};

export default Slide;
