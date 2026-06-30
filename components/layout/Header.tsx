export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <a href="/" className="text-3xl font-extrabold tracking-tight">
          <span className="text-blue-500">Total</span>Vice
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#" className="transition hover:text-white">
            Juegos
          </a>

          <a href="#" className="transition hover:text-white">
            Ofertas
          </a>

          <a href="#" className="transition hover:text-white">
            Plataformas
          </a>

          <a href="#" className="transition hover:text-white">
            Noticias
          </a>
        </nav>

        <button className="rounded-xl bg-blue-600 px-5 py-2 font-medium transition hover:bg-blue-500">
          Iniciar sesión
        </button>

      </div>
    </header>
  );
}