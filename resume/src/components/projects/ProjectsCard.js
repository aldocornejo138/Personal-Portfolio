import React from "react";

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div
      className="w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col 
    bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
    hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg ">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5">
        <h3> {title}</h3>
      </div>
    </div>
  );
};

export default ProjectsCard;
