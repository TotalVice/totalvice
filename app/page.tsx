export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-3xl font-bold">
            <span className="text-blue-500">Total</span>Vice
          </h1>

          <nav className="hidden gap-8 md:flex">
            <a href="#" className="hover:text-blue-400 transition">
              Juegos
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Ofertas
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Plataformas
            </a>
          </nav>

          <button className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-500 transition">
            Iniciar sesión
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-4 rounded-full bg-blue-500/20 px-4 py-1 text-sm text-blue-400">
          🎮 Juegos gratis todos los días
        </span>

        <h2 className="max-w-4xl text-5xl font-extrabold leading-tight">
          No busques ofertas.
          <br />
          <span className="text-blue-500">
            Descúbrelas antes que nadie.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          Encuentra juegos gratuitos, descuentos, promociones y regalos de
          Steam, Epic Games, Prime Gaming, GOG, Xbox y PlayStation.
        </p>

        <div className="mt-10 flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Buscar un juego..."
            className="w-full rounded-l-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none"
          />

          <button className="rounded-r-xl bg-blue-600 px-6 font-semibold hover:bg-blue-500">
            Buscar
          </button>
        </div>
      </section>
    </main>
  );
}