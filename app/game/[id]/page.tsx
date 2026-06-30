import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Platforms from "@/components/home/Platforms";
import DealsSection from "@/components/home/DealsSection";
import FreeGamesSection from "@/components/home/FreeGamesSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <Hero />

      <Stats />

      <Platforms />

      <DealsSection />

      <FreeGamesSection />

      <Footer />
    </main>
  );
}