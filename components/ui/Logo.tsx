export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 font-black text-xl text-white shadow-lg shadow-blue-500/30">
        TV
      </div>

      <div>

        <h1 className="text-2xl font-black tracking-tight">
          <span className="text-blue-500">
            Total
          </span>
          Vice
        </h1>

        <p className="text-xs text-slate-400">
          Gaming Deals Tracker
        </p>

      </div>

    </div>
  );
}