export default function Footer() {
  return (
    <footer
      className="py-14 px-6 text-center"
      style={{
        background: "#070b15",
        borderTop: "1px solid rgba(200,169,110,0.15)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Eagle & stars */}
        <div className="flex justify-center gap-3 mb-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} style={{ color: "#c8a96e", opacity: 0.5 }}>
              ★
            </span>
          ))}
          <span className="text-2xl">🦅</span>
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} style={{ color: "#c8a96e", opacity: 0.5 }}>
              ★
            </span>
          ))}
        </div>

        <h3
          className="text-xl font-bold mb-2"
          style={{ color: "#c8a96e", fontFamily: "Georgia, serif" }}
        >
          America in the World
        </h3>
        <p
          className="text-sm mb-6"
          style={{ color: "rgba(232,232,232,0.4)" }}
        >
          Is the United States a better version of itself in 1945 than it was in 1898?
        </p>

        {/* Authors */}
        <div className="flex gap-3 justify-center flex-wrap mb-8">
          {["Anthony", "Arnav", "Martin"].map((name) => (
            <span
              key={name}
              className="text-sm px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(200,169,110,0.08)",
                border: "1px solid rgba(200,169,110,0.2)",
                color: "rgba(200,169,110,0.8)",
              }}
            >
              {name}
            </span>
          ))}
        </div>

        <p
          className="text-xs"
          style={{ color: "rgba(232,232,232,0.25)" }}
        >
          AP United States History &bull; 1890–1945
        </p>
      </div>
    </footer>
  );
}
