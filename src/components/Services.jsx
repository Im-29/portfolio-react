import React from "react";
import { colors, fonts } from "../theme";
import { services } from "../data";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "rgba(139,92,246,0.03)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-lg mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest mb-4 text-pink-500" style={{ fontFamily: fonts.mono }}>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> What I Offer
          </div>
          <h2 className="text-3xl md:text-[38px] font-semibold mb-3" style={{ fontFamily: fonts.display }}>
            Things I'm actually good at.
          </h2>
          <p style={{ color: colors.muted }}>The parts of the stack I reach for most and enjoy most.</p>
        </Reveal>
        <div>
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 70}>
              <div
                className="grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_220px] gap-6 items-center px-5 py-6 rounded-2xl hover:bg-white/[0.03] transition-colors"
                style={{ borderBottom: `1px solid ${colors.border}` }}
              >
                <div className="text-sm" style={{ color: colors.dim, fontFamily: fonts.mono }}>
                  {s.num}
                </div>
                <div>
                  <h3 className="text-xl mb-1.5" style={{ fontFamily: fonts.display }}>
                    {s.title}
                  </h3>
                  <p className="text-[14.5px]" style={{ color: colors.muted }}>
                    {s.desc}
                  </p>
                </div>
                <div className="hidden md:block text-right text-xs text-violet-400" style={{ fontFamily: fonts.mono }}>
                  {s.tag}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
