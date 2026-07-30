import React from "react";
import { colors, fonts } from "../theme";
import { projects } from "../data";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-lg mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest mb-4 text-pink-500" style={{ fontFamily: fonts.mono }}>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> What I've built
          </div>
          <h2 className="text-3xl md:text-[38px] font-semibold mb-3" style={{ fontFamily: fonts.display }}>
            PROJECTS
          </h2>
          <p style={{ color: colors.muted }}>A collection of my recent projects.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                className="rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-violet-500 transition-all"
                style={{ background: colors.bgElevated, border: `1px solid ${colors.border}` }}
              >
                <img
                  src={p.image}
                  alt={`${p.name} project preview`}
                  className="h-[260px] w-[100%] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-lg mb-1.5" style={{ fontFamily: fonts.display }}>
                    {p.name}
                  </h3>
                  <p className="text-sm mb-3.5" style={{ color: colors.muted }}>
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11.5px] px-2.5 py-1 rounded-full"
                        style={{ fontFamily: fonts.mono, color: colors.muted, border: `2px solid ${colors.border}` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
