import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { colors, fonts } from "../theme";
import { navLinks } from "../data";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50"
      style={{ background: "rgba(10,9,16,0.75)", backdropFilter: "blur(14px)", borderBottom: `1px solid ${colors.border}` }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[76px] flex items-center justify-between">
        <div className="flex items-center gap-2 text-[20px] font-[1000]" style={{ fontFamily: fonts.mono }}>
          <a href="#" className="hover:text-white transition-colors">
            <span className="text-violet-400">{"</>"}</span> Faim Tarmizai
          </a>
        </div>
        <div className="hidden md:flex gap-9 text-sm font-medium" style={{ color: colors.muted }}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex text-[13.5px] px-5 py-2.5 rounded-full font-medium bg-gradient-to-r from-violet-500 to-pink-500 text-black"
          style={{ fontFamily: fonts.mono }}
        >
          Let's talk
        </a>
        <button className="md:hidden text-white" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
          {navOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {navOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-6" style={{ background: colors.bg, borderTop: `1px solid ${colors.border}` }}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setNavOpen(false)} style={{ color: colors.muted }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
