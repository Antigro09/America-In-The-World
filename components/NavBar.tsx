"use client";

import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 shadow-lg"
          : "py-5"
      }`}
      style={{
        background: scrolled
          ? "rgba(10, 14, 26, 0.97)"
          : "transparent",
        borderBottom: scrolled ? "1px solid rgba(200, 169, 110, 0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🦅</span>
          <span
            className="font-bold text-lg tracking-wider"
            style={{ color: "#c8a96e" }}
          >
            AMERICA IN THE WORLD
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Overview", href: "#overview" },
            { label: "Historical Figures", href: "#figures" },
            { label: "Analysis", href: "#analysis" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wider uppercase transition-colors duration-200"
              style={{ color: "rgba(232,232,232,0.7)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#c8a96e")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(232,232,232,0.7)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
