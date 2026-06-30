"use client";

import Logo from "@/components/ui/Logo";
import { Bell, Menu, Search, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        {/* Menú escritorio */}
        <nav className="hidden items-center gap-8 text-sm lg:flex">
          <a href="#" className="transition hover:text-blue-400">
            Juegos
          </a>

          <a href="#" className="transition hover:text-blue-400">
            Ofertas
          </a>

          <a href="#" className="transition hover:text-blue-400">
            Plataformas
          </a>

          <a href="#" className="transition hover:text-blue-400">
            Noticias
          </a>
        </nav>

        {/* Botones escritorio */}
        <div className="hidden items-center gap-3 lg:flex">
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

        {/* Botón móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-slate-800 p-3 lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="border-t border-slate-800 bg-slate-950 lg:hidden">
          <div className="flex flex-col px-6 py-4">

            <a className="py-3 hover:text-blue-400" href="#">
              Juegos
            </a>

            <a className="py-3 hover:text-blue-400" href="#">
              Ofertas
            </a>

            <a className="py-3 hover:text-blue-400" href="#">
              Plataformas
            </a>

            <a className="py-3 hover:text-blue-400" href="#">
              Noticias
            </a>

            <button className="mt-4 rounded-xl bg-blue-600 py-3 font-semibold">
              Iniciar sesión
            </button>

          </div>
        </nav>
      )}
    </header>
  );
}