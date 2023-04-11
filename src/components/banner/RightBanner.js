import React from "react";
import { bannerImg } from "../../assets/index";
import { useInView } from "react-intersection-observer";

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
          className="revealRight w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
          src={bannerImg}
          alt="bannerImg"
        />
      ) : (
        <img
          className="hideRight  w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
          src={bannerImg}
          alt="bannerImg"
        />
      )}
    </div>
  );
};

export default RightBanner;
