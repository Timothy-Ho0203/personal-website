import { RevealOnScroll } from "../RevealOnScroll";
import { InfoCard } from "../InfoCard";

export const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 text-black">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Work Experience
          </h2>

          <div className="flex flex-col gap-4 md:gap-6">
            <InfoCard className="p-4 sm:p-6">
              <h4 className="font-semibold mb-2">Backend Engineer Intern at ShopBack</h4>
              <p className="text-sm sm:text-base text-black-300">
                • Scaled high-traffic service APIs used in core application flows, improving P95
                latency by 20% through optimization techniques such as pagination and caching.
                <br />
                • Reduced database load by 30% through cache integration and query optimization
                for high-traffic endpoints.
                <br />
                • Refactored backend modules to remove circular dependencies and implemented
                feature-flag-based deployment flows for zero-downtime, multiple region releases.
                <br />
                • Reduced inter-service latency by replacing cross-subapp HTTP calls with internal
                function calls, improving request handling performance, and simplifying service
                boundaries.
                <br />
                • Improved and published core logging libraries (used by 6+ microservices) by
                adding regex-based redaction support and fixing incorrect regex handling, enhancing
                log security and observability across services.
                <br />
                • Enhanced AWS SQS message processing throughput by integrating a Fair Queue
                mechanism to ensure balanced event consumption across workers.
              </p>
            </InfoCard>

            <InfoCard className="p-4 sm:p-6">
              <h4 className="font-semibold mb-2">AI Researcher at NUS</h4>
              <p className="text-sm sm:text-base text-black-300">
                • Conducted literature review on Exposure Bias on Denoising Diffusion Probabilistic
                Models (DDPM).
                <br />
                • Designed and implemented three quantitative metrics using HuggingFace
                Diffusers/Transformers to evaluate exposure bias severity.
                <br />
                • Benchmarked models on external GPU clusters to analyze bias mitigation and
                training stability.
              </p>
            </InfoCard>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
