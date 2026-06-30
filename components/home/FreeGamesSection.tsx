"use client";

import Section from "../ui/Section";
import GameCard from "../ui/GameCard";
import { useGames } from "@/context/GameContext";

export default function FreeGamesSection() {
  const { filteredGames, loading } = useGames();

  if (loading) {
    return null;
  }

  const games = filteredGames.filter(
    (game: any) => game.type === "free"
  );

  return (
    <Section
      title="🎁 Juegos Gratis"
      subtitle="Los mejores juegos gratuitos."
    >
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {games.slice(0, 6).map((game) => (
          <GameCard
            key={game.id}
            {...game}
          />
        ))}
      </div>
    </Section>
  );
}