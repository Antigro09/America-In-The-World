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
        scrolled ? "py-3" : "py-5"
      }`}
      style={{
        background: scrolled ? "rgba(10, 18, 33, 0.9)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(211, 178, 119, 0.25)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="font-semibold text-base md:text-lg tracking-[0.18em] uppercase"
            style={{ color: "#d3b277" }}
          >
            AMERICA IN THE WORLD
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Overview", href: "#overview" },
            { label: "Analysis", href: "#analysis" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-[0.16em] uppercase transition-colors duration-200"
              style={{ color: "rgba(233,237,244,0.76)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
