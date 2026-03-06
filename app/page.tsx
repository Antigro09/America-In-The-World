"use client";

import { useState, useEffect, useRef } from "react";

const figures = [
  {
    name: "Andrew Carnegie",
    decade: "1890s",
    score: -1,
    image: "🏭",
    thinkingSkill: "Continuity over Time",
    color: "from-amber-900 to-amber-700",
    borderColor: "border-amber-500",
    badgeColor: "bg-amber-900 text-amber-200",
    analysis: (
      <>
        Andrew Carnegie, the steel titan of the Gilded Age, views the United States with cautious skepticism. While his philanthropic legacy shaped American culture, his legacy of{" "}
        <strong>vertical integration and monopolistic practices continued</strong> to define American capitalism well into the 20th century. The wealth inequality he helped create in the 1890s{" "}
        <strong>persisted as a continuous thread</strong> through the Progressive Era, the Roaring Twenties, and into the Depression — only partially addressed by FDR&apos;s New Deal. Carnegie would note that the{" "}
        <strong>underlying structures of wealth concentration remained unchanged</strong>, even as the faces at the top changed. The US is marginally better, but the same fundamental tensions between capital and labor{" "}
        <strong>endure without resolution</strong>.
      </>
    ),
  },
  {
    name: "William Randolph Hearst",
    decade: "1900s",
    score: 4,
    image: "📰",
    thinkingSkill: "Comparison",
    color: "from-blue-900 to-blue-700",
    borderColor: "border-blue-400",
    badgeColor: "bg-blue-900 text-blue-200",
    analysis: (
      <>
        William Randolph Hearst, the media mogul who helped ignite the Spanish-American War with sensationalist &quot;yellow journalism,&quot; sees the 1945 United States as a triumph of American power. His campaign for expansionism in the 1890s–1900s{" "}
        <strong>similarly mirrors the interventionist foreign policy</strong> that defined the US through both World Wars.{" "}
        <strong>In comparison to Carnegie</strong>, who profited domestically through industrial monopoly, Hearst wielded influence through media and imperialism — yet both contributed to American dominance.{" "}
        <strong>Like Hearst&apos;s belief</strong> that America was destined to lead, the 1945 United States emerged as a global superpower, validating the expansionist ideology he championed decades earlier. The nation he envisioned — powerful, influential, and internationally prominent — had become reality.
      </>
    ),
  },
  {
    name: "Jeannette Rankin",
    decade: "1910s",
    score: 5,
    image: "✊",
    thinkingSkill: "Causation",
    color: "from-purple-900 to-purple-700",
    borderColor: "border-purple-400",
    badgeColor: "bg-purple-900 text-purple-200",
    analysis: (
      <>
        Jeannette Rankin, the first woman elected to Congress and the only member to vote against both World Wars, gives the highest score. Her lifelong advocacy for peace and women&apos;s rights{" "}
        <strong>directly caused</strong> ripple effects through American democracy. The suffrage movement she championed{" "}
        <strong>led to</strong> the 19th Amendment in 1920, which{" "}
        <strong>caused</strong> millions of women to gain political voice — a profound democratization of American society. The New Deal policies{" "}
        <strong>resulted in</strong> social safety nets, labor protections, and economic stabilizers that Rankin advocated her entire career.{" "}
        <strong>Because of</strong> these cascading reforms — suffrage, labor rights, social security — the 1945 United States is unquestionably a better, more equal nation than the one she entered Congress in.
      </>
    ),
  },
  {
    name: "W.E.B. DuBois",
    decade: "1920s",
    score: 1,
    image: "✍️",
    thinkingSkill: "Comparison",
    color: "from-red-900 to-red-700",
    borderColor: "border-red-400",
    badgeColor: "bg-red-900 text-red-200",
    analysis: (
      <>
        W.E.B. DuBois, the intellectual co-founder of the NAACP, views progress through the lens of racial justice. The 1945 United States is marginally better, but deeply flawed.{" "}
        <strong>Unlike Carnegie</strong>, who amassed private wealth through exploitation of labor,{" "}
        <strong>DuBois fought to extend the promise of equality to Black Americans</strong> — a fight that remained unresolved. The Harlem Renaissance of the 1920s represented a cultural flourishing,{" "}
        <strong>yet in contrast to white Americans&apos; prosperity</strong>, Black Americans continued to face lynching, Jim Crow laws, and systemic exclusion from New Deal programs. The Tulsa Race Massacre of 1921 exemplified the violent suppression of Black economic success.{" "}
        <strong>By contrast, white America in 1945 enjoyed unprecedented gains</strong> while the &quot;double V&quot; campaign — victory abroad and at home — remained only half-won.
      </>
    ),
  },
  {
    name: "Huey Long",
    decade: "1930s",
    score: 3,
    image: "🎙️",
    thinkingSkill: "Comparison",
    color: "from-green-900 to-green-700",
    borderColor: "border-green-400",
    badgeColor: "bg-green-900 text-green-200",
    analysis: (
      <>
        Huey Long, the firebrand &quot;Kingfish&quot; of Louisiana and staunch opponent of Roosevelt&apos;s New Deal, believed it did not go nearly far enough.{" "}
        <strong>Comparing his &quot;Share Our Wealth&quot; plan to FDR&apos;s New Deal</strong>: Long proposed capping personal fortunes and guaranteeing every family a minimum income — a far more radical redistribution than FDR offered.{" "}
        <strong>In contrast to FDR&apos;s measured approach</strong>, Long argued that the fundamental concentration of wealth{" "}
        <strong>remained similar to what it had been in 1898</strong>, with a small elite still controlling the majority of resources. The banking reforms and social security represent real progress, and the government&apos;s acknowledgment of responsibility to citizens marks genuine improvement.{" "}
        <strong>Unlike in 1898</strong>, where workers had almost no protections, 1945 America at least provided a social safety net — hence a score of 3, reflecting real but insufficient progress.
      </>
    ),
  },
  {
    name: "Franklin D. Roosevelt",
    decade: "1940s",
    score: 4,
    image: "🦅",
    thinkingSkill: "Change over Time",
    color: "from-sky-900 to-sky-700",
    borderColor: "border-sky-400",
    badgeColor: "bg-sky-900 text-sky-200",
    analysis: (
      <>
        Franklin Delano Roosevelt, the 32nd President who led America through both the Great Depression and World War II, sees the 1945 United States as vastly transformed. His New Deal{" "}
        <strong>marked a dramatic change</strong> from his predecessors who believed in laissez-faire capitalism and that the economy would self-stabilize.{" "}
        <strong>Over time</strong>, government&apos;s role evolved from minimal intervention to active protector of citizens — creating Social Security, the FDIC, and the SEC.{" "}
        <strong>By 1945, the transformation was complete</strong>: the US had gone from an isolationist industrial power to the world&apos;s leading military force and economic engine. The{" "}
        <strong>change from 1898 to 1945 represents</strong> a fundamental reimagining of American government&apos;s responsibilities. Roosevelt held out against entering WWII initially, but only entered when American interests aligned — a pragmatic evolution that ultimately secured the &quot;American Century.&quot;
      </>
    ),
  },
];

