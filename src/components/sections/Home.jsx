import {RevealOnScroll} from "../RevealOnScroll";
import profilePic from "../../assets/profilepic.jpg";

export const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify justify-center relative"
    >
      <RevealOnScroll>
        <div 
          className="text-center z-10 px-4 align-items-center flex flex-row"
        >
          <div className="profile-container p-2">
            <img className="profile-picture" src={profilePic} alt="Me" />
          </div>
          
          <div>
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 
                bg-clip-text text-transparent leading-right px-10"
            >
              Hi, I'm Timothy.
            </h1>

            <p 
              className="text-gray-700 text-lg mb-8 max-w-lg mx-auto"
            >
              I'm a Year 2 Computer Science student at NUS, passionate about AI, Software Development and creating technology-driven solutions.

            </p>
            <div
              className="flex justify-center space-x-4"
            >
              <a 
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/80"
              >
                View Projects
              </a>
              <a 
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/20"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}