import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import FiguresSection from "@/components/FiguresSection";
import AnalysisTable from "@/components/AnalysisTable";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0e1a" }}>
      <NavBar />
      <HeroSection />
      <OverviewSection />
      <FiguresSection />
      <AnalysisTable />
      <Footer />
    </main>
  );
}
