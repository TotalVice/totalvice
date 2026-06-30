import {
  Monitor,
  Gamepad2,
  Trophy,
  Gift,
} from "lucide-react";

const platforms = [
  {
    name: "Steam",
    icon: Monitor,
  },
  {
    name: "Epic Games",
    icon: Gift,
  },
  {
    name: "Prime Gaming",
    icon: Trophy,
  },
  {
    name: "GOG",
    icon: Gamepad2,
  },
];

export default function Platforms() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">

      <h2 className="mb-8 text-3xl font-bold">
        Plataformas
      </h2>

      <div className="flex flex-wrap gap-4">

        {platforms.map((platform) => {
          const Icon = platform.icon;

          return (
            <button
              key={platform.name}
              className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-6 py-4 transition hover:border-blue-500 hover:bg-slate-800"
            >
              <Icon className="h-6 w-6 text-blue-400" />

              <span>{platform.name}</span>

            </button>
          );
        })}

      </div>

    </section>
  );
}