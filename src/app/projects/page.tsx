import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "AI Code Review Assistant",
    subtitle: "Agentic RAG Pipeline for Automated Code Analysis",
    description:
      "Agentic code review system using RAG pipeline with ChromaDB vector store. Processes GitHub repositories end-to-end with multi-step LLM reasoning via Groq Llama 3.1. Scored a real codebase 63/100 and identified critical security issues while reducing API calls by 70% using intelligent chunking.",
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "SBERT",
      "Groq AI",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/VT-2004/ai-code-review-assistant",
    demo: null,
    emoji: "🤖",
    highlights: [
      "63/100 real codebase score",
      "70% fewer API calls",
      "10k+ line codebase search",
    ],
  },
  {
    title: "Multi-Agent Dev Assistant",
    subtitle: "Autonomous AI System for GitHub Issue Resolution",
    description:
      "Autonomous AI system that reads GitHub issues, generates code fixes using a LangGraph multi-agent pipeline, and automatically opens pull requests. Specialized agents collaborate across planning, coding, and review stages with full execution traceability.",
    tech: [
      "Python",
      "LangGraph",
      "Groq AI",
      "ChromaDB",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "GitHub API",
    ],
    github: "https://github.com/VT-2004/multi-agent-dev-assistant",
    demo: null,
    emoji: "🦾",
    highlights: [
      "Auto PR generation",
      "LangGraph multi-agent",
      "GitHub Issues → Code",
    ],
  },
  {
    title: "Resume-JD Matcher",
    subtitle: "AI-Powered Resume Scoring System",
    description:
      "Fine-tuned SBERT on 853 resume-job description pairs achieving 0.886 Pearson correlation. Combines semantic similarity, TF-IDF keyword matching, and skill-gap analysis across 73,000+ ESCO skill terms with a live HuggingFace deployment.",
    tech: [
      "Python",
      "SBERT",
      "TF-IDF",
      "Streamlit",
      "HuggingFace",
      "scikit-learn",
      "PyMuPDF",
    ],
    github: "https://github.com/VT-2004/resume-matcher",
    demo: "https://huggingface.co/spaces/VIKAS098765/resume-matcher",
    emoji: "📄",
    highlights: [
      "0.886 Pearson correlation",
      "73k+ ESCO skills",
      "Live HuggingFace demo",
    ],
  },
  {
    title: "FlashAI",
    subtitle: "AI-Powered Flashcard Generator",
    description:
      "Full-stack AI flashcard platform generating structured study cards in under 3 seconds using Groq Llama 3.1. Built with a scalable service-controller architecture, JWT authentication, Zod validation, and MongoDB session tracking.",
    tech: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Groq AI",
      "Clerk",
      "Zod",
      "Tailwind CSS",
    ],
    github: "https://github.com/VT-2004/AI-Flashcard-generator",
    demo: "https://ai-flashcard-generator-one.vercel.app",
    emoji: "⚡",
    highlights: [
      "<3s card generation",
      "8 typed REST endpoints",
      "JWT secured API",
    ],
  },
  {
  title: "Risk & Position Size Calculator",
  subtitle: "Trading Risk Management & Position Sizing Tool",
  description:
    "A practical trading utility that calculates optimal position size, capital allocation, amount at risk, percentage of account exposure, and risk-to-reward ratio for both long and short trades. Includes intelligent trade validation, multi-currency support, and visual risk categorization to simplify disciplined trade execution.",
  tech: [
    "Next.js 14",
    "React 18",
    "JavaScript",
    "CSS Modules",
    "App Router",
  ],
  github: "https://github.com/VT-2004/Assignment_digitalheros",
  demo: "https://assignment-digitalheros.vercel.app/",
  emoji: "📈",
  highlights: [
    "Long & Short support",
    "Risk:Reward calculator",
    "Multi-currency",
  ],
},
  {
    title: "MovieVerse",
    subtitle: "Movie Discovery & Review Platform",
    description:
      "Responsive movie discovery application built with React and Tailwind CSS featuring dynamic search, state management, and an intuitive user interface. Optimized rendering and interactions improve browsing performance by 30% over the baseline implementation.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
    ],
    github: "https://github.com/VT-2004/MovieVerse",
    demo: null,
    emoji: "🎬",
    highlights: [
      "30% faster UI",
      "Dynamic search",
      "Rich movie data",
    ],
  },
];

export default function Projects() {
  return (
    <section
      style={{
        padding: "120px 6% 80px",
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1.8rem,4vw,2.5rem)",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "12px",
        }}
      >
        My Recent <span style={{ color: "#a855f7" }}>Works</span>
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#8b949e",
          marginBottom: "16px",
          fontSize: "1rem",
        }}
      >
        Here are a few projects I've worked on recently.
      </p>

      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <a
          href="https://github.com/VT-2004"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ fontSize: ".85rem" }}
        >
          <Github size={15} />
          View All on GitHub
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
          gap: "28px",
        }}
      >
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <div
              style={{
                padding: "36px 24px 20px",
                textAlign: "center",
                background:
                  "linear-gradient(180deg,rgba(168,85,247,.09) 0%,transparent 100%)",
                fontSize: "3.5rem",
              }}
            >
              {p.emoji}
            </div>

            <div
              style={{
                padding: "0 22px 26px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  marginBottom: "3px",
                }}
              >
                {p.title}
              </h3>

              <p
                style={{
                  fontSize: ".78rem",
                  color: "#a855f7",
                  marginBottom: "12px",
                  fontStyle: "italic",
                }}
              >
                {p.subtitle}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "12px",
                }}
              >
                {p.highlights.map((h) => (
                  <span
                    key={h}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: ".7rem",
                      color: "#a855f7",
                      background: "rgba(168,85,247,.1)",
                      padding: "2px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    <Star size={9} />
                    {h}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontSize: ".86rem",
                  color: "#8b949e",
                  lineHeight: "1.7",
                  marginBottom: "16px",
                  flex: 1,
                }}
              >
                {p.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "20px",
                }}
              >
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-purple"
                  style={{
                    fontSize: ".82rem",
                    padding: "8px 16px",
                  }}
                >
                  <Github size={14} />
                  GitHub
                </a>

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{
                      fontSize: ".82rem",
                      padding: "8px 16px",
                    }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
