import React from "react";
import { colors, fonts } from "./theme";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Work from "./components/Work";
import ExperienceEducation from "./components/ExperienceEducation";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: colors.bg, color: "#f5f3ff", fontFamily: fonts.body, position: "relative", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes blink { 50% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 15% -5%, rgba(139,92,246,0.16), transparent), radial-gradient(ellipse 700px 500px at 100% 10%, rgba(236,72,153,0.10), transparent)",
        }}
      />

      <div className="relative">
        <Nav />
        <Hero />
        {/* <Stats /> */}
        <Services />
        <Work />
        <ExperienceEducation />
        <Skills />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
