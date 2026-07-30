import React from "react";
import { Compass, GraduationCap } from "lucide-react";
import { colors, fonts } from "../theme";
import { experience, education } from "../data";
import Reveal from "./Reveal";

function TimelineColumn({ icon: Icon, title, items, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="flex items-center justify-center gap-5 text-lg font-semibold mb-6" style={{ fontFamily: fonts.display, background: colors.bgElevated, border: `2px solid ${colors.border}`, borderRadius: '1.0rem', padding: '0.8rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <Icon size={20} className="text-violet-400" /> {title}
      </div>
      {items.map((e, i) => (
        <div key={i} className="py-4" style={{ borderBottom: `1px solid ${colors.border}` }}>
          <div className="text-xs mb-1.5 text-pink-500" style={{ fontFamily: fonts.mono }}>
            {e.date}
          </div>
          <h4 className="text-[15.5px] mb-0.5">{e.role}</h4>
          <span className="text-[13.5px]" style={{ color: colors.muted }}>
            {e.org}
          </span>
        </div>
      ))}
    </Reveal>
  );
}

export default function ExperienceEducation() {
  return (
    <section className="py-24" style={{ background: "rgba(139,92,246,0.03)" }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">
        <TimelineColumn icon={GraduationCap} title="Education" items={education} delay={100} bg-transparent />
        <TimelineColumn icon={Compass} title="Experience" items={experience} delay={0} />
      </div>
    </section>
  );
}
