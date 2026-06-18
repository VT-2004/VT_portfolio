import { Download } from "lucide-react";

const cvUrl = "https://drive.google.com/file/d/1aq5uK-8Yq0eaGFEzpmlaijgv4F5GnG3Q/view?usp=sharing";

export default function Resume() {
  return (
    <section style={{ padding:"100px 4% 80px",position:"relative",zIndex:1,minHeight:"100vh" }}>
      {/* Download top */}
      <div style={{ textAlign:"center",marginBottom:"32px" }}>
        <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="btn-purple" style={{ fontSize:"1rem",padding:"12px 32px" }}>
          <Download size={18} /> Download CV
        </a>
      </div>

      {/* White resume card */}
      <div style={{ background:"#fff",color:"#111",borderRadius:"8px",maxWidth:"900px",margin:"0 auto",padding:"clamp(24px,5%,52px) clamp(20px,6%,56px)",fontFamily:"Georgia,serif",boxShadow:"0 4px 40px rgba(0,0,0,.3)" }}>

        {/* HEADER */}
        <div style={{ textAlign:"center",marginBottom:"24px",borderBottom:"1px solid #ddd",paddingBottom:"16px" }}>
          <h1 style={{ fontSize:"2rem",fontWeight:300,letterSpacing:".06em",fontFamily:"Georgia,serif" }}>
            Vikas Hanamant <strong>Talawar</strong>
          </h1>
          <p style={{ color:"#666",fontSize:".82rem",marginTop:"4px",fontFamily:"Arial,sans-serif" }}>Bengaluru, Karnataka, India</p>
          <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"4px 14px",marginTop:"8px",fontSize:".76rem",fontFamily:"Arial,sans-serif" }}>
            <a href="tel:+916360681710" style={{ color:"#1946a0" }}>+91-6360681710</a>
            <span style={{ color:"#aaa" }}>|</span>
            <a href="mailto:talawarh316@gmail.com" style={{ color:"#1946a0" }}>talawarh316@gmail.com</a>
            <span style={{ color:"#aaa" }}>|</span>
            <a href="https://github.com/VT-2004" target="_blank" rel="noopener noreferrer" style={{ color:"#1946a0" }}>github.com/VT-2004</a>
            <span style={{ color:"#aaa" }}>|</span>
            <a href="https://www.linkedin.com/in/vikas-talawar-407a61257/" target="_blank" rel="noopener noreferrer" style={{ color:"#1946a0" }}>linkedin.com/in/vikas-talawar</a>
          </div>
        </div>

        <Divider label="Profile" />
        <p style={{ fontSize:".83rem",lineHeight:"1.7",color:"#333",fontFamily:"Arial,sans-serif" }}>
          Full Stack Developer and AI/ML Engineer skilled in Next.js, FastAPI, and MongoDB, building
          production-ready agentic AI systems and scalable SaaS applications. Experienced in
          integrating LLM-driven features (Groq Llama 3.1, RAG pipelines, SBERT) to enhance system
          intelligence. Solved 200+ DSA problems in C++; deployed production apps on Vercel and Render
          with CI/CD. B.Tech CSE (AI &amp; Data Science), IIITM. GATE 2025 &amp; 2026 qualified.{" "}
          <strong>Available for internship or full-time roles immediately.</strong>
        </p>

        <Divider label="Technical Skills" />
        <table style={{ fontSize:".81rem",width:"100%",borderCollapse:"collapse",fontFamily:"Arial,sans-serif" }}>
          <tbody>
            {[
              ["Languages",      "C++, JavaScript, TypeScript, Python, SQL (basics)"],
              ["Frontend",       "React.js, Next.js, Tailwind CSS, shadcn/ui, Streamlit, HTML, CSS"],
              ["Backend",        "Node.js, Express.js, FastAPI, REST APIs, Convex"],
              ["Databases",      "MongoDB, Mongoose ODM, ChromaDB, PostgreSQL (Supabase), Firebase, Firestore"],
              ["AI / ML",        "Groq AI (Llama 3.1), LangChain, SBERT, RAG pipelines, TF-IDF, scikit-learn, HuggingFace"],
              ["Auth & Tools",   "Clerk (JWT), Firebase Auth, Zod, PyMuPDF, GitHub REST API, Git, Vercel, Render"],
              ["DevOps",         "CI/CD (GitHub Actions), MongoDB Atlas, CORS, Chrome Extensions API"],
              ["Core Concepts",  "Agentic AI, RAG Architecture, DSA, OOP, System Design, Service-Controller Arch"],
            ].map(([k,v]) => (
              <tr key={k}>
                <td style={{ fontWeight:700,paddingRight:"14px",paddingBottom:"5px",whiteSpace:"nowrap",verticalAlign:"top",color:"#111",width:"150px" }}>{k}</td>
                <td style={{ color:"#333",paddingBottom:"5px" }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Divider label="Experience" />

        <ExpItem
          company="Codtech IT Solutions Pvt. Ltd."
          companyUrl="https://drive.google.com/file/d/1L23mk1e-Kq-nGlhV2lKyCEN66JVCnQuF/view?usp=sharing"
          role="Full Stack Web Development Intern"
          period="Jan 2026 – Apr 2026"
          location="Remote"
          bullets={[
            "Built a scalable real-time chat platform using Next.js, TypeScript, and Convex reactive queries — live messaging, typing indicators, unread tracking, online/offline presence with sub-100ms latency.",
            "Implemented Clerk authentication securing 100% of API endpoints; architected Firestore schemas for conversations, messages, and read receipts handling concurrent multi-user sessions.",
            "Developed a Chrome extension for website activity tracking with Chart.js analytics dashboards and Express.js + MongoDB Atlas backend, reducing data retrieval latency by 35%.",
          ]}
        />
        <ExpItem
          company="Unified Mentor Pvt. Ltd."
          companyUrl="https://drive.google.com/file/d/1R8d-HDR_COwi8INVV94CDVkXHcC76Jqt/view?usp=sharing"
          role="Frontend Development Intern"
          period="May 2025 – Aug 2025"
          location="Remote"
          bullets={[
            "Built a multi-role Student-Teacher Appointment System with Firebase Auth + Firestore supporting Admin, Teacher, Student dashboards across 10+ workflow states with real-time approval and RBAC.",
            "Developed MovieVerse and Quiz applications using React.js and Tailwind CSS, improving UI interaction responsiveness by 30%.",
          ]}
        />

        <Divider label="Projects" />

        <ProjItem
          title="AI Code Review Assistant — Agentic RAG Pipeline"
          tech="Python · FastAPI · LangChain · ChromaDB · SBERT · Groq AI · Next.js · TypeScript"
          github="https://github.com/VT-2004/ai-code-review-assistant"
          bullets={[
            "Built an agentic code review system using RAG pipeline with ChromaDB vector store; scored a real codebase 63/100 and identified a critical security issue in production code.",
            "Semantic code search across 10k+ line codebases using 384-dimensional SBERT (all-MiniLM-L6-v2) vectors with natural language queries over source code.",
            "Intelligent chunking pipeline reducing API calls by 70% while maintaining full codebase coverage; severity-weighted scoring (critical −15, high −8, medium −4 pts).",
          ]}
        />
        <ProjItem
          title="Resume-JD Matcher — AI-Powered Resume Scoring"
          tech="Python · SBERT · TF-IDF · Streamlit · HuggingFace · scikit-learn · PyMuPDF"
          github="https://github.com/VT-2004/resume-matcher"
          demo="https://huggingface.co/spaces/VIKAS098765/resume-matcher"
          bullets={[
            "Fine-tuned SBERT on 853 resume-JD pairs achieving 0.886 Pearson correlation; weighted scoring: semantic (60%), TF-IDF (25%), skill gap (15%) across 73,000+ ESCO skill terms.",
            "Deployed on HuggingFace Spaces with real-time skill gap visualisation and actionable recommendations.",
          ]}
        />
        <ProjItem
          title="FlashAI — AI-Powered Flashcard Generator"
          tech="Next.js · TypeScript · Express.js · MongoDB · Groq AI · Clerk · Zod · Tailwind CSS"
          github="https://github.com/VT-2004/AI-Flashcard-generator"
          demo="https://ai-flashcard-generator-one.vercel.app"
          bullets={[
            "Full-stack AI flashcard generator delivering structured study cards in under 3 seconds via Groq Llama 3.1 with strict JSON output validation.",
            "8 typed REST endpoints with Clerk JWT middleware, Zod validation, and service-controller architecture; MongoDB schema with atomic $inc session tracking.",
          ]}
        />

        <Divider label="Education" />
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"4px",fontFamily:"Arial,sans-serif" }}>
          <div>
            <p style={{ fontWeight:700,fontSize:".88rem" }}>Indian Institute of Information Technology, Manipur (IIITM)</p>
            <p style={{ fontSize:".82rem",color:"#444" }}>B.Tech in Computer Science Engineering (AI &amp; Data Science)</p>
            <ul style={{ paddingLeft:"18px",fontSize:".82rem",color:"#333",marginTop:"4px" }}>
              <li>CPI: 7.51 / 10</li>
            </ul>
          </div>
          <div style={{ textAlign:"right" }}>
            <p style={{ color:"#c0392b",fontSize:".82rem" }}>Imphal, India</p>
            <p style={{ fontSize:".78rem",color:"#555" }}>2022 – 2026</p>
          </div>
        </div>

        <Divider label="Certifications" />
        <table style={{ fontSize:".82rem",fontFamily:"Arial,sans-serif" }}>
          <tbody>
            <tr>
              <td style={{ paddingRight:"16px",paddingBottom:"4px" }}>
                <a href="https://drive.google.com/file/d/19iXFINK1FsV0rbJcFYyLM7TniqXs3lzD/view" target="_blank" rel="noopener noreferrer" style={{ color:"#1946a0",fontWeight:600 }}>Introduction to MongoDB</a>
              </td>
              <td style={{ paddingRight:"16px",paddingBottom:"4px",color:"#333" }}>MongoDB University</td>
              <td style={{ paddingBottom:"4px",color:"#333" }}>Jan 2024</td>
            </tr>
            <tr>
              <td style={{ paddingRight:"16px" }}>
                <a href="https://drive.google.com/file/d/12U0b6YdGo5xjvwAKaqRTVR5WH1v2dwEc/view" target="_blank" rel="noopener noreferrer" style={{ color:"#1946a0",fontWeight:600 }}>Data Analytics with Python</a>
              </td>
              <td style={{ paddingRight:"16px",color:"#333" }}>NPTEL</td>
              <td style={{ color:"#333" }}>Jan 2025</td>
            </tr>
          </tbody>
        </table>

        <Divider label="Achievements" />
        <ul style={{ paddingLeft:"18px",fontSize:".82rem",color:"#333",lineHeight:"1.8",fontFamily:"Arial,sans-serif" }}>
          <li><strong>GATE 2025 &amp; 2026</strong> — Qualified both consecutive years in Computer Science &amp; Engineering.</li>
          <li><strong>LeetCode</strong> — Solved 200+ problems: arrays, strings, dynamic programming, and graphs.</li>
        </ul>

      </div>

      {/* Download bottom */}
      <div style={{ textAlign:"center",marginTop:"40px" }}>
        <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="btn-purple" style={{ fontSize:"1rem",padding:"12px 32px" }}>
          <Download size={18} /> Download CV
        </a>
      </div>
    </section>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div style={{ margin:"18px 0 10px",borderBottom:"1.5px solid #1946a0",paddingBottom:"3px",display:"flex",alignItems:"baseline",gap:"0" }}>
      <span style={{ fontSize:".82rem",fontWeight:700,textTransform:"uppercase",letterSpacing:".06em",fontFamily:"Arial,sans-serif" }}>
        <span style={{ color:"#c0392b" }}>{label.slice(0,3)}</span>{label.slice(3)}
      </span>
    </div>
  );
}

