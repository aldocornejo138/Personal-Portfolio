import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px]
        border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Business Strategy"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic conseqununat repelllends ad."
        />
        <Card
          title="App Development"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic conseqununat repelllends ad."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimization"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic conseqununat repelllends ad."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic conseqununat repelllends ad."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic conseqununat repelllends ad."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic conseqununat repelllends ad."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
