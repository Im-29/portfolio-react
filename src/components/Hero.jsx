import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { colors, fonts } from "../theme";
import TypedTerminal from "./TypedTerminal";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest mb-5 text-pink-500" style={{ fontFamily: fonts.mono }}>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500" style={{ boxShadow: "0 0 8px #ec4899" }} />
          Open to work
        </div>
        <h1
          className="text-[38px] md:text-[56px] leading-[1.08] font-semibold mb-6"
          style={{ fontFamily: fonts.display, letterSpacing: "-0.02em" }}
        >
          Hi, I'm
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent font-[900]">Faim Tarmizai.</span>
        </h1>
        <p className="max-w-md mb-8 text-[17px]" style={{ color: colors.muted }}>
          Data Science student with a passion for creating clean and understandable visualizations. I'm specializing in building interactive dashboards that provide actionable insights and drive business decisions.
        </p>
        <div className="flex flex-wrap gap-3.5 mb-8">
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-violet-500 to-pink-500 text-black hover:-translate-y-0.5 transition-transform"
            style={{ fontFamily: fonts.mono }}
          >
            View my work <ArrowRight size={15} />
          </a>
          <a
            href="/MuhammadFaimTarmizai_Resume.pdf"
            className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-xl hover:border-violet-500 transition-colors"
            style={{ fontFamily: fonts.mono, border: `1px solid ${colors.border}` }}
          >
            <Download size={15} /> Resume
          </a>
        </div>
        <div className="flex gap-3.5">
          {[FaGithub, FaLinkedinIn, FaInstagram].map((Icon, i) => (
            <a
              key={i}
              href={i === 0 ? "https://github.com/Im-29" : i === 1 ? "https://www.linkedin.com/in/faim-tarmizai-aa499a270" : "https://www.instagram.com/faimtarmizai_/"}
              className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center hover:border-violet-500 hover:text-white hover:-translate-y-0.5 transition-all"
              style={{ border: `1px solid ${colors.border}`, color: colors.muted }}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
      <TypedTerminal />
    </section>
  );
}
