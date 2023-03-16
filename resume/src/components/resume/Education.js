import React from "react";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full flex gap-20">
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2015-2021</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>
        <div
          className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black 
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
      </div>
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2020-2023</p>
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </div>
        <div
          className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black 
      border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Independent FreeLance (2023-Present)"
            result="USA"
            des="The Training provided by universities in order to prepare people to work 
          in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Front End Developer"
            subTitle="LPL Financial (2022-Present)"
            result="USA"
            des="Higher education is tertiary education leading to award of an academic 
          degree. Higher Education, also called post-secondary education"
          />
          <ResumeCard
            title="Software Developer Engineer in Test"
            subTitle="TechBee Solutions (2020-2022)"
            result="USA"
            des="Secondary Education or post-primary education covers two phases on the 
          International Standard Classification of Education scale"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
