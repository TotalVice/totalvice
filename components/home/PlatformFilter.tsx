"use client";

import { useGames } from "@/context/GameContext";

const platforms = [
  "Todas",
  "Steam",
  "FreeToGame",
];

export default function PlatformFilter() {
  const {
    selectedPlatform,
    setSelectedPlatform,
  } = useGames();

  return (
    <div className="mb-8 flex flex-wrap gap-3">

      {platforms.map((platform) => (

        <button
          key={platform}
          onClick={() => setSelectedPlatform(platform)}
          className={`rounded-xl px-5 py-3 transition ${
            selectedPlatform === platform
              ? "bg-blue-600 text-white"
              : "bg-slate-900 text-slate-300 hover:bg-slate-800"
          }`}
        >
          {platform}
        </button>

      ))}

    </div>
  );
}