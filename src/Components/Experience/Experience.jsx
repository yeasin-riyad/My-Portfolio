import React from "react";
import { FaJs, FaReact, FaNode, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <p className="text-sm md:text-lg text-gray-400 mt-2">
        I don't have any professional work experience yet, but I have worked with various technologies to build dynamic and scalable web applications.
      </p>
      <div className="flex flex-wrap items-center justify-around mt-8">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#06B6D4" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNode color="#339933" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <span className="text-white text-xl">Express.js</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <span className="text-white text-xl">Next.js</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <span className="text-white text-xl">Redux Toolkit</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
