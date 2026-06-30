import { Game } from "@/types/game";

export async function getGames(): Promise<Game[]> {
  const response = await fetch("/api/games", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No se pudieron obtener los juegos.");
  }

  const data = await response.json();

  return data.games;
}