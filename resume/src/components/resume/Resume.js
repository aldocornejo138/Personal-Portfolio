import React from "react";
import Title from "../layouts/Title";
import ResumeCard from "../resume/ResumeCard";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="5+ Years of experience" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li className="resumeLi">Education </li>
          <li className="resumeLi">Professional Skill</li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">Achievements </li>
        </ul>
      </div>
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">2015-2021</p>
        <h2 className="text-4xl font-bold">Education Quality</h2>
      </div>
      <div
        className="mt-14 w-1/2 h-[1000px] border-l-[6px] border-l-black 
      border-opacity-30 flex flex-col gap-10"
      >
        <ResumeCard
          title="BS-Computer Science"
          subTitle="California State University San Marcos (2017-2021)"
          result="3.4/4.0"
          des="The Training provided by universities in order to prepare people to work 
          in various sectors of the economy or areas of culture."
        />
        <ResumeCard
          title="AS - Associate in Science"
          subTitle="Mount San Jacinto College (2015-2017)"
          result="3.7/4.0"
          des="Higher education is tertiary education leading to award of an academic 
          degree. Higher Education, also called post-secondary education"
        />
        <ResumeCard
          title="High School"
          subTitle="Murrieta Valley High School (2011-2015)"
          result="3.8/4.0"
          des="Secondary Education or post-primary education covers two phases on the 
          International Standard Classification of Education scale"
        />
      </div>
    </section>
  );
};

export default Resume;
