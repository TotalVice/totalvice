import { api } from "@/lib/api";
import { Game } from "@/types/game";

type GamesResponse = {
  success: boolean;
  total: number;
  games: Game[];
};

export async function getGames(): Promise<Game[]> {
  const data = await api<GamesResponse>("/api/games");

  return data.games;
}