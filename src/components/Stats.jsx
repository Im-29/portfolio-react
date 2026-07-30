import React from "react";
import { colors, fonts } from "../theme";
import { stats } from "../data";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="py-12" style={{ borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="text-3xl md:text-4xl font-bold" style={{ fontFamily: fonts.display }}>
              {s.num}
            </div>
            <div className="text-[13.5px] mt-1.5" style={{ color: colors.muted }}>
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
