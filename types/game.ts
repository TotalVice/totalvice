export interface Game {
  id: string;
  title: string;
  platform: string;
  oldPrice: string;
  newPrice: string;
  image: string;
  expires: string;
  featured?: boolean;
}