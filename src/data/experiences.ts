export interface Experience {
  id: string;
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-0",
    title: "Software Engineer Intern",
    company: "QCP Capital",
    dates: "Jan 2026 – May 2026", // TODO: update with actual dates
    bullets: [
      "Built a RAG-powered ticket generation system by chunking and embedding 3 core service repositories into a Chroma vector database with OpenAI embeddings, enabling semantic search over codebases to auto-generate structured ticket descriptions, reducing ambiguity in product requirements for the engineering team.",
      "Resolved a data integrity bug where unknown fields were silently dropped during deserialisation on round-trip API calls to a third-party service, implementing a passthrough map to preserve unmapped fields and ensure forward compatibility with evolving API contracts.",
      "Diagnosed and fixed a race condition causing duplicate OTP verification requests to AWS, tracing the root cause to unintended router remounts from a faulty useEffect dependency; refactored the feature flag guard into a reusable wrapper component scoped below the router to prevent cascading state propagation.",
      "Migrated legacy API calls across multiple services to current internal endpoints using feature-flag-based rollout for safe, zero-downtime deployment; investigated and resolved legacy event handling bugs that surfaced the need for broader service migration.",
      "Replaced nested conditional logic for client status transitions with a Spring State Machine, improving scalability and maintainability; also implemented event handlers for KYB form workflows, an S3 file upload endpoint, and async notifications for profile approval events.",
    ],
  },
  {
    id: "exp-1",
    title: "Backend Engineer Intern",
    company: "ShopBack",
    dates: "May 2025 – Dec 2025", // TODO: update with actual dates
    bullets: [
      "Scaled high-traffic service APIs used in core application flows, improving P95 latency by 20% through optimization techniques such as pagination and caching.",
      "Reduced database load by 30% through cache integration and query optimization for high-traffic endpoints.",
      "Refactored backend modules to remove circular dependencies and implemented feature-flag-based deployment flows for zero-downtime, multiple region releases.",
      "Reduced inter-service latency by replacing cross-subapp HTTP calls with internal function calls, improving request handling performance, and simplifying service boundaries.",
      "Improved and published core logging libraries (used by 6+ microservices) by adding regex-based redaction support and fixing incorrect regex handling, enhancing log security and observability across services.",
      "Enhanced AWS SQS message processing throughput by integrating a Fair Queue mechanism to ensure balanced event consumption across workers.",
    ],
  },
  {
    id: "exp-2",
    title: "AI Researcher",
    company: "NUS",
    dates: "May 2024 – Aug 2024", // TODO: update with actual dates
    bullets: [
      "Conducted literature review on Exposure Bias on Denoising Diffusion Probabilistic Models (DDPM).",
      "Designed and implemented three quantitative metrics using HuggingFace Diffusers/Transformers to evaluate exposure bias severity.",
      "Benchmarked models on external GPU clusters to analyze bias mitigation and training stability.",
    ],
  },
];
