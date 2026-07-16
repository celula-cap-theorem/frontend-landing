import { ArrowDown, ArrowUp, type LucideIcon } from "lucide-react";

const colorMap = {
  emerald: "bg-emerald-500/10 text-emerald-400",
  sky: "bg-sky-500/10 text-sky-400",
  purple: "bg-purple-500/10 text-purple-400",
  amber: "bg-amber-500/10 text-amber-400",
} as const;

export function StatCard({
  icon: Icon,
  color,
  value,
  label,
  change,
  positive,
}: {
  icon: LucideIcon;
  color: keyof typeof colorMap;
  value: string;
  label: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="rounded-xl border border-white/10 p-5">
      <div className="flex items-start justify-between">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorMap[color]}`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
            positive
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {positive ? (
            <ArrowUp className="h-3 w-3" />
          ) : (
            <ArrowDown className="h-3 w-3" />
          )}
          {change}
        </span>
      </div>
      <div className="mt-4 text-2xl font-bold text-white">{value}</div>
      <div className="mt-1 text-sm text-zinc-500">{label}</div>
    </div>
  );
}
