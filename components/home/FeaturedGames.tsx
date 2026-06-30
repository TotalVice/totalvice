import Section from "../ui/Section";
import GameCard from "../ui/GameCard";
import { featuredGames } from "@/data/featuredGames";

export default function FeaturedGames() {
  return (
    <Section
      title="🔥 Juegos Gratis Ahora"
      subtitle="Las mejores promociones disponibles en este momento."
    >
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {featuredGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            platform={game.platform}
            oldPrice={game.oldPrice}
            newPrice={game.newPrice}
            image={game.image}
            expires={game.expires}
          />
        ))}
      </div>
    </Section>
  );
}