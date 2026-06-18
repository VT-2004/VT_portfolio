"use client";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

const roles = ["Full Stack Developer", "AI/ML Engineer", "Next.js Enthusiast", "Open Source Builder"];

export default function Home() {
  const [ri, setRi] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [ci, setCi] = useState(0);

  useEffect(() => {
    const cur = roles[ri];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && ci <= cur.length) {
      t = setTimeout(() => { setDisplayed(cur.slice(0, ci)); setCi(c => c + 1); }, 80);
    } else if (!deleting && ci > cur.length) {
      t = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && ci >= 0) {
      t = setTimeout(() => { setDisplayed(cur.slice(0, ci)); setCi(c => c - 1); }, 40);
    } else {
      setDeleting(false);
      setRi(r => (r + 1) % roles.length);
      setCi(0);
    }
    return () => clearTimeout(t);
  }, [ci, deleting, ri]);

  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 8%", paddingTop: "80px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: "40px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "280px" }}>
            <p style={{ fontSize: "1.4rem", marginBottom: "12px" }}>
              Hi There! <span style={{ display: "inline-block", animation: "wave 2s infinite" }}>👋</span>
            </p>
            <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 700, marginBottom: "24px", lineHeight: 1.2 }}>
              I&apos;M <span style={{ color: "#a855f7" }}>VIKAS TALAWAR</span>
            </h1>
            <p style={{ fontSize: "clamp(1rem,2.5vw,1.3rem)", marginBottom: "40px", minHeight: "2rem" }}>
              {displayed}<span className="typing-cursor" />
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
              <Link href="/projects" className="btn-purple">View Projects</Link>
              <Link href="/resume" className="btn-outline">Download CV</Link>
            </div>
            <SocialLinks />
          </div>
          <div style={{
            width: "300px", height: "300px", borderRadius: "50%",
            border: "3px solid rgba(168,85,247,.6)",
            overflow: "hidden",
            animation: "float 4s ease-in-out infinite",
            boxShadow: "0 0 40px rgba(168,85,247,.25)",
          }}>
            <img
              src="/profile.jpeg"
              alt="Vikas Talawar"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", color: "#8b949e", fontSize: ".75rem" }}>
          <span>scroll down</span>
          <ArrowDown size={16} style={{ animation: "bounce-down 2s infinite" }} />
        </div>
      </section>

      {/* INTRODUCE MYSELF */}
      <section style={{ padding: "80px 8%", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, textAlign: "center", marginBottom: "48px", letterSpacing: ".05em" }}>
          LET ME <span style={{ color: "#a855f7" }}>INTRODUCE</span> MYSELF
        </h2>
        <div style={{ display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flexShrink: 0, width: "180px", height: "180px", borderRadius: "50%", border: "3px solid rgba(168,85,247,.5)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(168,85,247,.1)", fontSize: "5rem", margin: "0 auto" }}>
            🧑‍💻
          </div>
          <div style={{ flex: 1, minWidth: "280px" }}>
            <p style={{ lineHeight: "1.9", color: "#c9d1d9", fontSize: "1rem", marginBottom: "16px" }}>
              I&apos;m a <span style={{ color: "#a855f7", fontStyle: "italic", fontWeight: 600 }}>Full Stack Developer & AI/ML Engineer</span> who
              loves transforming ideas into reliable, scalable products. I&apos;ve built production-ready
              agentic AI systems and SaaS applications that solve real problems.
            </p>
            <p style={{ lineHeight: "1.9", color: "#c9d1d9", fontSize: "1rem", marginBottom: "16px" }}>
              I&apos;m proficient in <span style={{ color: "#a855f7", fontStyle: "italic", fontWeight: 600 }}>C++, JavaScript, TypeScript, Python</span> — working across both backend and frontend stacks.
            </p>
            <p style={{ lineHeight: "1.9", color: "#c9d1d9", fontSize: "1rem" }}>
              My key interests include <span style={{ color: "#a855f7", fontStyle: "italic", fontWeight: 600 }}>AI-powered Web Apps</span>, RAG pipelines, and LLM features using{" "}
              <span style={{ color: "#a855f7", fontStyle: "italic", fontWeight: 600 }}>Next.js, FastAPI & LangChain.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FIND ME ON */}
      <section style={{ padding: "60px 8%", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "8px" }}>Find Me On</h2>
        <p style={{ color: "#8b949e", marginBottom: "32px" }}>
          Feel free to <span style={{ color: "#a855f7" }}>connect</span> with me
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SocialLinks />
        </div>
      </section>
    </>
  );
}
