"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { featuredGames } from "@/data/featuredGames";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    return featuredGames.filter((game) =>
      game.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="relative mt-12 w-full max-w-2xl">

      <div className="flex">

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar un juego..."
          className="w-full rounded-l-xl border border-slate-700 bg-slate-900 px-6 py-4 outline-none focus:border-blue-500"
        />

        <button className="rounded-r-xl bg-blue-600 px-6">
          <Search />
        </button>

      </div>

      {results.length > 0 && (
        <div className="absolute mt-2 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">

          {results.map((game) => (
            <Link
              key={game.id}
              href={`/game/${game.id}`}
              className="block border-b border-slate-800 px-5 py-4 transition hover:bg-slate-800"
            >
              <p className="font-semibold">
                {game.title}
              </p>

              <span className="text-sm text-slate-400">
                {game.platform}
              </span>

            </Link>
          ))}

        </div>
      )}

    </div>
  );
}