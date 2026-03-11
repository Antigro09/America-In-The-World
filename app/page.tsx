import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import AnalysisTable from "@/components/AnalysisTable";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="site-shell min-h-screen">
      <NavBar />
      <HeroSection />
      <OverviewSection />
      <AnalysisTable />
      <Footer />
    </main>
  );
}
