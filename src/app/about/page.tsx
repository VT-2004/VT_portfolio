import SocialLinks from "@/components/SocialLinks";

const skills = [
  "C++","JavaScript","TypeScript","Python",
  "React.js","Next.js","Node.js","Express.js","FastAPI",
  "LangChain","MongoDB","PostgreSQL","Firebase","ChromaDB",
  "Tailwind CSS","shadcn/ui","Streamlit",
  "Groq AI","SBERT","scikit-learn","HuggingFace","TF-IDF",
  "Docker","Git","AWS","Vercel","Render",
  "Clerk","Zod","Convex","GitHub Actions",
];

const tools = ["VS Code","Google Chrome","GitHub","Postman","Vercel","HuggingFace Spaces"];

const hobbies = [
  { emoji:"🎮", label:"Playing Games" },
  { emoji:"📚", label:"Reading Tech Blogs" },
  { emoji:"🏋️", label:"Working Out" },
  { emoji:"🎵", label:"Listening to Music" },
  { emoji:"💡", label:"Building Side Projects" },
];

export default function About() {
  return (
    <>
      {/* KNOW WHO I AM */}
      <section style={{ padding:"120px 8% 60px",position:"relative",zIndex:1 }}>
        <h1 style={{ fontSize:"clamp(1.8rem,4vw,2.5rem)",fontWeight:700,textAlign:"center",marginBottom:"60px" }}>
          Know Who <span style={{ color:"#a855f7" }}>I&apos;M</span>
        </h1>
        <div style={{ display:"flex",gap:"60px",alignItems:"flex-start",flexWrap:"wrap" }}>
          <div style={{ flex:1,minWidth:"280px" }}>
            <p style={{ lineHeight:"2",color:"#c9d1d9",fontSize:"1rem",marginBottom:"14px" }}>
              Hi everyone! I&apos;m{" "}
              <span style={{ color:"#a855f7" }}>Vikas Hanamant Talawar</span> from{" "}
              <span style={{ color:"#a855f7" }}>Bengaluru, India.</span>
            </p>
            <p style={{ lineHeight:"2",color:"#c9d1d9",fontSize:"1rem",marginBottom:"14px" }}>
              I&apos;m a{" "}
              <span style={{ color:"#a855f7" }}>Full Stack Developer & AI/ML Engineer</span>{" "}
              skilled in Next.js, FastAPI, and MongoDB — building production-ready agentic AI
              systems and scalable SaaS applications.
            </p>
            <p style={{ lineHeight:"2",color:"#c9d1d9",fontSize:"1rem",marginBottom:"14px" }}>
              I hold a{" "}
              <span style={{ color:"#a855f7" }}>B.Tech in CSE (AI & Data Science)</span> from{" "}
              <span style={{ color:"#a855f7" }}>IIITM Manipur</span> (CPI: 7.51/10).
            </p>
            <p style={{ lineHeight:"2",color:"#c9d1d9",fontSize:"1rem",marginBottom:"24px" }}>
              I&apos;m <span style={{ color:"#a855f7" }}>GATE 2025 & 2026 qualified</span> and
              have solved <span style={{ color:"#a855f7" }}>200+ DSA problems</span> on LeetCode.{" "}
              <strong style={{ color:"#e6edf3" }}>Available for internship or full-time roles immediately.</strong>
            </p>
            <p style={{ lineHeight:"2",color:"#c9d1d9",fontSize:"1rem",marginBottom:"16px" }}>
              Outside of coding, I love:
            </p>
            <div style={{ display:"flex",flexDirection:"column",gap:"10px" }}>
              {hobbies.map(h => (
                <div key={h.label} style={{ display:"flex",alignItems:"center",gap:"10px",color:"#c9d1d9" }}>
                  <span style={{ fontSize:"1.2rem" }}>{h.emoji}</span>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center" }}>
            <div style={{
              width:"260px",height:"260px",borderRadius:"50%",
              border:"2px solid rgba(168,85,247,.4)",
              display:"flex",alignItems:"center",justifyContent:"center",
              background:"radial-gradient(circle,rgba(168,85,247,.12) 0%,transparent 70%)",
              fontSize:"7rem",
            }}>🧑‍💻</div>
          </div>
        </div>

        {/* Quote */}
        <div style={{ textAlign:"center",marginTop:"60px",padding:"28px 0",borderTop:"1px solid rgba(168,85,247,.2)",borderBottom:"1px solid rgba(168,85,247,.2)" }}>
          <p style={{ fontSize:"1.05rem",color:"#c9d1d9",fontStyle:"italic" }}>
            &quot;Build things that solve real problems — the rest follows.&quot;
          </p>
          <p style={{ color:"#a855f7",marginTop:"8px" }}>— Vikas</p>
        </div>
      </section>

      {/* SKILLS */}
      <section style={{ padding:"60px 8%",position:"relative",zIndex:1 }}>
        <h2 style={{ fontSize:"clamp(1.5rem,3vw,2rem)",fontWeight:700,textAlign:"center",marginBottom:"40px" }}>
          Professional <span style={{ color:"#a855f7" }}>Skillset</span>
        </h2>
        <div style={{ display:"flex",flexWrap:"wrap",gap:"14px",justifyContent:"center" }}>
          {skills.map(s => <span key={s} className="skill-pill">{s}</span>)}
        </div>
      </section>

      {/* TOOLS */}
      <section style={{ padding:"20px 8% 60px",position:"relative",zIndex:1 }}>
        <h2 style={{ fontSize:"clamp(1.5rem,3vw,2rem)",fontWeight:700,textAlign:"center",marginBottom:"40px" }}>
          <span style={{ color:"#a855f7" }}>Tools</span> I Use
        </h2>
        <div style={{ display:"flex",flexWrap:"wrap",gap:"14px",justifyContent:"center" }}>
          {tools.map(t => <span key={t} className="skill-pill">{t}</span>)}
        </div>
      </section>

      {/* FIND ME ON */}
      <section style={{ padding:"60px 8%",textAlign:"center",position:"relative",zIndex:1 }}>
        <h2 style={{ fontSize:"1.8rem",fontWeight:700,marginBottom:"8px" }}>Find Me On</h2>
        <p style={{ color:"#8b949e",marginBottom:"32px" }}>
          Feel free to <span style={{ color:"#a855f7" }}>connect</span> with me
        </p>
        <div style={{ display:"flex",justifyContent:"center" }}>
          <SocialLinks />
        </div>
      </section>
    </>
  );
}
