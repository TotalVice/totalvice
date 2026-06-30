"use client";

import Section from "../ui/Section";
import GameCard from "../ui/GameCard";
import { useGames } from "@/context/GameContext";

export default function DealsSection() {
  const { filteredGames, loading } = useGames();

  if (loading) {
    return null;
  }

  const deals = filteredGames.filter(
    (game: any) => game.type === "deal"
  );

  return (
    <Section
      title="💸 Mejores Ofertas"
      subtitle="Los mejores descuentos disponibles."
    >
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {deals.slice(0, 6).map((game) => (
          <GameCard
            key={game.id}
            {...game}
          />
        ))}
      </div>
    </Section>
  );
}