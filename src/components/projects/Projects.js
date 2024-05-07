import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
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
                title="YourPersonalWebDev.com"
                des="My Agency"
                src={projectFour}
                link="https://yourpersonalwebdev.com/"
                githubLink="https://github.com/aldocornejo138/yourPersonalWebDev"
              />
              <ProjectsCard
                title="Ivan Fountain Service"
                des="Landing Page"
                src={projectOne}
                link="https://ivanfountainservice.com/"
                githubLink="https://github.com/aldocornejo138/ivan_fountain_service"
              />
              <ProjectsCard
                title="Hecho Por Jenny"
                des="E-Commerce Website"
                src={projectTwo}
                link="https://hecho-por-jenny.vercel.app/"
                githubLink="https://github.com/aldocornejo138/hecho.por.jenny"
              />
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
