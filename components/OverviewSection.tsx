export default function OverviewSection() {
  const overviewParagraphs = [
    "In 1890, due to the staggering, unequally distributed wealth the US held, many reforms were made to equalize the current system by employing socialist political ideals, striking for improved wages, and the use of unions to lobby for worker reforms.",
    "In the 1900s, the US shifted to control Latin America as its own sphere of influence by ensuring the US dollar was the main currency in the western hemisphere, as well as funding insurgencies that allowed for the creation of the Panama Canal which ultimately made the US stronger in terms of trading ability.",
    "In the 1910s, the US attempted to stay out of the brewing World War but ultimately joined, which strengthened the economy and allowed the roaring 20s in the 1920s to allow for massive economic prosperity for millions of Americans and allowed many to own household appliances and actually buy the millions of products being made.",
    "This prosperity was short-lived, however, and in the 1930s the economy crashed which caused a large depression and made many people unemployed and broke; to counter this from happening again many economic reforms were made, which allowed citizens to have their life savings insured as well as an appropriate amount of government intervention which alleviated the effects of the depression.",
    "In the early 1940s, the US faced the threat of war as the Japanese island-hopping campaign drew ever closer to the continental US, and Germany was conquering many countries in Europe, including former US allies, which put increased pressure on the US government to make the decision of whether or not to go to war in a conflict which would eventually result in the US becoming a world power after most European countries were weakened.",
  ];

  return (
    <section
      id="overview"
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0b1220 0%, #0f192c 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-left md:text-center">
          <p className="section-kicker mb-3">
            Historical Context
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            1890 to 1945 Overview
          </h2>
          <p
            className="text-sm max-w-3xl mx-auto"
            style={{ color: "rgba(233,237,244,0.68)" }}
          >
            Written information
          </p>
          <div
            className="w-24 h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, transparent, #d3b277, transparent)" }}
          />
        </div>

        <div className="space-y-6">
          {overviewParagraphs.map((text, index) => (
            <div
              key={text}
              className="panel flex gap-6 p-6 rounded-xl transition-all duration-300"
              style={{
                borderColor: "rgba(233,237,244,0.12)",
              }}
            >
              <div className="flex-shrink-0">
                <span
                  className="text-3xl font-bold opacity-30"
                  style={{ color: "#d3b277" }}
                >
                  {`0${index + 1}`}
                </span>
              </div>
              <div>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(233,237,244,0.84)" }}
                >
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
