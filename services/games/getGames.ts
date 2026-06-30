import { supabase } from "@/lib/supabase";

export async function getGames() {
  const { data, error } = await supabase
    .from("games")
    .select("*");

  if (error) {
    throw error;
  }

  return data;
}