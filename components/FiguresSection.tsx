const figures = [
  {
    name: "Frances Perkins",
    decades: "1930s, 1940s",
    description:
      "As FDR's Secretary of Labor—the first woman to serve in a U.S. Cabinet—Frances Perkins was the driving force behind the New Deal labor reforms, championing the Social Security Act, minimum wage laws, and the 40-hour workweek, fundamentally reshaping the American worker's rights.",
    icon: "⚖️",
    color: "#9b59b6",
  },
  {
    name: "Queen Liliʻuokalani",
    decades: "1890s",
    description:
      "The last reigning monarch of Hawaii, Queen Liliʻuokalani opposed the American-backed coup that overthrew her government in 1893, symbolizing the tension between U.S. imperial expansion and the sovereignty of indigenous peoples.",
    icon: "👑",
    color: "#e74c3c",
  },
  {
    name: "Henry Cabot Lodge",
    decades: "1900s, 1910s",
    description:
      "A staunch nationalist and Senate leader, Henry Cabot Lodge led the opposition to the Treaty of Versailles and the League of Nations, arguing that American sovereignty must not be subordinated to international bodies.",
    icon: "🏛️",
    color: "#3498db",
  },
  {
    name: "Alice Paul",
    decades: "1910s, 1920s",
    description:
      "A radical suffragist and feminist leader, Alice Paul organized the picketing of the White House and drafted the Equal Rights Amendment, pushing the suffrage movement beyond its moderate roots toward full legal equality for women.",
    icon: "✊",
    color: "#e91e8c",
  },
  {
    name: "Herbert Hoover",
    decades: "1920s, 1930s",
    description:
      "Hoover's faith in voluntarism and opposition to direct federal relief during the Great Depression led to widespread suffering and political collapse, serving as a cautionary tale about the limits of laissez-faire governance in times of crisis.",
    icon: "📉",
    color: "#95a5a6",
  },
  {
    name: "Fred Korematsu",
    decades: "1940s",
    description:
      "Fred Korematsu defied Executive Order 9066 and challenged the constitutionality of Japanese American internment all the way to the Supreme Court, becoming an enduring symbol of civil liberties resistance against wartime fear and racism.",
    icon: "🗽",
    color: "#e67e22",
  },
  {
    name: "William McKinley",
    decades: "1890s",
    description:
      "President McKinley led the United States into the Spanish-American War in 1898, acquiring Guam, Puerto Rico, and the Philippines and marking America's decisive turn toward overseas imperialism and great-power competition.",
    icon: "🌎",
    color: "#1abc9c",
  },
  {
    name: "Theodore Roosevelt",
    decades: "1900s, 1910s",
    description:
      'A progressive Republican and foreign policy hawk, Theodore Roosevelt wielded the "Big Stick" abroad while busting trusts at home, redefining the presidency as an active force for both domestic reform and international power projection.',
    icon: "🦁",
    color: "#27ae60",
  },
  {
    name: "W.E.B. Du Bois",
    decades: "1910s, 1920s",
    description:
      "Intellectual giant and co-founder of the NAACP, W.E.B. Du Bois challenged Booker T. Washington's accommodationist approach and demanded full civil and political equality for Black Americans through scholarship, activism, and the foundational concept of the \"double consciousness.\"",
    icon: "✍️",
    color: "#8e44ad",
  },
  {
    name: "Huey Long",
    decades: "1930s",
    description:
      "The flamboyant Louisiana governor and senator, Huey Long built a powerful political machine on populist rhetoric, challenging FDR from the left with his \"Share Our Wealth\" plan and demonstrating the dangerous appeal of demagogic politics during the Depression.",
    icon: "📢",
    color: "#c0392b",
  },
  {
    name: "Albert Einstein",
    decades: "1940s",
    description:
      "A refugee from Nazi Germany, Albert Einstein warned FDR of Germany's nuclear ambitions in his famous 1939 letter, helping spark the Manhattan Project—a scientific and moral turning point that changed the nature of warfare and geopolitics forever.",
    icon: "⚛️",
    color: "#2980b9",
  },
  {
    name: "Jane Addams",
    decades: "1890s, 1900s",
    description:
      "Nobel Peace Prize laureate and founder of Hull House, Jane Addams pioneered the settlement house movement in Chicago, providing vital social services to immigrants and the poor while shaping the intellectual foundations of American social work and progressive reform.",
    icon: "🏠",
    color: "#f39c12",
  },
  {
    name: "William Howard Taft",
    decades: "1910s",
    description:
      "Taft's presidency was marked by an aggressive \"Dollar Diplomacy\" in Latin America and a conservative interpretation of the presidential role that frustrated progressives, eventually leading to the 1912 party split with Roosevelt that handed the election to Woodrow Wilson.",
    icon: "💼",
    color: "#7f8c8d",
  },
  {
    name: "Frank Kellogg",
    decades: "1920s",
    description:
      "As Secretary of State, Frank Kellogg co-authored the Kellogg-Briand Pact of 1928, an idealistic multilateral treaty that renounced war as an instrument of national policy—a noble gesture that nonetheless failed to prevent the conflicts of the 1930s and 1940s.",
    icon: "🕊️",
    color: "#16a085",
  },
  {
    name: "A. Philip Randolph",
    decades: "1930s, 1940s",
    description:
      "Founder of the Brotherhood of Sleeping Car Porters, A. Philip Randolph leveraged the threat of a March on Washington to pressure FDR into signing Executive Order 8802, banning discrimination in the defense industry and marking a pivotal step in the long civil rights struggle.",
    icon: "🚂",
    color: "#d35400",
  },
  {
    name: "Winston Churchill",
    decades: "1940s",
    description:
      "Britain's wartime prime minister, Winston Churchill was America's closest ally in World War II, forging the \"Special Relationship\" and shaping the post-war international order at conferences like Yalta and Potsdam, though his views on empire often clashed with American ideals of self-determination.",
    icon: "🇬🇧",
    color: "#2c3e50",
  },
];

export default function FiguresSection() {
  return (
    <section
      id="figures"
      className="py-24 px-6"
      style={{ background: "#0c1220" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase font-medium mb-3"
            style={{ color: "#c8a96e" }}
          >
            Key Personalities
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              color: "#e8e8e8",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Historical Figures
          </h2>
          <p
            className="text-base max-w-2xl mx-auto mt-4"
            style={{ color: "rgba(232,232,232,0.55)" }}
          >
            The men and women whose decisions shaped America from 1890 to 1945
          </p>
          <div
            className="w-24 h-0.5 mx-auto mt-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, #c8a96e, transparent)",
            }}
          />
        </div>

        {/* Figures grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {figures.map((figure) => (
            <div
              key={figure.name}
              className="group relative p-5 rounded-xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-default"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: `${figure.color}33`,
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-60"
                style={{ background: figure.color }}
              />

              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl flex-shrink-0">{figure.icon}</span>
                <div>
                  <h3
                    className="font-bold text-base leading-tight"
                    style={{ color: "#e8e8e8" }}
                  >
                    {figure.name}
                  </h3>
                  <span
                    className="inline-block text-xs font-medium tracking-wider mt-1 px-2 py-0.5 rounded-full"
                    style={{
                      background: `${figure.color}22`,
                      color: figure.color,
                      border: `1px solid ${figure.color}44`,
                    }}
                  >
                    {figure.decades}
                  </span>
                </div>
              </div>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(232,232,232,0.65)" }}
              >
                {figure.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
