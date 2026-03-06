export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #0c1220 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase font-medium mb-3"
            style={{ color: "#c8a96e" }}
          >
            Historical Context
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#e8e8e8", fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            1890–1945 Overview
          </h2>
          <div
            className="w-24 h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, transparent, #c8a96e, transparent)" }}
          />
        </div>

        {/* Overview sentences */}
        <div className="space-y-6">
          {[
            {
              num: "01",
              decade: "1890s",
              text: "In the 1890s, the United States emerged as an imperial power, annexing Hawaii and gaining territories after the Spanish-American War, while industrialists like Andrew Carnegie shaped a booming—yet unequal—economy through monopolistic practices.",
              color: "#B22234",
            },
            {
              num: "02",
              decade: "1900s–1910s",
              text: "The Progressive Era brought reform movements that challenged corporate power, with presidents Theodore Roosevelt and William Howard Taft using federal authority to break up trusts, while activists like Jane Addams fought for social welfare and suffragists demanded political equality.",
              color: "#c8a96e",
            },
            {
              num: "03",
              decade: "1910s–1920s",
              text: "The United States reluctantly entered World War I in 1917, and afterward the Senate's rejection of the League of Nations reflected a nation torn between global engagement and isolationism, as the Roaring Twenties brought unprecedented prosperity alongside racial tension and social upheaval.",
              color: "#4a90d9",
            },
            {
              num: "04",
              decade: "1920s–1930s",
              text: "The Great Depression, worsened by President Hoover's reluctance to intervene, devastated millions of Americans and eroded faith in laissez-faire capitalism, setting the stage for Franklin Roosevelt's New Deal, which fundamentally transformed the relationship between the federal government and its citizens.",
              color: "#5cb85c",
            },
            {
              num: "05",
              decade: "1940s",
              text: "World War II forced the United States into a global leadership role, and despite moral failures such as Japanese American internment, the war's end in 1945 left America as the world's preeminent economic and military power—a nation that, while still imperfect, had grown stronger, more organized, and more committed to international responsibility than it had been in 1898.",
              color: "#c8a96e",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="flex gap-6 p-6 rounded-xl border transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex-shrink-0">
                <span
                  className="text-3xl font-bold opacity-30"
                  style={{ color: item.color, fontFamily: "Georgia, serif" }}
                >
                  {item.num}
                </span>
              </div>
              <div>
                <span
                  className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
                  style={{
                    background: `${item.color}22`,
                    color: item.color,
                    border: `1px solid ${item.color}44`,
                  }}
                >
                  {item.decade}
                </span>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(232,232,232,0.85)" }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
