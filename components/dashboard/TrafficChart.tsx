const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const yLabels = [8000, 6000, 4000, 2000, 0];

const linePath =
  "M 0,150 C 40,140 70,120 110,122 C 150,124 170,150 210,146 " +
  "C 260,140 280,80 330,64 C 380,48 400,54 440,66 " +
  "C 480,78 500,140 540,150 C 580,158 600,130 640,110 C 670,96 690,92 700,90";

const areaPath = `${linePath} L 700,180 L 0,180 Z`;

export function TrafficChart() {
  return (
    <div className="flex gap-3">
      <div className="flex h-48 flex-col justify-between text-xs text-zinc-500">
        {yLabels.map((y) => (
          <span key={y}>{y}</span>
        ))}
      </div>

      <div className="flex-1">
        <svg viewBox="0 0 700 180" className="h-48 w-full overflow-visible">
          <defs>
            <linearGradient id="trafficFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>

          {yLabels.map((_, i) => (
            <line
              key={i}
              x1="0"
              x2="700"
              y1={i * 45}
              y2={i * 45}
              stroke="white"
              strokeOpacity="0.08"
              strokeDasharray="4 4"
            />
          ))}

          <path d={areaPath} fill="url(#trafficFill)" />
          <path d={linePath} fill="none" stroke="#818cf8" strokeWidth="2.5" />
        </svg>

        <div className="mt-2 flex justify-between text-xs text-zinc-500">
          {days.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
