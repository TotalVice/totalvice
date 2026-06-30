type GamePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GamePage({ params }: GamePageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <p className="text-blue-400">
          Juego #{id}
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Página del juego
        </h1>

        <p className="mt-6 max-w-2xl text-slate-400">
          Más adelante aquí mostraremos toda la información del juego:
          imágenes, descripción, historial de precios, plataformas,
          requisitos, valoraciones y ofertas.
        </p>

      </div>
    </main>
  );
}