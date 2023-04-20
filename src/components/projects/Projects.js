import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    delay: 100,
  });
  return (
    <section
      ref={ref}
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div>
        {inView ? (
          <div className="visible">
            <div className="flex justify-center items-center text-center">
              <Title
                title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
                des="My Projects"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 ">
              <ProjectsCard
                title="SOCIAL MEDIA CLONE"
                des=""
                src={projectOne}
              />
              <ProjectsCard
                title="E-commerce Website"
                des=""
                src={projectTwo}
              />
              <ProjectsCard title="Chatting App" des="" src={projectThree} />
              <ProjectsCard
                title="SOCIAL MEDIA CLONE"
                des=""
                src={projectThree}
              />
              <ProjectsCard
                title="E-Commerce Website"
                des=""
                src={projectOne}
              />
              <ProjectsCard title="Chatting App" des="" src={projectTwo} />
            </div>
          </div>
        ) : (
          <div className="nonVisible">
            <div className="flex justify-center items-center text-center">
              <Title
                title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
                des="My Projects"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 ">
              <ProjectsCard
                title="SOCIAL MEDIA CLONE"
                des="Lorem, ipsum dolor sit amet consectetur adidossing 
          elit Explicabo qisnsn voludptate sopiente.volutpiotinsus jafrum quidem!"
                src={projectOne}
              />
              <ProjectsCard
                title="E-commerce Website"
                des="Lorem, ipsum dolor sit amet consectetur adidossing 
          elit Explicabo qisnsn voludptate sopiente.volutpiotinsus jafrum quidem!"
                src={projectTwo}
              />
              <ProjectsCard
                title="Chatting App"
                des="Lorem, ipsum dolor sit amet consectetur adidossing 
          elit Explicabo qisnsn voludptate sopiente.volutpiotinsus jafrum quidem!"
                src={projectThree}
              />
              <ProjectsCard
                title="SOCIAL MEDIA CLONE"
                des="Lorem, ipsum dolor sit amet consectetur adidossing 
          elit Explicabo qisnsn voludptate sopiente.volutpiotinsus jafrum quidem!"
                src={projectThree}
              />
              <ProjectsCard
                title="E-Commerce Website"
                des="Lorem, ipsum dolor sit amet consectetur adidossing 
          elit Explicabo qisnsn voludptate sopiente.volutpiotinsus jafrum quidem!"
                src={projectOne}
              />
              <ProjectsCard
                title="Chatting App"
                des="Lorem, ipsum dolor sit amet consectetur adidossing 
          elit Explicabo qisnsn voludptate sopiente.volutpiotinsus jafrum quidem!"
                src={projectTwo}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
