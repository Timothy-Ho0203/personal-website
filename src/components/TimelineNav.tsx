import { useEffect, useState } from "react";
import { experiences } from "../data/experiences";

export const TimelineNav = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show/hide based on whether the #experience section is in view
    const section = document.getElementById("experience");
    const sectionObserver = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (section) sectionObserver.observe(section);

    // Track which card is active as the user scrolls
    const cardObservers = experiences.map((exp, i) => {
      const el = document.getElementById(exp.id);
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.4 }
      );
      if (el) obs.observe(el);
      return obs;
    });

    return () => {
      sectionObserver.disconnect();
      cardObservers.forEach((o) => o.disconnect());
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-6 transition-opacity duration-300 hidden sm:flex ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {experiences.map((exp, i) => (
        <button
          key={exp.id}
          onClick={() => scrollTo(exp.id)}
          className="flex items-center gap-2 cursor-pointer group"
          aria-label={`Scroll to ${exp.company}`}
        >
          {/* Label */}
          <span
            className={`text-xs transition-all duration-200 ${
              activeIndex === i
                ? "text-blue-500 font-semibold"
                : "text-gray-400 group-hover:text-gray-600"
            }`}
          >
            {exp.company}
          </span>

          {/* Dot */}
          <div
            className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-200 ${
              activeIndex === i
                ? "border-blue-500 bg-blue-500 scale-125"
                : "border-gray-300 bg-white group-hover:border-gray-500"
            }`}
          />
        </button>
      ))}
    </div>
  );
};
