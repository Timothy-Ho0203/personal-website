import { RevealOnScroll } from "../RevealOnScroll";
import { InfoCard } from "../InfoCard";
import { experiences } from "../../data/experiences";

export const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl w-full mx-auto px-4 text-black">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Work Experience
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp) => (
              <div key={exp.id} id={exp.id} className="flex items-start gap-6">
                {/* Dot marker */}
                <div className="flex-shrink-0 w-10 flex justify-center pt-2 relative z-10">
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-blue-400" />
                </div>

                {/* Card */}
                <div className="flex-1">
                  <RevealOnScroll>
                    <InfoCard className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                        <h4 className="font-semibold">
                          {exp.title} | {exp.company}
                        </h4>
                        <span className="text-xs text-gray-400 whitespace-nowrap">
                          {exp.dates}
                        </span>
                      </div>
                      <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i}>• {bullet}</li>
                        ))}
                      </ul>
                    </InfoCard>
                  </RevealOnScroll>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
