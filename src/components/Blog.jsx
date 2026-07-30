import React from "react";
import { colors, fonts } from "../theme";
import { blogPosts } from "../data";
import Reveal from "./Reveal";

export default function Blog() {
  return (
    <section id="blog" className="py-24" style={{ background: "rgba(139,92,246,0.03)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-lg mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest mb-4 text-pink-500" style={{ fontFamily: fonts.mono }}>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Certifications
          </div>
          <h2 className="text-3xl md:text-[38px] font-semibold" style={{ fontFamily: fonts.display }}>
            Certificates that I've earned
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {blogPosts.map((b, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="rounded-2xl p-6 hover:border-violet-500 transition-colors" style={{ border: `1px solid ${colors.border}` }}>
                <span className="inline-block text-[11px] uppercase tracking-wider mb-3.5 text-pink-500" style={{ fontFamily: fonts.mono }}>
                  {b.tag}
                </span>
                <h3 className="text-[16.5px] mb-2.5" style={{ fontFamily: fonts.display }}>
                  {b.title}
                </h3>
                <span className="text-xs" style={{ color: colors.dim }}>
                  {b.read}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