function ExpItem({ company, companyUrl, role, period, location, bullets }: {
  company: string; companyUrl: string; role: string;
  period: string; location: string; bullets: string[];
}) {
  return (
    <div style={{ marginBottom:"14px",fontFamily:"Arial,sans-serif" }}>
      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",gap:"2px" }}>
        <a href={companyUrl} target="_blank" rel="noopener noreferrer" style={{ fontWeight:700,fontSize:".88rem",color:"#111",textDecoration:"none" }}>{company}</a>
        <span style={{ color:"#c0392b",fontSize:".78rem" }}>{location}</span>
      </div>
      <div style={{ display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"2px" }}>
        <span style={{ fontSize:".82rem",color:"#444" }}>{role}</span>
        <span style={{ fontSize:".76rem",color:"#555" }}>{period}</span>
      </div>
      <ul style={{ paddingLeft:"18px",marginTop:"5px",fontSize:".81rem",color:"#333",lineHeight:"1.65" }}>
        {bullets.map((b,i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

function ProjItem({ title, tech, github, demo, bullets }: {
  title: string; tech: string; github: string; demo?: string; bullets: string[];
}) {
  return (
    <div style={{ marginBottom:"14px",fontFamily:"Arial,sans-serif" }}>
      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",gap:"4px" }}>
        <span style={{ fontWeight:700,fontSize:".86rem",color:"#111" }}>{title}</span>
        <span style={{ display:"flex",gap:"12px" }}>
          <a href={github} target="_blank" rel="noopener noreferrer" style={{ color:"#1946a0",fontSize:".76rem" }}>GitHub</a>
          {demo && <a href={demo} target="_blank" rel="noopener noreferrer" style={{ color:"#1946a0",fontSize:".76rem" }}>Demo</a>}
        </span>
      </div>
      <p style={{ fontSize:".76rem",color:"#666",fontStyle:"italic",marginBottom:"3px" }}>{tech}</p>
      <ul style={{ paddingLeft:"18px",fontSize:".81rem",color:"#333",lineHeight:"1.65" }}>
        {bullets.map((b,i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}
