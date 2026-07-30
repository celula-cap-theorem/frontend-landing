import { Activity, Database, LogIn, Server, Users, Zap } from "lucide-react";
import type { LandingMetrics } from "@/lib/types";

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

export function Stats({ metrics }: { metrics: LandingMetrics | null }) {
  const items = [
    { icon: Users, label: "Usuarios registrados", value: metrics ? fmt(metrics.totalUsers) : "—" },
    { icon: Database, label: "Bases de datos creadas", value: metrics ? fmt(metrics.totalDatabases) : "—" },
    { icon: Server, label: "Bases activas", value: metrics ? fmt(metrics.activeDatabases) : "—" },
    { icon: LogIn, label: "Inicios de sesión", value: metrics ? fmt(metrics.totalLogins) : "—" },
    { icon: Activity, label: "Usuarios activos", value: metrics ? fmt(metrics.activeUsers) : "—" },
    { icon: Zap, label: "Disponibilidad", value: metrics?.availability ?? "—" },
  ];

  return (
    <section className="border-b border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <Icon className="h-5 w-5 text-indigo-400" />
            <span className="text-2xl font-semibold text-white">{value}</span>
            <span className="text-xs text-zinc-500">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
