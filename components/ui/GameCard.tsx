import Image from "next/image";
import Link from "next/link";

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
  return (
    <Link href={`/game/${id}`}>
      <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">

        <div className="relative h-56 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-3 p-5">

          <span className="text-sm font-medium text-blue-400">
            {platform}
          </span>

          <h3 className="text-xl font-bold">
            {title}
          </h3>

          <div className="flex items-center gap-3">

            <span className="text-slate-500 line-through">
              {oldPrice}
            </span>

            <span className="rounded-lg bg-green-600 px-2 py-1 text-sm font-bold">
              {newPrice}
            </span>

          </div>

          <p className="text-sm text-slate-400">
            ⏳ {expires}
          </p>

          <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-500">
            Reclamar
          </button>

        </div>

      </article>
    </Link>
  );
}