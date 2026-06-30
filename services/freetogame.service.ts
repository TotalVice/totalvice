export interface FreeToGame {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  short_description: string;
}

export async function getFreeGames(): Promise<FreeToGame[]> {
  const response = await fetch(
    "https://www.freetogame.com/api/games",
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error obteniendo juegos gratuitos.");
  }

  return response.json();
}