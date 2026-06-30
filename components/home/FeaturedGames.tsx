"use client";

import Section from "../ui/Section";
import GameCard from "../ui/GameCard";
import PlatformFilter from "./PlatformFilter";
import { useGames } from "@/context/GameContext";

export default function FeaturedGames() {
  const {
    filteredGames,
    loading,
  } = useGames();

  return (
    <Section
      title="🎮 Juegos"
      subtitle="Explora las mejores ofertas disponibles."
    >
      <PlatformFilter />

      {loading ? (
        <p className="text-slate-400">
          Cargando juegos...
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              platform={game.platform}
              oldPrice={game.oldPrice}
              newPrice={game.newPrice}
              image={game.image}
              expires={game.expires}
            />
          ))}

        </div>
      )}
    </Section>
  );
}