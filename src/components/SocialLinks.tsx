import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { href: "https://github.com/VT-2004", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/vikas-talawar-407a61257/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:talawarh316@gmail.com", icon: Mail, label: "Email" },
];

export default function SocialLinks() {
  return (
    <div style={{ display:"flex",gap:"16px" }}>
      {socials.map(({ href, icon: Icon, label }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer"
          aria-label={label} className="social-btn">
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
