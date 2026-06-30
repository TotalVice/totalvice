import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-950/30 via-slate-950 to-slate-950" />

      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <span className="mb-5 rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-400">
          🎮 Juegos gratis todos los días
        </span>

        <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          No busques ofertas.
          <br />
          <span className="text-blue-500">
            Descúbrelas antes que nadie.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg text-slate-400 md:text-xl">
          Juegos gratis, descuentos y promociones de Steam,
          Epic Games, Prime Gaming, GOG, Xbox y PlayStation.
        </p>

        <SearchBar />

      </div>

    </section>
  );
}