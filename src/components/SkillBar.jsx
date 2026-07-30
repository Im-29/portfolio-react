import React, { useEffect, useRef, useState } from "react";
import { colors } from "../theme";

export default function SkillBar({ name, pct }) {
  const ref = useRef(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFill(pct);
          obs.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div
      ref={ref}
      className="rounded-2xl p-5"
      style={{ background: colors.bgElevated, border: `1px solid ${colors.border}` }}
    >
      <div className="flex justify-between text-sm mb-2.5">
        <span>{name}</span>
        <span style={{ color: colors.dim, fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: colors.bgElevated2 }}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
          style={{ width: `${fill}%`, transition: "width 1.2s ease" }}
        />
      </div>
    </div>
  );
}
