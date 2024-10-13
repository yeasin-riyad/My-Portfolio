import cseImg from "../../assets/linkCover.webp";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row overflow-hidden items-center justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12"
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="w-full h-64 md:h-80 object-cover rounded-lg"
          src={cseImg}
          alt="About img"
        />
      </div>

      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <ul>
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-full md:w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Frontend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Specializing in building interactive and user-friendly web
                interfaces using <span className="font-bold">JavaScript</span>,{" "}
                <span className="font-bold">React.js</span>, and{" "}
                <span className="font-bold">Next.js</span>. I focus on creating
                seamless user experiences with high performance and
                responsiveness.
              </p>
            </span>
          </div>

          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-full md:w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Experienced in building robust back-end services and
                RESTful APIs using <span className="font-bold">Node.js</span> and{" "}
                <span className="font-bold">Express.js</span>. I ensure
                efficient handling of data and secure server-side operations.
              </p>
            </span>
          </div>

          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-full md:w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Database Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Skilled in working with <span className="font-bold">MongoDB</span>,
                a NoSQL database, for managing and structuring data. I focus
                on delivering efficient database solutions for scalable
                applications.
              </p>
            </span>
          </div>

          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-full md:w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Authentication and State Management
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Proficient in handling secure authentication flows using{" "}
                <span className="font-bold">NextAuth</span> and managing complex
                application states with <span className="font-bold">Redux Toolkit</span>.
                I ensure seamless integration and user authentication for
                scalable, secure applications.
              </p>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
