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
    if (score >= 4) return { bg: "rgba(109,177,135,0.16)", text: "#6db187", border: "rgba(109,177,135,0.35)" };
    if (score >= 2) return { bg: "rgba(211,178,119,0.18)", text: "#d3b277", border: "rgba(211,178,119,0.35)" };
    if (score >= 0) return { bg: "rgba(126,162,205,0.16)", text: "#7ea2cd", border: "rgba(126,162,205,0.35)" };
    return { bg: "rgba(217,107,107,0.16)", text: "#d96b6b", border: "rgba(217,107,107,0.35)" };
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
        background: "linear-gradient(180deg, #0f192c 0%, #0b1220 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-kicker mb-3">
            Historical Analysis
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Scores &amp; Analysis
          </h2>
          <p
            className="text-sm max-w-2xl mx-auto mt-4"
            style={{ color: "rgba(233,237,244,0.56)" }}
          >
            Each figure is scored on their contribution to American progress.{" "}
            <span style={{ color: "#d3b277" }}>
              Bold text reflects historical thinking skills.
            </span>
          </p>
          <div
            className="w-24 h-0.5 mx-auto mt-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, #d3b277, transparent)",
            }}
          />
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {[
            { range: "+4 to +5", label: "Highly Positive", color: "#6db187" },
            { range: "+1 to +3", label: "Positive", color: "#d3b277" },
            { range: "0", label: "Neutral", color: "#7ea2cd" },
            { range: "-1 and below", label: "Negative Impact", color: "#d96b6b" },
          ].map((item) => (
            <div
              key={item.range}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs"
              style={{
                background: `${item.color}15`,
                border: `1px solid ${item.color}33`,
                color: "rgba(233,237,244,0.75)",
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

        <div
          className="panel rounded-2xl overflow-hidden"
          style={{ borderColor: "rgba(211,178,119,0.24)" }}
        >
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr
                  style={{
                    background: "rgba(211,178,119,0.1)",
                    borderBottom: "1px solid rgba(211,178,119,0.25)",
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
                      style={{ color: "#d3b277" }}
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
                    className="transition-colors duration-200 hover:bg-white/4"
                    style={{
                      borderBottom:
                        idx < tableData.length - 1
                          ? "1px solid rgba(255,255,255,0.06)"
                          : "none",
                      background:
                        idx % 2 === 0
                          ? "rgba(255,255,255,0.014)"
                          : "transparent",
                    }}
                  >
                    <td className="px-6 py-5">
                      <span
                        className="font-bold text-sm"
                        style={{ color: "#e9edf4" }}
                      >
                        {row.figure}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className="text-xs font-semibold tracking-wider px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(211,178,119,0.12)",
                          color: "#d3b277",
                          border: "1px solid rgba(211,178,119,0.26)",
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
                        style={{ color: "rgba(233,237,244,0.56)" }}
                      >
                        {row.thinkingSkill}
                      </span>
                    </td>
                    <td
                      className="px-6 py-5 text-sm leading-relaxed max-w-md"
                      style={{ color: "rgba(233,237,244,0.84)" }}
                    >
                      {renderWithBold(row.analysis)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
                      ? "rgba(255,255,255,0.014)"
                      : "transparent",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3
                      className="font-bold text-base"
                      style={{ color: "#e9edf4" }}
                    >
                      {row.figure}
                    </h3>
                    <span
                      className="inline-block text-xs font-semibold tracking-wider px-3 py-0.5 rounded-full mt-1"
                      style={{
                        background: "rgba(211,178,119,0.12)",
                        color: "#d3b277",
                        border: "1px solid rgba(211,178,119,0.26)",
                      }}
                    >
                      {row.decade}
                    </span>
                  </div>
                  <ScoreBadge score={row.score} />
                </div>
                <p
                  className="text-xs italic mb-2"
                  style={{ color: "rgba(233,237,244,0.5)" }}
                >
                  {row.thinkingSkill}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(233,237,244,0.8)" }}
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
