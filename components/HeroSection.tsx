export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 18%, rgba(211,178,119,0.15) 0%, rgba(211,178,119,0) 62%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto pt-24 md:pt-28">
        <p className="section-kicker mb-5">AP United States History • Unit 7</p>

        <h1 className="text-5xl md:text-7xl font-semibold leading-[0.96] max-w-4xl">
          Is the United States a better version of itself by 1945 than it was in
          1890?
        </h1>

        <div className="flex items-center gap-4 my-10 flex-wrap">
          <div
            className="text-center px-7 py-3.5 rounded-lg border"
            style={{
              background: "rgba(217,107,107,0.12)",
              borderColor: "rgba(217,107,107,0.4)",
            }}
          >
            <p className="text-3xl font-semibold" style={{ color: "#d96b6b" }}>
              1890
            </p>
            <p
              className="text-[0.68rem] tracking-[0.16em] uppercase mt-1"
              style={{ color: "rgba(233,237,244,0.55)" }}
            >
              Baseline
            </p>
          </div>
          <div style={{ color: "#d3b277", fontSize: "1.75rem" }}>→</div>
          <div
            className="text-center px-7 py-3.5 rounded-lg border"
            style={{
              background: "rgba(109,177,135,0.12)",
              borderColor: "rgba(109,177,135,0.4)",
            }}
          >
            <p className="text-3xl font-semibold" style={{ color: "#6db187" }}>
              1945
            </p>
            <p
              className="text-[0.68rem] tracking-[0.16em] uppercase mt-1"
              style={{ color: "rgba(233,237,244,0.55)" }}
            >
              Outcome
            </p>
          </div>
        </div>

        <div
          className="panel max-w-4xl mt-8 p-7 md:p-9 rounded-2xl"
          style={{ borderColor: "rgba(211,178,119,0.28)" }}
        >
          <p className="section-kicker mb-4">Thesis Statement</p>
          <p className="text-lg md:text-[1.42rem] leading-relaxed">
            The United States became a stronger version of itself by 1945 through
            broader social reform, a more resilient federal economic role, and a
            clearer capacity to lead globally despite unresolved domestic
            inequities.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {[
            { name: "Anthony" },
            { name: "Arnav" },
            { name: "Martin" },
          ].map((author) => (
            <span
              key={author.name}
              className="px-5 py-2 rounded-full text-sm tracking-wide"
              style={{
                background: "rgba(211,178,119,0.12)",
                border: "1px solid rgba(211,178,119,0.35)",
                color: "#d3b277",
              }}
            >
              {author.name}
            </span>
          ))}
        </div>

        <a
          href="#overview"
          className="inline-flex mt-12 text-sm uppercase tracking-[0.16em] font-medium"
          style={{ color: "rgba(233,237,244,0.68)" }}
        >
          Explore the Evidence ↓
        </a>
      </div>
    </section>
  );
}
