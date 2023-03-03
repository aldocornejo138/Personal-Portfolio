import React from "react";

const Title = (title, des) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        Features
      </h3>
      <h1 className="text-5xl text-gray-300 font-bold capitalize">What I Do</h1>
    </div>
  );
};

export default Title;
