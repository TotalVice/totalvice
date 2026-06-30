export interface Platform {
  id: string;
  name: string;
  slug: string;
}

export const platforms: Platform[] = [
  {
    id: "steam",
    name: "Steam",
    slug: "steam",
  },
  {
    id: "epic-games",
    name: "Epic Games",
    slug: "epic-games",
  },
  {
    id: "prime-gaming",
    name: "Prime Gaming",
    slug: "prime-gaming",
  },
  {
    id: "gog",
    name: "GOG",
    slug: "gog",
  },
];