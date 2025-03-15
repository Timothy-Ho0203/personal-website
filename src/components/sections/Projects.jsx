import {RevealOnScroll} from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section 
      id="projects" 
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          > 
            Featured Projects 
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
            <div 
              className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 
                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2"> 
                NUS Datathon 
              </h3>
              <p className="text-black mb-4"> 
                NUS Datathon Cat A that aims to create an efficient Financial Agent Recommendation System
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python, Pandas, HuggingFace"].map((tech, key) => (
                  <span 
                    key={key} 
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                  {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a 
                  href="https://github.com/Timothy-Ho0203/nus_datathon/tree/main" 
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                > 
                  View Project 
                </a>
              </div>
            </div>

            <div 
              className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 
                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2"> 
                Smart Glasses Bootcamp 
              </h3>
              <p className="text-black-400 mb-4"> 
                AI Item Recommendation Smart Glasses using Microsoft Hololens 2
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Unity", "C#"].map((tech, key) => (
                  <span 
                    key={key} 
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                  {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a 
                  href="https://github.com/Timothy-Ho0203/TOM-Client-Unity" 
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                > 
                  View Project 
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}