import { RevealOnScroll } from "../RevealOnScroll";
import { Cheatsheets } from "../Cheatsheets";
import { InfoCard } from "../InfoCard";

export const About = () => {
  const skills = ["React", "TailwindCSS", "Node.js", "Python", "PostgreSQL", "Express", "TypeScript", "Java", "Spring Boot", "NestJS", "Docker", "Kubernetes", "AWS", "Git"];

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
          <InfoCard className="p-4 sm:p-6 md:p-8">
            <p className="text-black mb-4 md:mb-6 text-sm sm:text-base">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="rounded-xl p-4 md:p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((tech, key) => (
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
          </InfoCard>

          <div className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-8">
            <InfoCard title="Education" className="p-4 sm:p-6">
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
            </InfoCard>


          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
