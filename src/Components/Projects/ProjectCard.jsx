import React from "react";

const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      {/* Corrected Image URL */}
      <img
        className="p-4"
        src="https://i.ibb.co/8sDvcc5/20190731-Pic-Blogbeitrag-Onboarding.webp"
        alt="Project"
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        {/* Correct linking for the "Demo" using anchor tag */}
        <a
          href="https://my-assets-management-app.web.app/"
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          target="_blank" // Open in a new tab
          rel="noopener noreferrer"
        >
          Demo
        </a>
        {/* Placeholder button for "Source Code" */}
        <a href="https://github.com/yeasin-riyad/Asset-Management-System-Client" className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
