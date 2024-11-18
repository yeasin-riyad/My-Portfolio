import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className=" text-white  ">
      <h1 className="text-2xl flex justify-center  md:text-4xl text-white font-bold">
        Projects
      </h1>
      <div className="py-12 px-8 flex justify-center gap-5">
        <ProjectCard
          title="Assets Management Website"
          main="this is a Asset Management website created in React.js, Express.js, MongoDb Database, FireBase Authentication and used some component library."
          img="https://i.ibb.co/8sDvcc5/20190731-Pic-Blogbeitrag-Onboarding.webp"
          demoLink={"https://my-assets-management-app.web.app/"}
          sourceLink={
            "https://github.com/yeasin-riyad/Asset-Management-System-Client"
          }
        />
        <ProjectCard
          title="Restaurant Management App"
          main="this is a Restaurant Management app created in React.js and Tailwind Css.Welcome to the Restaurant Management project! This web application allows users to manage restaurant-related operations and enhance customer experience with features like table booking, contact forms, and more."
          img={
            "https://i.ibb.co.com/ydQ181k/pexels-bertellifotografia-16120160-1.jpg"
          }
          demoLink={"https://restaurant-management-8rji.vercel.app/"}
          sourceLink={"https://github.com/yeasin-riyad/Restaurant-Management"}
        />
        {/* <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
