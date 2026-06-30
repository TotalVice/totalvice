"use client";

import { Search } from "lucide-react";
import { useGames } from "@/context/GameContext";

export default function SearchBar() {
  const { search, setSearch } = useGames();

  return (
    <div className="mt-12 flex w-full max-w-2xl">

      <div className="relative w-full">

        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar un juego..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 py-4 pl-14 pr-6 outline-none transition focus:border-blue-500"
        />

      </div>

    </div>
  );
}