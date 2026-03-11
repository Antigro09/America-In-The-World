export default function Footer() {
  return (
    <footer
      className="py-14 px-6 text-center"
      style={{
        background: "#070d18",
        borderTop: "1px solid rgba(211,178,119,0.2)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h3
          className="text-2xl font-semibold mb-2"
          style={{ color: "#d3b277" }}
        >
          America in the World
        </h3>
        <p
          className="text-sm mb-6"
          style={{ color: "rgba(233,237,244,0.5)" }}
        >
          Is the United States a better version of itself in 1945 than it was in 1898?
        </p>

        <div className="flex gap-3 justify-center flex-wrap mb-8">
          {["Anthony", "Arnav", "Martin"].map((name) => (
            <span
              key={name}
              className="text-sm px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(211,178,119,0.1)",
                border: "1px solid rgba(211,178,119,0.24)",
                color: "rgba(211,178,119,0.88)",
              }}
            >
              {name}
            </span>
          ))}
        </div>

        <p
          className="text-xs tracking-[0.12em] uppercase"
          style={{ color: "rgba(233,237,244,0.34)" }}
        >
          AP United States History &bull; 1890-1945
        </p>
      </div>
    </footer>
  );
}
