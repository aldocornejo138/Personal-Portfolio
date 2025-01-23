import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            Job Experience
          </h2>
        </div>
        <div
          className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black 
      border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Founder and Lead Developer"
            subTitle="SEODevLeads.com"
            result="USA"
            des="Built custom websites using Next.js, optimizing performance and SEO to deliver fast, responsive, and search-engine-friendly solutions."
          />
          <ResumeCard
            title="Full Stack Software Developer"
            subTitle="Independent FreeLance (2022-Present)"
            result="USA"
            des="I build and maintain scalable web applications, developing both front-end and back-end systems to deliver seamless user experiences."
          />
          <ResumeCard
            title="Software Developer Engineer in Test"
            subTitle="TechBee Solutions (2021-2023)"
            result="USA"
            des="Built automation frameworks, optimize testing, integrate CI/CD, and enhance software quality."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl  font-bold uppercase">
            Trainer Experience
          </h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="Freelance Work (2022 - Present)"
            result="CALIFORNIA"
            des="Taught Web Development locally with a high focus on React and JavaScript."
          />
          <ResumeCard
            title="School Teacher (Sub)"
            subTitle="Scoot Education (2021 - 2023)"
            result="CALIFORNIA"
            des="Subbed as a teacher either for Elementary, Middle, or High School under the agency when not under a contract."
          />
          <ResumeCard
            title="Independent Piano Teacher"
            subTitle="Freelance Work (2015-2020)"
            result="CALIFORNIA"
            des="Taught Piano Independently with a high focus on Music Theory and Creativity."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
