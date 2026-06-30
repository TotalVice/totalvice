export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
        TV
      </div>

      <div className="leading-none">
        <p className="text-xl font-black">
          <span className="text-blue-500">Total</span>Vice
        </p>

        <span className="text-xs text-slate-400">
          Gaming Deals Tracker
        </span>
      </div>
    </div>
  );
}