import {
  Gift,
  BadgePercent,
  Flame,
  Gamepad2,
} from "lucide-react";

const stats = [
  {
    title: "Juegos gratis",
    value: "8",
    subtitle: "+2 hoy",
    icon: Gift,
    color: "text-green-400",
  },
  {
    title: "Ofertas",
    value: "421",
    subtitle: "Actualizadas",
    icon: BadgePercent,
    color: "text-yellow-400",
  },
  {
    title: "Terminan hoy",
    value: "12",
    subtitle: "No las pierdas",
    icon: Flame,
    color: "text-red-400",
  },
  {
    title: "Plataformas",
    value: "6",
    subtitle: "Conectadas",
    icon: Gamepad2,
    color: "text-blue-400",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <Icon
                className={`mb-5 h-10 w-10 ${stat.color} transition group-hover:scale-110`}
              />

              <p className="text-sm text-slate-400">
                {stat.title}
              </p>

              <h3 className="mt-2 text-5xl font-black">
                {stat.value}
              </h3>

              <p className="mt-4 text-sm text-green-400">
                {stat.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}