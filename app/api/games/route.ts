import { NextResponse } from "next/server";
import { featuredGames } from "@/data/featuredGames";

export async function GET() {
  return NextResponse.json({
    success: true,
    total: featuredGames.length,
    games: featuredGames,
  });
}