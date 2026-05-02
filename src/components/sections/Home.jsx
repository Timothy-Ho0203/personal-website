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
          className="text-center z-10 px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          <div className="profile-container p-2 flex-shrink-0">
            <img className="profile-picture" src={profilePic} alt="Me" />
          </div>
          
          <div className="flex-1">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 
                bg-clip-text text-transparent px-2 md:px-4"
            >
              Hi, I'm Timothy.
            </h1>

            <p 
              className="text-gray-700 text-base sm:text-lg mb-6 md:mb-8 max-w-lg mx-auto px-2"
            >
              I'm a Year 3 Computer Science student at NUS, passionate about AI, Software Development and creating technology-driven solutions.

            </p>
            <div
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2"
            >
              <a 
                href="#projects"
                className="bg-blue-500 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded font-medium transition relative overflow-hidden 
                  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/80 w-full sm:w-auto text-center"
              >
                View Projects
              </a>
              <a 
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-2.5 sm:py-3 px-5 sm:px-6 rounded font-medium transition-all duration-200 
                  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/20 w-full sm:w-auto text-center"
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