import Logo from "@/components/ui/Logo";
import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="hidden items-center gap-8 text-sm md:flex">

          <a
            href="#"
            className="transition hover:text-blue-400"
          >
            Juegos
          </a>

          <a
            href="#"
            className="transition hover:text-blue-400"
          >
            Ofertas
          </a>

          <a
            href="#"
            className="transition hover:text-blue-400"
          >
            Plataformas
          </a>

          <a
            href="#"
            className="transition hover:text-blue-400"
          >
            Noticias
          </a>

        </nav>

        <div className="flex items-center gap-3">

          <button className="rounded-xl border border-slate-800 p-3 transition hover:border-blue-500 hover:bg-slate-900">
            <Search size={18} />
          </button>

          <button className="rounded-xl border border-slate-800 p-3 transition hover:border-blue-500 hover:bg-slate-900">
            <Bell size={18} />
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500">
            Iniciar sesión
          </button>

        </div>

      </div>
    </header>
  );
}