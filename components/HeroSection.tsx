export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0e1a 0%, #0d1b2e 40%, #0a1628 70%, #0a0e1a 100%)",
      }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-60" />

      {/* Flag-inspired stripe overlay */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 13 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{
              height: "7.69%",
              top: `${i * 7.69}%`,
              background: i % 2 === 0 ? "#B22234" : "#FFFFFF",
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,169,110,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Stars decoration */}
        <div className="flex justify-center gap-3 mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="text-xl"
              style={{ color: "#c8a96e", opacity: 0.8 }}
            >
              ★
            </span>
          ))}
        </div>

        {/* Class label */}
        <p
          className="text-xs tracking-[0.4em] uppercase font-medium mb-4"
          style={{ color: "rgba(200,169,110,0.7)" }}
        >
          America in the World &bull; AP US History
        </p>

        {/* Main title */}
        <h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          <span className="shimmer-text">Is America</span>
          <br />
          <span style={{ color: "#e8e8e8" }}>a Better Version</span>
          <br />
          <span className="shimmer-text">of Itself?</span>
        </h1>

        {/* Year comparison */}
        <div className="flex items-center justify-center gap-6 my-8">
          <div
            className="text-center px-8 py-4 rounded-lg border"
            style={{
              background: "rgba(178,34,52,0.15)",
              borderColor: "rgba(178,34,52,0.4)",
            }}
          >
            <p className="text-4xl font-bold" style={{ color: "#e05555" }}>
              1898
            </p>
            <p
              className="text-xs tracking-widest uppercase mt-1"
              style={{ color: "rgba(232,232,232,0.5)" }}
            >
              Then
            </p>
          </div>
          <div style={{ color: "#c8a96e", fontSize: "2rem" }}>→</div>
          <div
            className="text-center px-8 py-4 rounded-lg border"
            style={{
              background: "rgba(65,145,65,0.15)",
              borderColor: "rgba(65,145,65,0.4)",
            }}
          >
            <p className="text-4xl font-bold" style={{ color: "#5cb85c" }}>
              1945
            </p>
            <p
              className="text-xs tracking-widest uppercase mt-1"
              style={{ color: "rgba(232,232,232,0.5)" }}
            >
              Now
            </p>
          </div>
        </div>

        {/* Thesis statement */}
        <div
          className="max-w-3xl mx-auto mt-8 p-8 rounded-2xl border"
          style={{
            background: "rgba(200,169,110,0.06)",
            borderColor: "rgba(200,169,110,0.25)",
          }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
            style={{ color: "#c8a96e" }}
          >
            Thesis Statement
          </p>
          <p
            className="text-xl md:text-2xl leading-relaxed font-medium"
            style={{ color: "#e8e8e8" }}
          >
            <strong className="font-bold" style={{ color: "#c8a96e" }}>
              Yes
            </strong>
            , the United States is a better version of itself in 1945 than in
            1898 due to the{" "}
            <strong className="font-semibold" style={{ color: "#f0d080" }}>
              improved quality of life
            </strong>
            ,{" "}
            <strong className="font-semibold" style={{ color: "#f0d080" }}>
              strong economy
            </strong>
            , and{" "}
            <strong className="font-semibold" style={{ color: "#f0d080" }}>
              reduced corruption
            </strong>
            .
          </p>
        </div>

        {/* Authors */}
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {["Anthony", "Arnav", "Martin"].map((name) => (
            <span
              key={name}
              className="px-5 py-2 rounded-full text-sm font-medium tracking-wide"
              style={{
                background: "rgba(200,169,110,0.12)",
                border: "1px solid rgba(200,169,110,0.3)",
                color: "#c8a96e",
              }}
            >
              {name}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "rgba(200,169,110,0.5)" }}
          >
            Scroll to Explore
          </span>
          <span style={{ color: "rgba(200,169,110,0.5)", fontSize: "1.25rem" }}>
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}