const overviewSentences = [
  {
    decade: "1890s",
    icon: "⚙️",
    color: "border-amber-500",
    text: "In 1890, due to the staggering, unequally distributed wealth the US held, many reforms were made to equalize the current system by employing socialist political ideals, striking for improved wages, and the use of unions to lobby for worker reforms.",
  },
  {
    decade: "1900s",
    icon: "🌎",
    color: "border-blue-500",
    text: "In the 1900s, the US shifted to control Latin America as its own sphere of influence by ensuring the US dollar was the main currency in the western hemisphere, as well as funding insurgencies that allowed for the creation of the Panama Canal which ultimately made the US stronger in terms of trading ability.",
  },
  {
    decade: "1910s",
    icon: "⚔️",
    color: "border-purple-500",
    text: "In the 1910s, the US attempted to stay out of the brewing World War but ultimately joined, which strengthened the economy and allowed the Roaring 20s to bring massive economic prosperity for millions of Americans, letting many own household appliances and purchase the millions of products being manufactured.",
  },
  {
    decade: "1920s–1930s",
    icon: "📉",
    color: "border-red-500",
    text: "This prosperity was short-lived; in the 1930s the economy crashed, causing a large depression that left many unemployed and destitute — to counter future collapses, sweeping economic reforms were enacted, insuring life savings and providing appropriate government intervention that alleviated the Depression's worst effects.",
  },
  {
    decade: "1940s",
    icon: "🌐",
    color: "border-sky-500",
    text: "In the early 1940s, the US faced the threat of war as Japan's island-hopping campaign drew closer to the continental US and Germany conquered former US allies in Europe, ultimately forcing the decision to enter a conflict that would result in the United States emerging as a world superpower after most European nations were severely weakened.",
  },
];

