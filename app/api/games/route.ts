import { NextResponse } from "next/server";
import { getCheapSharkDeals } from "@/services/cheapshark.service";

export async function GET() {
  try {
    const deals = await getCheapSharkDeals();

    const games = deals.map((game) => ({
      id: game.gameID,
      title: game.title,
      platform: "Steam",
      oldPrice: `$${game.normalPrice}`,
      newPrice: `$${game.salePrice}`,
      image: game.thumb,
      expires: "Oferta disponible",
    }));

    return NextResponse.json({
      success: true,
      total: games.length,
      games,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "No se pudieron obtener las ofertas.",
      },
      {
        status: 500,
      }
    );
  }
}