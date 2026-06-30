import { Game } from "@/types/game";

export const featuredGames: Game[] = [
  {
    id: "1",
    title: "Death Stranding",
    platform: "Epic Games",
    oldPrice: "$39.99",
    newPrice: "GRATIS",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
    expires: "Quedan 3 días",
    featured: true,
  },
  {
    id: "2",
    title: "The Witcher 3",
    platform: "Steam",
    oldPrice: "$29.99",
    newPrice: "$2.99",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    expires: "Oferta termina mañana",
    featured: true,
  },
  {
    id: "3",
    title: "Control",
    platform: "Prime Gaming",
    oldPrice: "$39.99",
    newPrice: "GRATIS",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800",
    expires: "Disponible esta semana",
    featured: true,
  },
];