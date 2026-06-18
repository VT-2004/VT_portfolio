import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vikas Talawar | Portfolio",
  description: "Full Stack Developer & AI/ML Engineer — Next.js, FastAPI, LangChain, RAG",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="stars-bg" />
        <Navbar />
        <main className="section-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
