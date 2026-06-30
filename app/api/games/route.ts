import { NextResponse } from "next/server";
import { getCheapSharkDeals } from "@/services/cheapshark.service";
import { getFreeGames } from "@/services/freetogame.service";

export async function GET() {
  try {
    const [deals, freeGames] = await Promise.all([
      getCheapSharkDeals(),
      getFreeGames(),
    ]);

    const games = [
      ...deals.map((game, index) => ({
        id: `deal-${game.gameID}-${index}`,
        type: "deal",
        title: game.title,
        platform: "Steam",
        oldPrice: `$${game.normalPrice}`,
        newPrice: `$${game.salePrice}`,
        image: game.thumb,
        expires: "Oferta disponible",
        source: "CheapShark",
      })),
      ...freeGames.slice(0, 12).map((game) => ({
        id: `free-${game.id}`,
        type: "free",
        title: game.title,
        platform: game.platform,
        oldPrice: "Gratis",
        newPrice: "Gratis",
        image: game.thumbnail,
        expires: "Siempre gratuito",
        source: "FreeToGame",
      })),
    ];

    return NextResponse.json({
      success: true,
      total: games.length,
      games,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "No se pudieron obtener los juegos.",
      },
      {
        status: 500,
      }
    );
  }
}