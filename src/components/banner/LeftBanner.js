import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { useInView } from "react-intersection-observer";

const instagramUrl = "https://www.instagram.com/aldo_cornejo/";
const linkedinUrl =
  "https://www.linkedin.com/in/aldahir-cornejo-ambriz-729276249/";

export const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Dev.", "UI Designer.", "QA Test Dev.", "FullStackDev."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="w-full lgl:w-1/2 flex flex-col gap-5">
      {inView ? (
        <div>
          <div className=" revealAbove flex flex-col gap-5">
            <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
            <h1 className="text-6xl font-bold text-white">
              Hi, I'm{" "}
              <span className="text-designColor capitalize">Aldo Cornejo</span>
            </h1>
            <h2 className="text-4xl font-bold text-white">
              a <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide mb-10 lgl:mb-20">
              I am a full stack developer with skills in UI design and SDET
              (Software Development Engineer in Test) who can handle both the
              front-end and back-end of web development, design appealing and
              user-friendly interfaces, and write automated tests to ensure
              software quality. I am versatile and can handle various aspects of
              software development, from planning and designing to testing and
              deployment.I have a solid understanding of web technologies,
              programming languages, and software development methodologies,
              making them valuable assets to any tech team.
            </p>
          </div>
          <div className="revealLeft flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
            <div>
              <h2 className="text-base uppercase font-titleFont mb-4">
                Find me in
              </h2>
              <div className="flex gap-4 mb-4 lgl:mb-6">
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  <span className="bannerIcon">
                    <FaInstagram />
                  </span>
                </a>
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-base uppercase font-titleFont mb-4">
                BEST SKILL ON
              </h2>
              <div className="flex gap-4 lgl:mb-6">
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
      ) : (
        <div>
          <div className="hideAbove flex flex-col gap-5">
            <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
            <h1 className="text-6xl font-bold text-white">
              Hi, I'm{" "}
              <span className="text-designColor capitalize">Aldo Cornejo</span>
            </h1>
            <h2 className="text-4xl font-bold text-white">
              a <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide">
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I'm not
              adding motion just to spruce things up, but doing it in ways that.
            </p>
          </div>
          <div className=" hideLeft flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
            <div>
              <h2 className="text-base uppercase font-titleFont mb-4">
                Find me in
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
      )}
    </div>
  );
};

export default LeftBanner;
