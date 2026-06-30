export interface CheapSharkGame {
  gameID: string;
  title: string;
  thumb: string;
  salePrice: string;
  normalPrice: string;
  steamRatingText: string;
}

export async function getCheapSharkDeals(): Promise<CheapSharkGame[]> {
  const response = await fetch(
    "https://www.cheapshark.com/api/1.0/deals?pageSize=12",
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error obteniendo ofertas.");
  }

  return response.json();
}