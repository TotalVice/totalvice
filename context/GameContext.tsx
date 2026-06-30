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
  search: string;
  setSearch: (value: string) => void;
  setSelectedPlatform: (platform: string) => void;
  refreshGames: () => Promise<void>;
};

const GameContext = createContext<GameContextType>({
  games: [],
  filteredGames: [],
  loading: true,
  selectedPlatform: "Todas",
  search: "",
  setSearch: () => {},
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
  const [search, setSearch] = useState("");

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
    return games.filter((game) => {
      const platformMatch =
        selectedPlatform === "Todas" ||
        game.platform
          .toLowerCase()
          .includes(selectedPlatform.toLowerCase());

      const searchMatch = game.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return platformMatch && searchMatch;
    });
  }, [games, selectedPlatform, search]);

  return (
    <GameContext.Provider
      value={{
        games,
        filteredGames,
        loading,
        selectedPlatform,
        search,
        setSearch,
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