import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2x1 mx-auto px-10">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
      </div>
    </div>
  );
}

export default App;
