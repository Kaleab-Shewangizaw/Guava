import React from "react";

const Testimony = (props) => {
  const { name, testimony } = props;
  return (
    <div className="flex flex-col items-center text-center p-6  bg-[rgba(0,0,0,0.65)] rounded-lg shadow-md w-[300px] m-1 h-[150px] h-max-[175px] ">
      <div className="flex  items-center mb-2 w-full gap-2 text-white font-bold">
        <div
          className={`w-[40px] h-[40px] bg-gradient-to-r from-white to-[#03537e] p-4 rounded-full shadow-lg`}
        ></div>
        <h2>{name}</h2>
      </div>
      <p className="text-gray-100 italic">{testimony}</p>
    </div>
  );
};

export default Testimony;
