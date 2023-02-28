import React from "react";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-center border-b-[1px] font-titleFont
        border-b-black"
    >
      <div>
        <div>
          <h4 className="text-lg font-normal"> WELCOME TO MY WORLD </h4>
          <h1 className="text-6xl font-bold text-white ">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Aldahir Cornejo</span>
          </h1>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Banner;
