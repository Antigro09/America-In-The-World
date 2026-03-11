const tableData = [
  {
    figure: "Andrew Carnegie",
    decade: "1890s",
    score: -2,
    analysis:
      "Andrew Carnegie is a wealthy industrialist who made his fortune in the steel industry through vertical expansion. Although he promoted a lot of economic and business growth, his methods of vertical integration were unorthodox and unethical. He believed that people should be allowed to make money anyway they are able to, and that the rich must support the local community through donations and charity. He believes that increased regulations have damped the growth in the American economic sector and were not necessary measures. The anti-union measures used by Andrew Carnegie directly **caused** the regulations in the 1910s and the New Deal. These regulations improved the quality of life for workers in America and strengthened the economy despite the effects of the Great Depression.",
    thinkingSkill: "Causation",
  },
  {
    figure: "William Randolph Hearst",
    decade: "1900's",
    score: -1,
    analysis:
      "William Randolph Hearst was a media tycoon in the 1900s who attempted to use his media companies to sway public opinion in favor of his preferences. He frequently used public opinion to serve his own interests, growing his media companies through the use of horizontal expansion. His views **starkly contrasted** those of Huey Long who believed that public interests should be used to benefit the general public rather than a person's own interests. Despite his effects on the American media sector, the American economy remained strong until the Great Depression in the 1930s.",
    thinkingSkill: "Comparison",
  },
  {
    figure: "Jeannette Rankin",
    decade: "1910s",
    score: 2,
    analysis:
      "Jeannette Rankin was a politician, pacifist, and women's suffrage activist who advocated for equality and women's suffrage. She organized the woman's suffrage party in New York as well as supporting woman's suffrage in her home state of Montana. She coordinated grassroots organizations so that common women could join the movement. These movements and efforts were different from past efforts that just tried to mobilize national conventions that not every women could attend. Rankin's strategy allowed common women to participate in political movements which ultimately improved the lives of misrepresented women.",
    thinkingSkill: "Any",
  },
  {
    figure: "W.E.B. Du Bois",
    decade: "1920s",
    score: 2,
    analysis:
      "W.E.B DuBois was an activist who called for civil rights for all Americans. His views helped uplift the African American community by founding the NAACP, and **continued** the long battle for equal civil rights. His efforts helped actively challenge the century-old institution of racism in the South by lobbying for better civil rights laws as well as empowering affluent African Americans to help the poorer African Americans. These efforts helped improve the lives of countless African Americans who didn't have a leader or organization to look up to and be supported by.",
    thinkingSkill: "Continuity",
  },
  {
    figure: "Huey Long",
    decade: "1930s",
    score: 4,
    analysis:
      "He was a far left democrat who was a staunch opponent of Roosevelt's New Deal. He openly believed that the New Deal didn't do enough for Americans at the time, and believed that more should have been done. His view of the need for Government intervention in the economy **differs most starkly** from William Randolph Hearst's attempts to use Journalism to sway public interests in favor of his own interests rather than helping the general public. These views helped improve America by the end of 1945 by advocating for and supporting legislations that improved the quality of life and reduced corruption for all Americans.",
    thinkingSkill: "Comparison",
  },
  {
    figure: "Franklin Delano Roosevelt",
    decade: "1940s",
    score: 5,
    analysis:
      "Franklin Delano Roosevelt was the 32nd US president, and created the New Deal, a set of Government programs to help alleviate the economy after the Great Depression. His views were a **stark change** from his predecessors who believed in Laissez Faire capitalism, and that the economy would self stabilize. His actions such as increasing government spending ultimately strengthened the economy as well as improved the quality of life for many Americans as they had access to stable government jobs.",
    thinkingSkill: "Change",
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
            Written information and scoring for major historical figures from 1890 to 1945.
          </p>
          <span style={{ color: "#d3b277" }}>
              Bold text reflects historical thinking skills.
            </span>
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
