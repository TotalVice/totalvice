export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">

        <div>
          <h3 className="text-2xl font-bold">
            <span className="text-blue-500">Total</span>Vice
          </h3>

          <p className="mt-3 text-sm text-slate-400">
            Descubre juegos gratis, descuentos y promociones antes que nadie.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Explorar</h4>

          <ul className="space-y-2 text-slate-400">
            <li>Juegos Gratis</li>
            <li>Ofertas</li>
            <li>Steam</li>
            <li>Epic Games</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Comunidad</h4>

          <ul className="space-y-2 text-slate-400">
            <li>Discord</li>
            <li>GitHub</li>
            <li>X</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Legal</h4>

          <ul className="space-y-2 text-slate-400">
            <li>Privacidad</li>
            <li>Términos</li>
            <li>Contacto</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
        © 2026 TotalVice. Todos los derechos reservados.
      </div>
    </footer>
  );
}