import { NextRequest, NextResponse } from "next/server";
import { getCheapSharkDeals } from "@/services/cheapshark.service";
import { getFreeGames } from "@/services/freetogame.service";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

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

    const game = games.find((g) => g.id === id);

    if (!game) {
      return NextResponse.json(
        { success: false, message: "Juego no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(game);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Error interno" },
      { status: 500 }
    );
  }
}