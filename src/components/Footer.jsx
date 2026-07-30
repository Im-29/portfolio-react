import React from "react";
import { ArrowUp } from "lucide-react";
import { colors } from "../theme";

export default function Footer() {
  return (
    <footer className="py-7" style={{ borderTop: `1px solid ${colors.border}` }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs" style={{ color: colors.dim }}>
        <span>© 2026 Faim Tarmizai.</span>
        <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors">
          Back to top <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
