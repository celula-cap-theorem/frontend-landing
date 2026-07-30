import { cookies } from "next/headers";
import { ConnectionsChart } from "@/components/dashboard/ConnectionsChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { apiFetch } from "@/lib/api";
import type { DashboardData, DatabaseConnection, LandingMetrics } from "@/lib/types";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Database,
  HardDrive,
  Link2,
  Plus,
} from "lucide-react";

async function getData(token: string) {
  try {
    const [dashboard, db, metrics] = await Promise.all([
      apiFetch<DashboardData>("/api/dashboard", token).catch(() => null),
      apiFetch<DatabaseConnection>("/api/databases/mine", token).catch(() => null),
      apiFetch<LandingMetrics>("/api/landing/metrics").catch(() => null),
    ]);
    return { dashboard, db, metrics };
  } catch {
    return { dashboard: null, db: null, metrics: null };
  }
}

function fmtBytes(bytes: number): string {
  if (bytes >= 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
}

export default async function OverviewPage() {
  const token = (await cookies()).get("ct_token")?.value;
  const { dashboard, db, metrics } = token ? await getData(token) : { dashboard: null, db: null, metrics: null };

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="mt-1 text-zinc-400">
            Resumen del estado de tus bases de datos y uso de la plataforma.
          </p>
        </div>
        <a
          href="/dashboard/databases/new"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white hover:from-indigo-500 hover:to-purple-500"
        >
          <Plus className="h-4 w-4" />
          Nueva base
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {dashboard ? (
          <StatCard
            icon={CheckCircle2}
            color="emerald"
            value={dashboard.status}
            label="Estado del servicio"
            change="En vivo"
            positive={dashboard.status === "Activa"}
          />
        ) : (
          <StatCard
            icon={CheckCircle2}
            color="emerald"
            value="Sin datos"
            label="Inicia sesión para ver"
            change=""
            positive={false}
          />
        )}

        {dashboard ? (
          <StatCard
            icon={HardDrive}
            color="sky"
            value={fmtBytes(dashboard.usedBytes)}
            label={`de ${fmtBytes(dashboard.maxBytes)} usados`}
            change="En vivo"
            positive
          />
        ) : (
          <StatCard
            icon={HardDrive}
            color="sky"
            value="—"
            label="Espacio usado"
            change=""
            positive={false}
          />
        )}

        {metrics ? (
          <StatCard
            icon={Database}
            color="emerald"
            value={String(metrics.activeDatabases)}
            label="Bases activas"
            change="En vivo"
            positive
          />
        ) : (
          <StatCard
            icon={Database}
            color="emerald"
            value="—"
            label="Bases activas"
            change=""
            positive={false}
          />
        )}

        {metrics ? (
          <StatCard
            icon={Activity}
            color="purple"
            value={String(metrics.totalUsers)}
            label="Usuarios registrados"
            change="En vivo"
            positive
          />
        ) : (
          <StatCard
            icon={Activity}
            color="purple"
            value="—"
            label="Usuarios"
            change=""
            positive={false}
          />
        )}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-white/10 p-5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-white">
                Tráfico de solicitudes
              </h3>
              <p className="text-sm text-zinc-500">Últimos 7 días</p>
            </div>
          </div>
          <div className="mt-6">
            <TrafficChart />
          </div>
        </div>

        <div className="rounded-xl border border-white/10 p-5">
          <div>
            <h3 className="font-semibold text-white">
              Conexiones concurrentes
            </h3>
            <p className="text-sm text-zinc-500">Hoy por hora</p>
          </div>
          <div className="mt-6">
            <ConnectionsChart />
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-white/10 p-5">
          <h3 className="font-semibold text-white">Tu base de datos</h3>
          {db ? (
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3">
                <span className="text-sm text-zinc-400">Host</span>
                <span className="text-sm font-mono text-zinc-200">{db.host}:{db.port}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3">
                <span className="text-sm text-zinc-400">Base de datos</span>
                <span className="text-sm font-mono text-zinc-200">{db.dbName}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3">
                <span className="text-sm text-zinc-400">Usuario</span>
                <span className="text-sm font-mono text-zinc-200">{db.dbUser}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3">
                <span className="text-sm text-zinc-400">Contraseña</span>
                <span className="text-sm font-mono text-zinc-200">••••••••</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3">
                <span className="text-sm text-zinc-400">Motor</span>
                <span className="text-sm text-zinc-200">{db.engine}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3">
                <span className="text-sm text-zinc-400">Estado</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400 px-2.5 py-1 text-xs font-semibold text-on-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {db.status}
                </span>
              </div>
            </div>
          ) : (
            <div className="mt-4 text-sm text-zinc-500">
              No tienes bases de datos. <a href="/dashboard/databases/new" className="text-indigo-400 hover:underline">Crea una</a>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-white/10 p-5">
            <h3 className="font-semibold text-white">Estado del sistema</h3>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {metrics?.availability ?? "99.98%"} Disponibilidad
            </div>
            <p className="mt-1 text-sm text-zinc-500">
              {metrics?.activeUsers ?? 0} usuarios activos esta semana
            </p>
          </div>

          <div className="rounded-xl border border-white/10 p-5">
            <h3 className="font-semibold text-white">Última actividad</h3>
            {dashboard ? (
              <div className="mt-4 text-sm text-zinc-400">
                <p>Último acceso: {new Date(dashboard.lastActivity).toLocaleString("es")}</p>
                <p className="mt-1">Creado: {new Date(dashboard.createdAt).toLocaleDateString("es")}</p>
              </div>
            ) : (
              <p className="mt-4 text-sm text-zinc-500">Inicia sesión para ver tu actividad</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
