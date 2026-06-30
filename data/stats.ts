export interface Stat {
  title: string;
  value: string;
  subtitle: string;
  icon: "gift" | "discount" | "fire" | "gamepad";
}

export const stats = [
  {
    title: "Juegos gratis",
    value: "8",
    subtitle: "+2 hoy",
    icon: "gift",
  },
  {
    title: "Ofertas",
    value: "421",
    subtitle: "Actualizadas",
    icon: "discount",
  },
  {
    title: "Terminan hoy",
    value: "12",
    subtitle: "No las pierdas",
    icon: "fire",
  },
  {
    title: "Plataformas",
    value: "6",
    subtitle: "Conectadas",
    icon: "gamepad",
  },
];