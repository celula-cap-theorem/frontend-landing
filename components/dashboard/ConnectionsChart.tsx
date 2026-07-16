const hours = ["00", "04", "08", "12", "16", "20", "24"];
const values = [2, 1, 3, 5, 4, 3, 2];
const yLabels = [8, 6, 4, 2, 0];
const max = 8;

export function ConnectionsChart() {
  return (
    <div className="flex gap-3">
      <div className="flex h-48 flex-col justify-between text-xs text-zinc-500">
        {yLabels.map((y) => (
          <span key={y}>{y}</span>
        ))}
      </div>

      <div className="flex-1">
        <div className="relative flex h-48 items-end gap-4 px-1">
          {yLabels.map((_, i) => (
            <span
              key={i}
              className="absolute inset-x-0 border-t border-dashed border-white/[0.08]"
              style={{ bottom: `${(i / (yLabels.length - 1)) * 100}%` }}
            />
          ))}
          {values.map((v, i) => (
            <div key={i} className="flex flex-1 justify-center">
              <div
                className="w-full max-w-8 rounded-t-sm bg-purple-600"
                style={{ height: `${(v / max) * 100}%` }}
              />
            </div>
          ))}
        </div>

        <div className="mt-2 flex gap-4 px-1 text-center text-xs text-zinc-500">
          {hours.map((h) => (
            <span key={h} className="flex-1">
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
