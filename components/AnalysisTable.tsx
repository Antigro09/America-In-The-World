const tableData = [
  {
    figure: "Andrew Carnegie",
    decade: "1890s",
    score: -1,
    analysis:
      "Although he promoted a lot of economical and business growth, his methods of **vertical integration** were unorthodox and unethical.",
    thinkingSkill: "Continuity and Change Over Time",
  },
  {
    figure: "William Randolph Hearst",
    decade: "1900s",
    score: 4,
    analysis:
      "Hearst's use of **yellow journalism** to sensationalize the sinking of the USS Maine exemplifies how **media manipulation** can drive a nation to war, illustrating the dangerous intersection of press power and **imperial ambition** in the Spanish-American War.",
    thinkingSkill: "Causation",
  },
  {
    figure: "Jeannette Rankin",
    decade: "1910s",
    score: 5,
    analysis:
      "As the first woman elected to Congress, Jeannette Rankin's votes against U.S. entry into both World Wars reflect an unwavering commitment to **pacifism and democratic principle**, even at great personal political cost—a landmark in the **evolution of women's political agency**.",
    thinkingSkill: "Argumentation",
  },
  {
    figure: "W.E.B. Du Bois",
    decade: "1920s",
    score: 1,
    analysis:
      'Du Bois\'s concept of **"double consciousness"** and his co-founding of the NAACP represent a critical challenge to the **racial hierarchy** embedded in American society, though systemic racism limited the immediate impact of his intellectual and activist contributions.',
    thinkingSkill: "Contextualization",
  },
  {
    figure: "Huey Long",
    decade: "1930s",
    score: 3,
    analysis:
      'He was a far-left Democrat who was a staunch opponent of Roosevelt\'s **New Deal**, arguing it did not go far enough. His **"Share Our Wealth"** program proposed radical redistribution, making him both a champion of the poor and a cautionary example of **populist demagoguery**.',
    thinkingSkill: "Comparison",
  },
  {
    figure: "Franklin Delano Roosevelt",
    decade: "1940s",
    score: 4,
    analysis:
      "Franklin Delano Roosevelt created the **New Deal**, a set of government programs to help alleviate the economy after the **Great Depression**. This shows a stark change from his predecessors who believed in **Laissez-Faire capitalism**, and that the economy would self-stabilize. He held out against entering **World War II** initially but only entered after interests of America were directly threatened.",
    thinkingSkill: "Continuity and Change Over Time",
  },
];

function ScoreBadge({ score }: { score: number }) {
  const getColor = () => {
    if (score >= 4) return { bg: "rgba(92,184,92,0.15)", text: "#5cb85c", border: "rgba(92,184,92,0.35)" };
    if (score >= 2) return { bg: "rgba(200,169,110,0.15)", text: "#c8a96e", border: "rgba(200,169,110,0.35)" };
    if (score >= 0) return { bg: "rgba(74,144,217,0.15)", text: "#4a90d9", border: "rgba(74,144,217,0.35)" };
    return { bg: "rgba(224,85,85,0.15)", text: "#e05555", border: "rgba(224,85,85,0.35)" };
  };

  const { bg, text, border } = getColor();
  return (
    <span
      className="inline-flex items-center justify-center w-10 h-10 rounded-full text-base font-bold"
      style={{ background: bg, color: text, border: `2px solid ${border}` }}
    >
      {score > 0 ? `+${score}` : score}
    </span>
  );
}

function renderWithBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold" style={{ color: "#f0d080" }}>
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function AnalysisTable() {
  return (
    <section
      id="analysis"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(180deg, #0c1220 0%, #0a0e1a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase font-medium mb-3"
            style={{ color: "#c8a96e" }}
          >
            Historical Analysis
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              color: "#e8e8e8",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Scores &amp; Analysis
          </h2>
          <p
            className="text-sm max-w-2xl mx-auto mt-4"
            style={{ color: "rgba(232,232,232,0.5)" }}
          >
            Each figure is scored on their contribution to American progress.{" "}
            <span style={{ color: "#f0d080" }}>
              Bold text reflects historical thinking skills.
            </span>
          </p>
          <div
            className="w-24 h-0.5 mx-auto mt-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, #c8a96e, transparent)",
            }}
          />
        </div>

        {/* Score legend */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {[
            { range: "+4 to +5", label: "Highly Positive", color: "#5cb85c" },
            { range: "+1 to +3", label: "Positive", color: "#c8a96e" },
            { range: "0", label: "Neutral", color: "#4a90d9" },
            { range: "-1 and below", label: "Negative Impact", color: "#e05555" },
          ].map((item) => (
            <div
              key={item.range}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs"
              style={{
                background: `${item.color}15`,
                border: `1px solid ${item.color}33`,
                color: "rgba(232,232,232,0.7)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ background: item.color }}
              />
              <span style={{ color: item.color, fontWeight: 600 }}>
                {item.range}
              </span>
              &nbsp;— {item.label}
            </div>
          ))}
        </div>

        {/* Table */}
        <div
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(200,169,110,0.2)" }}
        >
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr
                  style={{
                    background: "rgba(200,169,110,0.1)",
                    borderBottom: "1px solid rgba(200,169,110,0.25)",
                  }}
                >
                  {[
                    "Historical Figure",
                    "Decade",
                    "Score",
                    "Historical Thinking Skill",
                    "Analysis",
                  ].map((col) => (
                    <th
                      key={col}
                      className="px-6 py-4 text-left text-xs font-bold tracking-widest uppercase"
                      style={{ color: "#c8a96e" }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => (
                  <tr
                    key={row.figure}
                    className="transition-colors duration-200 hover:bg-white/5"
                    style={{
                      borderBottom:
                        idx < tableData.length - 1
                          ? "1px solid rgba(255,255,255,0.06)"
                          : "none",
                      background:
                        idx % 2 === 0
                          ? "rgba(255,255,255,0.02)"
                          : "transparent",
                    }}
                  >
                    <td className="px-6 py-5">
                      <span
                        className="font-bold text-sm"
                        style={{ color: "#e8e8e8" }}
                      >
                        {row.figure}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className="text-xs font-semibold tracking-wider px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(200,169,110,0.1)",
                          color: "#c8a96e",
                          border: "1px solid rgba(200,169,110,0.25)",
                        }}
                      >
                        {row.decade}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <ScoreBadge score={row.score} />
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className="text-xs italic"
                        style={{ color: "rgba(232,232,232,0.5)" }}
                      >
                        {row.thinkingSkill}
                      </span>
                    </td>
                    <td
                      className="px-6 py-5 text-sm leading-relaxed max-w-md"
                      style={{ color: "rgba(232,232,232,0.8)" }}
                    >
                      {renderWithBold(row.analysis)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden">
            {tableData.map((row, idx) => (
              <div
                key={row.figure}
                className="p-5"
                style={{
                  borderBottom:
                    idx < tableData.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                  background:
                    idx % 2 === 0
                      ? "rgba(255,255,255,0.02)"
                      : "transparent",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3
                      className="font-bold text-base"
                      style={{ color: "#e8e8e8" }}
                    >
                      {row.figure}
                    </h3>
                    <span
                      className="inline-block text-xs font-semibold tracking-wider px-3 py-0.5 rounded-full mt-1"
                      style={{
                        background: "rgba(200,169,110,0.1)",
                        color: "#c8a96e",
                        border: "1px solid rgba(200,169,110,0.25)",
                      }}
                    >
                      {row.decade}
                    </span>
                  </div>
                  <ScoreBadge score={row.score} />
                </div>
                <p
                  className="text-xs italic mb-2"
                  style={{ color: "rgba(232,232,232,0.45)" }}
                >
                  {row.thinkingSkill}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(232,232,232,0.75)" }}
                >
                  {renderWithBold(row.analysis)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
