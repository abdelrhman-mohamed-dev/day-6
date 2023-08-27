import React from "react";

const Card = ({ title, backGround }) => {
  return (
    <div
      className="h-64 w-72 rounded-md flex justify-center items-center "
      style={{ backgroundColor: `${backGround}` }}
    >
      <h1 className="text-3xl text-white font-medium pb-4 border-b-2 border-white">
        {title}
      </h1>
    </div>
  );
};

export default Card;
