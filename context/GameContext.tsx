"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { Game } from "@/types/game";
import { getGames } from "@/services/game.service";

type GameContextType = {
  games: Game[];
  filteredGames: Game[];
  loading: boolean;
  selectedPlatform: string;
  setSelectedPlatform: (platform: string) => void;
  refreshGames: () => Promise<void>;
};

const GameContext = createContext<GameContextType>({
  games: [],
  filteredGames: [],
  loading: true,
  selectedPlatform: "Todas",
  setSelectedPlatform: () => {},
  refreshGames: async () => {},
});

export function GameProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState("Todas");

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

  const filteredGames = useMemo(() => {
    if (selectedPlatform === "Todas") {
      return games;
    }

    return games.filter((game) =>
      game.platform.toLowerCase().includes(selectedPlatform.toLowerCase())
    );
  }, [games, selectedPlatform]);

  return (
    <GameContext.Provider
      value={{
        games,
        filteredGames,
        loading,
        selectedPlatform,
        setSelectedPlatform,
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