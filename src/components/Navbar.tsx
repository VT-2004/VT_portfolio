"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderGit2, FileText } from "lucide-react";

const links = [
  { href: "/",         label: "Home",     icon: Home },
  { href: "/about",    label: "About",    icon: User },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/resume",   label: "Resume",   icon: FileText },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:100,
      display:"flex",alignItems:"center",justifyContent:"space-between",
      padding:"16px 6%",
      backdropFilter:"blur(12px)",
      backgroundColor:"rgba(13,17,23,.88)",
      borderBottom:"1px solid rgba(168,85,247,.12)",
    }}>
      <Link href="/" style={{ textDecoration:"none" }}>
        <span style={{ fontSize:"1.55rem",fontWeight:700,color:"#a855f7",fontFamily:"Source Code Pro,monospace" }}>
          Vt.
        </span>
      </Link>
      <div style={{ display:"flex",gap:"32px",alignItems:"center" }}>
        {links.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className={`nav-link${pathname === href ? " active" : ""}`}>
            <Icon size={15} />
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
