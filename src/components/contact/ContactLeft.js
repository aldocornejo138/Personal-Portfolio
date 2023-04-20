import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const instagramUrl = "https://www.instagram.com/aldo_cornejo/";
const linkedinUrl =
  "https://www.linkedin.com/in/aldahir-cornejo-ambriz-729276249/";

const ContactLeft = () => {
  return (
    <div
      className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 
              rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center"
    >
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className=" text-3xl font-bold text-white">Aldahir Cornejo</h3>
        <p className=" text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Hello, I'm a versatile full stack developer with skills in UI design
          and SDET, who can handle various aspects of Software Development.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+1 (951) 795-3173</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText"> aldocornejo138@yahoo.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find Me In</h2>
        <div className="flex gap-4">
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
    </div>
  );
};

export default ContactLeft;
