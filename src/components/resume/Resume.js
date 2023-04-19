import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import { useInView } from "react-intersection-observer";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    delay: 100,
  });

  return (
    <section
      ref={ref}
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div>
        {inView ? (
          <div className="visible">
            <div className="flex justify-center items-center text-center">
              <Title title="3+ Years of experience" des="My Resume" />
            </div>
            <div>
              <ul className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
                <li
                  onClick={() =>
                    setEducationData(true) &
                    setSkillData(false) &
                    setExperienceData(false)
                  }
                  className={`${
                    educationData
                      ? "border-designColor rounded-lg"
                      : "border-transparent"
                  } resumeLi`}
                >
                  Education{" "}
                </li>
                <li
                  onClick={() =>
                    setEducationData(false) &
                    setSkillData(true) &
                    setExperienceData(false)
                  }
                  className={`${
                    skillData
                      ? "border-designColor rounded-lg"
                      : "border-transparent"
                  } resumeLi`}
                >
                  Professional Skills
                </li>
                <li
                  onClick={() =>
                    setEducationData(false) &
                    setSkillData(false) &
                    setExperienceData(true)
                  }
                  className={`${
                    experienceData
                      ? "border-designColor rounded-lg"
                      : "border-transparent"
                  } resumeLi`}
                >
                  Experience
                </li>
              </ul>
            </div>
            {educationData && <Education />}
            {skillData && <Skills />}
            {experienceData && <Experience />}
          </div>
        ) : (
          <div className="nonVisible">
            <div className="flex justify-center items-center text-center">
              <Title title="3+ Years of experience" des="My Resume" />
            </div>
            <div>
              <ul className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
                <li
                  onClick={() =>
                    setEducationData(true) &
                    setSkillData(false) &
                    setExperienceData(false)
                  }
                  className={`${
                    educationData
                      ? "border-designColor rounded-lg"
                      : "border-transparent"
                  } resumeLi`}
                >
                  Education{" "}
                </li>
                <li
                  onClick={() =>
                    setEducationData(false) &
                    setSkillData(true) &
                    setExperienceData(false)
                  }
                  className={`${
                    skillData
                      ? "border-designColor rounded-lg"
                      : "border-transparent"
                  } resumeLi`}
                >
                  Professional Skills
                </li>
                <li
                  onClick={() =>
                    setEducationData(false) &
                    setSkillData(false) &
                    setExperienceData(true)
                  }
                  className={`${
                    experienceData
                      ? "border-designColor rounded-lg"
                      : "border-transparent"
                  } resumeLi`}
                >
                  Experience
                </li>
              </ul>
            </div>
            {educationData && <Education />}
            {skillData && <Skills />}
            {experienceData && <Experience />}
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
