import React from "react";
import { bannerImg } from "../../assets/index";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";

const RightBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div
      ref={ref}
      className=" w-full lgl:w-1/2 flex justify-center items-center relative"
    >
      {inView ? (
        <img
          className="hiddenReveal w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
          src={bannerImg}
          alt="bannerImg"
        />
      ) : (
        <img
          className="show w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
          src={bannerImg}
          alt="bannerImg"
        />
      )}
    </div>
  );
};

export default RightBanner;
