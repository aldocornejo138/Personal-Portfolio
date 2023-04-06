import React from "react";
import { bannerImg } from "../../assets/index";
import Fade from "react-reveal/Fade";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <Fade bottom delay={1000}>
        <img
          className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
          src={bannerImg}
          alt="bannerImg"
        />
      </Fade>
    </div>
  );
};

export default RightBanner;
