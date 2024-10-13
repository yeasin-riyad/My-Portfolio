import { Link } from "react-scroll"; 
import cseImg from "../../assets/post Linkedin.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center gap-x-9 p-10 md:p-20">
      <div className=" md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <h1 className="text-sm mt-1 md:text-xl">Junior <span className="font-bold">MERN Stack Developer</span>.</h1>
        <p className="text-sm md:text-xl mt-6 tracking-tight">
          I'm a passionate and dedicated <span className="font-bold">MERN Stack developer</span> with a strong
          foundation in modern web technologies. My expertise lies in building
          dynamic, responsive, and scalable applications using:
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-bold">JavaScript:</span> Crafting seamless
              user experiences with efficient code.
            </li>
            <li>
              <span className="font-bold">React.js:</span> Developing interactive and intuitive front-end interfaces.
            </li>
            <li>
              <span className="font-bold">Next.js:</span> Enhancing performance with server-side rendering and static generation.
            </li>
            <li>
              <span className="font-bold">Redux Toolkit:</span> Efficient state management for complex applications.
            </li>
            <li>
              <span className="font-bold">Express.js & Node.js:</span> Creating robust back-end services and RESTful APIs.
            </li>
            <li>
              <span className="font-bold">MongoDB:</span> Managing and structuring data with NoSQL.
            </li>
          </ul>
          <p className="text-sm md:text-xl mt-6 tracking-tight">
            I am also experienced with <span className="font-bold">NextAuth</span> for authentication and
            maintaining secure, scalable applications. Whether it's building a
            full-stack app or integrating third-party APIs, I'm committed to
            delivering high-quality code and user-friendly experiences.
          </p>
        </p>
        {/* Smooth scroll to the footer section */}
        <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] cursor-pointer"
        >
        <Link 
          to="Footer"
          smooth={true}
          duration={500}
        >
          Contact Me
        </Link>
        </button>
      </div>

      <div className="md:w-full">
        <img
          className="h-60 object-cover  md: mt-10 md:mt-0 rounded-lg md:h-96"
          src={"https://i.ibb.co.com/z5LvzFk/developer.jpg"}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Home;
