export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-blue-500">
          Total<span className="text-white">Vice</span>
        </h1>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#" className="hover:text-white">
            Juegos
          </a>

          <a href="#" className="hover:text-white">
            Ofertas
          </a>

          <a href="#" className="hover:text-white">
            Noticias
          </a>

          <a href="#" className="hover:text-white">
            Plataformas
          </a>
        </nav>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500">
          Iniciar sesión
        </button>
      </div>
    </header>
  );
}