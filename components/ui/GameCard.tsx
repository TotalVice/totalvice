import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

type GameCardProps = {
  id: string;
  title: string;
  platform: string;
  oldPrice: string;
  newPrice: string;
  image: string;
  expires: string;
};

export default function GameCard({
  id,
  title,
  platform,
  oldPrice,
  newPrice,
  image,
  expires,
}: GameCardProps) {
  const isFree =
    newPrice.toLowerCase().includes("gratis") ||
    newPrice === "$0.00";

  return (
    <Link href={`/game/${id}`}>
      <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">

        <div className="relative h-56 overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute left-4 top-4">

            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                isFree
                  ? "bg-green-600 text-white"
                  : "bg-blue-600 text-white"
              }`}
            >
              {isFree ? "GRATIS" : "OFERTA"}
            </span>

          </div>

        </div>

        <div className="space-y-4 p-5">

          <p className="text-sm text-blue-400">
            {platform}
          </p>

          <h3 className="line-clamp-2 text-xl font-bold">
            {title}
          </h3>

          <div className="flex items-center gap-3">

            <span className="text-slate-500 line-through">
              {oldPrice}
            </span>

            <span className="rounded-lg bg-green-600 px-3 py-1 font-bold">
              {newPrice}
            </span>

          </div>

          <div className="flex items-center justify-between text-sm text-slate-400">

            <div className="flex items-center gap-2">
              <Tag size={16} />
              {expires}
            </div>

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />

          </div>

        </div>

      </article>
    </Link>
  );
}