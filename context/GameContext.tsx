"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Game } from "@/types/game";
import { getGames } from "@/services/game.service";

type GameContextType = {
  games: Game[];
  loading: boolean;
  refreshGames: () => Promise<void>;
};

const GameContext = createContext<GameContextType>({
  games: [],
  loading: true,
  refreshGames: async () => {},
});

export function GameProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  async function refreshGames() {
    setLoading(true);

    try {
      const data = await getGames();
      setGames(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshGames();
  }, []);

  return (
    <GameContext.Provider
      value={{
        games,
        loading,
        refreshGames,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGames() {
  return useContext(GameContext);
}