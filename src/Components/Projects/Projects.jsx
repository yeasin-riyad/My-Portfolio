import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className=" text-white  ">
      <h1 className="text-2xl flex justify-center  md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex justify-center gap-5">
        <ProjectCard
          title="Assets Management Website"
          main="this is a Asset Management website created in React.js, Express.js, MongoDb Database, FireBase Authentication and used some component library."
        />
        {/* <ProjectCard
          title="Youtue Clone"
          main="this is a bloggin website created in next js and used some component library used some component library"
        />
        <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
