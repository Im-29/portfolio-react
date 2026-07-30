import React from "react";
import { colors, fonts } from "../theme";
import { testimonials } from "../data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-lg mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest mb-4 text-pink-500" style={{ fontFamily: fonts.mono }}>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> What people say
          </div>
          <h2 className="text-3xl md:text-[38px] font-semibold" style={{ fontFamily: fonts.display }}>
            A couple of kind words.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="rounded-2xl p-7" style={{ background: colors.bgElevated, border: `1px solid ${colors.border}` }}>
                <p className="text-[15px] mb-5" style={{ color: colors.muted }}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-sm font-bold text-black bg-gradient-to-br from-violet-500 to-pink-500"
                    style={{ fontFamily: fonts.display }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-[14.5px]">{t.name}</h4>
                    <span className="text-xs" style={{ color: colors.dim }}>
                      {t.role}
                    </span>
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
