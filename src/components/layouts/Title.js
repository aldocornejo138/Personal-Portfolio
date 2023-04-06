import React from "react";
import Pulse from "react-reveal/Pulse";

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <Pulse>
        <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
          {title}
        </h3>
        <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
          {des}
        </h1>
      </Pulse>
    </div>
  );
};

export default Title;
