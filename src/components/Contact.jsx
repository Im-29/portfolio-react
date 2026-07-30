import React from "react";
import { colors, fonts } from "../theme";

export default function Contact() {
  return (
    <section id="contact" className="text-center py-28 px-6">
      <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest mb-5 text-pink-500" style={{ fontFamily: fonts.mono }}>
        <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Get in touch
      </div>
      <h2 className="text-4xl md:text-[54px] font-semibold mb-5" style={{ fontFamily: fonts.display }}>
        Let's build something{" "}
        <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">good.</span>
      </h2>
      <p className="mb-9 text-base" style={{ color: colors.muted }}>
        Open to full-time roles, contract work, and interesting problems.
      </p>
      <a
        href="mailto:faimtarmizai04@gmail.com"
        className="inline-flex text-sm px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-violet-500 to-pink-500 text-black hover:-translate-y-0.5 transition-transform"
        style={{ fontFamily: fonts.mono }}
      >
        faimtarmizai04@gmail.com
      </a>
    </section>
  );
}