function ScoreBar({ score }: { score: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const pct = ((score + 5) / 10) * 100;
          setWidth(pct);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [score]);

  const getColor = (s: number) => {
    if (s >= 3) return "bg-green-500";
    if (s >= 1) return "bg-yellow-500";
    if (s === 0) return "bg-gray-400";
    if (s >= -2) return "bg-orange-500";
    return "bg-red-600";
  };

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>-5 Much Worse</span>
        <span className="font-bold text-white text-sm">Score: {score > 0 ? `+${score}` : score}</span>
        <span>+5 Much Better</span>
      </div>
      <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden">
        <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gray-400 z-10" />
        <div
          className={`h-full rounded-full transition-all duration-[1500ms] ease-out ${getColor(score)}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function StarField() {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    size: Math.random() > 0.7 ? 2 : 1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-60"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `pulse ${2 + star.delay}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <div className="min-h-screen text-white relative" style={{ background: "linear-gradient(135deg, #0a0f2e 0%, #0d1b45 50%, #0a0f2e 100%)" }}>
      <StarField />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
        {/* Stripes */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          {Array.from({ length: 13 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full"
              style={{
                top: `${(i / 13) * 100}%`,
                height: `${100 / 13}%`,
                background: i % 2 === 0 ? "#dc2626" : "#ffffff",
              }}
            />
          ))}
        </div>

        {/* Flag stars box */}
        <div className="absolute top-0 left-0 w-48 h-32 bg-blue-900 opacity-20 rounded-br-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1 rounded-full text-sm font-semibold tracking-widest uppercase border border-red-500 text-red-400 bg-red-950/30">
            America In The World • 1890–1945
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="shimmer-text">Is the United States</span>
            <br />
            <span className="text-white">a Better Version of Itself</span>
            <br />
            <span className="text-red-400">in 1945</span>
            <span className="text-white"> than in </span>
            <span className="text-blue-400">1898</span>
            <span className="text-white">?</span>
          </h1>

          <div className="mt-8 p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              <span className="text-green-400 font-bold text-2xl">Yes.</span>{" "}
              The United States is a better version of itself in 1945 than in 1898 due to the{" "}
              <strong className="text-yellow-300">improved quality of life</strong>,{" "}
              <strong className="text-yellow-300">stronger economy</strong>, and{" "}
              <strong className="text-yellow-300">reduced corruption</strong> achieved through decades of progressive reform, global leadership, and democratic expansion.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <div className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              👤 Anthony &nbsp;|&nbsp; Arnav &nbsp;|&nbsp; Martin
            </div>
          </div>

          <div className="mt-12 animate-bounce text-gray-400 text-sm">
            ↓ Scroll to explore
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ──────────────────────────────────────────── */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-900/40 border border-blue-500/30 text-blue-300 mb-4">
              Historical Overview
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              1890 → 1945
            </h2>
            <p className="text-gray-400 mt-3 text-lg">A nation forged through crisis, reform, and global conflict</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-purple-500 to-sky-500" />

            <div className="space-y-8">
              {overviewSentences.map((item, i) => (
                <div key={i} className={`relative pl-0 md:pl-24 fade-in-up`} style={{ animationDelay: `${i * 0.15}s` }}>
                  {/* Timeline dot */}
                  <div className={`hidden md:flex absolute left-4 top-6 w-8 h-8 rounded-full border-2 ${item.color} bg-gray-900 items-center justify-center text-lg`}>
                    {item.icon}
                  </div>

                  <div className={`p-6 rounded-xl border ${item.color} bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl md:hidden">{item.icon}</span>
                      <span className={`px-3 py-0.5 rounded-full text-xs font-bold border ${item.color} text-gray-300 bg-gray-900/50`}>
                        {item.decade}
                      </span>
                    </div>
                    <p className="text-gray-200 leading-relaxed text-base md:text-lg">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FIGURES ───────────────────────────────────────────── */}
      <section className="relative z-10 py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-red-900/40 border border-red-500/30 text-red-300 mb-4">
              Historical Perspectives
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Six Voices from History
            </h2>
            <p className="text-gray-400 mt-3 text-lg">Each figure scores America&apos;s progress from -5 (Much Worse) to +5 (Much Better)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {figures.map((figure, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border ${figure.borderColor} bg-gradient-to-br ${figure.color} bg-opacity-20 backdrop-blur-sm card-hover cursor-pointer overflow-hidden`}
                style={{ background: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))`, borderWidth: "1px" }}
                onClick={() => setActiveTab(activeTab === i ? null : i)}
              >
                {/* Thinking skill badge */}
                <div className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-bold ${figure.badgeColor} border border-current/30`}>
                  {figure.thinkingSkill}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl float-animation">{figure.image}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{figure.name}</h3>
                      <span className={`text-sm px-2 py-0.5 rounded border ${figure.borderColor} text-gray-300`}>
                        {figure.decade}
                      </span>
                    </div>
                  </div>

                  <ScoreBar score={figure.score} />

                  <div className={`mt-4 transition-all duration-500 overflow-hidden ${activeTab === i ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className={`mt-4 pt-4 border-t ${figure.borderColor} border-opacity-30`}>
                      <p className="text-gray-200 text-sm leading-relaxed">{figure.analysis}</p>
                    </div>
                  </div>

                  <button
                    className={`mt-4 w-full py-2 rounded-lg text-sm font-semibold transition-all duration-200 border ${figure.borderColor} border-opacity-50 hover:bg-white/10`}
                  >
                    {activeTab === i ? "▲ Hide Analysis" : "▼ Read Analysis"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────────── */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-yellow-900/40 border border-yellow-500/30 text-yellow-300 mb-4">
              Summary
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Scores at a Glance</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/10">
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-gray-300">Figure</th>
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-gray-300">Decade</th>
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-gray-300">Score</th>
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-gray-300">Thinking Skill</th>
                </tr>
              </thead>
              <tbody>
                {figures.map((fig, i) => (
                  <tr key={i} className={`border-t border-white/5 hover:bg-white/5 transition-colors ${i % 2 === 0 ? "bg-white/2" : ""}`}>
                    <td className="px-6 py-4 font-semibold text-white">
                      <span className="mr-2">{fig.image}</span>{fig.name}
                    </td>
                    <td className="px-6 py-4 text-gray-400">{fig.decade}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${
                        fig.score >= 3 ? "bg-green-900 text-green-300" :
                        fig.score >= 1 ? "bg-yellow-900 text-yellow-300" :
                        fig.score === 0 ? "bg-gray-700 text-gray-300" :
                        "bg-red-900 text-red-300"
                      }`}>
                        {fig.score > 0 ? `+${fig.score}` : fig.score}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${fig.badgeColor}`}>
                        {fig.thinkingSkill}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Average score */}
          <div className="mt-8 p-6 rounded-2xl border border-green-500/30 bg-green-900/10 text-center">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Average Score</p>
            <div className="text-6xl font-bold text-green-400">
              +{(figures.reduce((a, f) => a + f.score, 0) / figures.length).toFixed(1)}
            </div>
            <p className="text-gray-300 mt-3 max-w-lg mx-auto">
              Across all six historical perspectives, the United States in 1945 scores significantly better than in 1898 —
              reflecting decades of reform, growth, and democratic expansion.
            </p>
          </div>
        </div>
      </section>

      {/* ── THINKING SKILLS LEGEND ────────────────────────────── */}
      <section className="relative z-10 py-16 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Historical Thinking Skills Applied</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { skill: "Comparison", desc: "Hearst & DuBois compare similarities and differences in American power", icon: "⚖️", color: "border-blue-500 text-blue-300" },
              { skill: "Causation", desc: "Rankin shows how women's suffrage and reform legislation caused lasting change", icon: "🔗", color: "border-purple-500 text-purple-300" },
              { skill: "Change over Time", desc: "FDR traces the evolution from laissez-faire to activist government", icon: "📈", color: "border-sky-500 text-sky-300" },
              { skill: "Continuity", desc: "Carnegie shows how wealth inequality persisted as a continuous thread", icon: "⏳", color: "border-amber-500 text-amber-300" },
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl border ${item.color.split(" ")[0]} bg-white/5`}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className={`font-bold text-sm mb-2 ${item.color.split(" ")[1]}`}>{item.skill}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="relative z-10 py-10 px-4 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-3xl mb-4">🇺🇸</div>
          <p className="text-gray-400 text-sm">
            <strong className="text-white">America In The World</strong> — Created by Anthony, Arnav &amp; Martin
          </p>
          <p className="text-gray-600 text-xs mt-2">
            AITW Project • Is the United States a better version of itself in 1945 than it was in 1898?
          </p>
        </div>
      </footer>
    </div>
  );
}
