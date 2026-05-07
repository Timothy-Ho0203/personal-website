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
              <h4 className="font-semibold mb-2">Software Engineer Intern | QCP Capital</h4>
              <p className="text-sm sm:text-base text-black-300">
                • Built a RAG-powered ticket generation system by chunking and embedding 3 core
                service repositories into a Chroma vector database with OpenAI embeddings, enabling
                semantic search over codebases to auto-generate structured ticket descriptions,
                reducing ambiguity in product requirements for the engineering team.
                <br />
                • Resolved a data integrity bug where unknown fields were silently dropped during
                deserialisation on round-trip API calls to a third-party service, implementing a
                passthrough map to preserve unmapped fields and ensure forward compatibility with
                evolving API contracts.
                <br />
                • Diagnosed and fixed a race condition causing duplicate OTP verification requests
                to AWS, tracing the root cause to unintended router remounts from a faulty useEffect
                dependency; refactored the feature flag guard into a reusable wrapper component
                scoped below the router to prevent cascading state propagation.
                <br />
                • Migrated legacy API calls across multiple services to current internal endpoints
                using feature-flag-based rollout for safe, zero-downtime deployment; investigated
                and resolved legacy event handling bugs that surfaced the need for broader service
                migration.
                <br />
                • Replaced nested conditional logic for client status transitions with a Spring State
                Machine, improving scalability and maintainability; also implemented event handlers
                for KYB form workflows, an S3 file upload endpoint, and async notifications for
                profile approval events.
              </p>
            </InfoCard>

            <InfoCard className="p-4 sm:p-6">
              <h4 className="font-semibold mb-2">Backend Engineer Intern | ShopBack</h4>
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
              <h4 className="font-semibold mb-2">AI Researcher | NUS</h4>
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
