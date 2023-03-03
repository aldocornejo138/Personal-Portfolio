import React from "react";
import { LeftBanner } from "./LeftBanner";
import { bannerImg } from "../../assets/index";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-20 flex items-center border-b-[1px] font-titleFont
        border-b-black"
    >
      <LeftBanner />

      <div className="w-1/2 flex justify-center items-center relative">
        <img
          className="w-[500px] h-[680px] z-10"
          src={bannerImg}
          alt="bannerImg"
        />
      </div>
    </section>
  );
};

export default Banner;
