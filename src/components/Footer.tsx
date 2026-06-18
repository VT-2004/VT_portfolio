import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { href: "https://github.com/VT-2004", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/vikas-talawar-407a61257/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:talawarh316@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer style={{
      position:"relative",zIndex:1,
      borderTop:"1px solid rgba(168,85,247,.15)",
      padding:"24px 6%",
      display:"flex",alignItems:"center",
      justifyContent:"space-between",flexWrap:"wrap",gap:"12px",
      backgroundColor:"rgba(13,17,23,.92)",
    }}>
      <p style={{ fontSize:".85rem",color:"#8b949e" }}>
        Designed and Developed by <span style={{ color:"#a855f7" }}>Vikas Talawar</span>
      </p>
      <p style={{ fontSize:".85rem",color:"#8b949e" }}>Copyright © 2026 VT</p>
      <div style={{ display:"flex",gap:"20px" }}>
        {socials.map(({ href, icon: Icon, label }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer"
            aria-label={label} className="footer-social">
            <Icon size={18} />
          </a>
        ))}
      </div>
    </footer>
  );
}
