import React from "react";
import { fonts } from "../theme";
import { skills } from "../data";
import Reveal from "./Reveal";
import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-lg mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest mb-4 text-pink-500" style={{ fontFamily: fonts.mono }}>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Skills
          </div>
          <h2 className="text-3xl md:text-[38px] font-semibold" style={{ fontFamily: fonts.display }}>
            Tools I've experienced and technologies I've worked with.
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {skills.map((s) => (
            <SkillBar key={s.name} name={s.name} pct={s.pct} />
          ))}
        </div>
      </div>
    </section>
  );
}
