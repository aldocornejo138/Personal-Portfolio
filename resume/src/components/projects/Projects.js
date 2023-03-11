import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-14 ">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem, ipsum dolor sit amet consectetur adidossing elit Explicabo qisnsn voludptate sopiente.volutpiotinsus jafrum quidem!"
          src={projectOne}
        />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </section>
  );
};

export default Projects;
