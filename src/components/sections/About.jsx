import { RevealOnScroll } from "../RevealOnScroll";
import { Cheatsheets } from "../Cheatsheets";

export const About = () => {
  const frontendSkills = ["React", "TypeScript", "TailwindCSS"];

  const backendSkills = ["Node.js", "Python", "PostgreSQL", "Express"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 text-black">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About me
          </h2>
          <div className="rounded-xl p-4 sm:p-6 md:p-8 border-black/10 border hover:-translate-y-1 transition-all">
            <p className="text-black mb-4 md:mb-6 text-sm sm:text-base">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-xl p-4 md:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-4 md:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="p-4 sm:p-6 rounded-xl border-black/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                Education
              </h3>
              <ul className="list-disc list-inside text-black-300 space-y-2 text-sm sm:text-base">
                <li>
                  <strong> B.S in Computer Science </strong> - National
                  University of Singapore (2023 - Present) <br />
                  <span className="text-sm">
                    <strong>Relevant Courses:</strong>
                    <br />
                    Object Oriented Programming
                    <br />
                    Data Structures and Algorithms
                    <br />
                    Databases
                    <br />
                    Computer Networks
                    <br />
                    Computer Organisation
                    <br />
                    Operating System
                    <br />
                    Software Engineering
                    <br />
                    AI and Machine Learning
                    <br />
                  </span>
                  <Cheatsheets />
                </li>
              </ul>
            </div>

            <div className="p-4 sm:p-6 rounded-xl border-black/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                Work Experience
              </h3>
              <div className="space-y-4 text-black-300 text-sm sm:text-base">
                <div>
                  <h4 className="font-semibold"> AI Researcher at NUS </h4>
                  <p className="text-sm sm:text-base">
                    • Researched and presented a literature review on Exposure
                    Bias problem prevalent in Large Language Models (LLM),
                    particularly Denoising Diffusion Probabilistic Models (DDPM)
                    <br />
                    • Implemented and recorded 3 different metrics to evaluate
                    the seriousness of exposure bias and attempted to quantify
                    it
                    <br />• Incorporated metrics with HuggingFace Diffusers and
                    Transformers and tested them on external GPUs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
