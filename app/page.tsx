import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Platforms from "@/components/home/Platforms";
import FeaturedGames from "@/components/home/FeaturedGames";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <Stats />
      <Platforms />
      <FeaturedGames />
    </main>
  );
}