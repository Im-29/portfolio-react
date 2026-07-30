import React, { useEffect, useState } from "react";
import { colors, fonts } from "../theme";

const termSegments = [
  { t: "const ", cls: "k" },
  { t: "faim", cls: "" },
  { t: " = {\n", cls: "" },
  { t: "  role: ", cls: "" },
  { t: '"Data Science / Data Analyst"', cls: "s" },
  { t: ",\n", cls: "" },
  { t: "  recipient: ", cls: "" },
  { t: '"Yayasan Telekom Malaysia Scholarship"', cls: "s" },
  { t: ",\n", cls: "" },
  { t: "  stack: [", cls: "" },
  { t: '"HTML & CSS", "JavaScript", "Python", "SQL"', cls: "s" },
  { t: "],\n", cls: "" },
  { t: "  focus: ", cls: "" },
  { t: '"data preprocessing, interactive dashboards"', cls: "s" },
  { t: ",\n", cls: "" },
  { t: "  from: ", cls: "" },
  { t: '"Cyberjaya, Selangor"', cls: "s" },
  { t: "\n};", cls: "" },
];
const plainTerm = termSegments.map((s) => s.t).join("");
const termColor = { k: "#ec4899", s: "#a3e635", "": "#c9c3e0" };

export default function TypedTerminal() {
  const [count, setCount] = useState(0);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduced) {
      setCount(plainTerm.length);
      return;
    }
    if (count >= plainTerm.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), 18);
    return () => clearTimeout(id);
  }, [count, reduced]);

  let remaining = count;
  const rendered = [];
  for (const seg of termSegments) {
    if (remaining <= 0) break;
    const take = Math.min(seg.t.length, remaining);
    rendered.push({ t: seg.t.slice(0, take), cls: seg.cls });
    remaining -= take;
  }
  const done = count >= plainTerm.length;

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: colors.bgElevated, border: `1px solid ${colors.border}`, boxShadow: "0 20px 60px rgba(139,92,246,0.15)" }}
    >
      <div className="flex items-center pl-4 gap-2 px-4.5 py-3.5" style={{ borderBottom: `1px solid ${colors.border}` }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
        <span className="ml-2 text-xs" style={{ color: colors.dim, fontFamily: fonts.mono }}>about-me.ts</span>
      </div>
      <div className="p-6 text-sm min-h-[220px]" style={{ fontFamily: fonts.mono, whiteSpace: "pre-wrap" }}>
        {rendered.map((seg, i) => (
          <span key={i} style={{ color: termColor[seg.cls] }}>
            {seg.t}
          </span>
        ))}
        {done && (
          <span
            className="inline-block w-2 h-4 align-middle ml-0.5"
            style={{ background: "#8b5cf6", animation: "blink 1s step-end infinite" }}
          />
        )}
      </div>
    </div>
  );
}
