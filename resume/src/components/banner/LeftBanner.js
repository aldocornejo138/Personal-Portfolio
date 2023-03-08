import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

export const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional coder.",
      "Full Stack Developer.",
      "Automation Developer (SDET).",
      "TSLA BULL!!!!.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-2/3 flex flex-col gap-20">
      <div className=" flex flex-col gap-5">
        <h4 className="text-lg font-normal"> WELCOME TO MY WORLD </h4>
        <h1 className="text-6xl font-bold text-white ">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Aldo Cornejo</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span> {text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic conseqununat repelllends ad.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Atque soluta hic conseqununat repelllends ad.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic
          conseqununat repelllends ad.
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            FIND ME IN
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
