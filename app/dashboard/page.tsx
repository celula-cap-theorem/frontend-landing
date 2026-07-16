import { ConnectionsChart } from "@/components/dashboard/ConnectionsChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
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

const activity = [
  {
    icon: CheckCircle2,
    color: "text-emerald-400 bg-emerald-500/10",
    title: "Base de datos creada: test-staging",
    subtitle: "Instancia aprovisionada en región sa-east",
  },
  {
    icon: Clock,
    color: "text-amber-400 bg-amber-500/10",
    title: "Contraseña regenerada",
    subtitle: "Credenciales actualizadas para auth-svc",
  },
  {
    icon: Clock,
    color: "text-zinc-400 bg-white/5",
    title: "Base pausada por inactividad",
    subtitle: "blog-cms sin conexiones en 24h",
  },
  {
    icon: Clock,
    color: "text-amber-400 bg-amber-500/10",
    title: "Límite de conexiones alcanzado",
    subtitle: "auth-svc alcanzó 5/5 conexiones simultáneas",
  },
  {
    icon: Clock,
    color: "text-zinc-400 bg-white/5",
    title: "Stored Procedure ejecutado",
    subtitle: "sp_CreateUser en mi-tienda-online",
  },
  {
    icon: AlertTriangle,
    color: "text-red-400 bg-red-500/10",
    title: "Rate limit disparado",
    subtitle: "test-staging excedió 100 req/min",
  },
];

export default function OverviewPage() {
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
        <StatCard
          icon={Database}
          color="emerald"
          value="3"
          label="Bases activas"
          change="12%"
          positive
        />
        <StatCard
          icon={HardDrive}
          color="sky"
          value="37.9 MB"
          label="Espacio usado"
          change="5%"
          positive
        />
        <StatCard
          icon={Activity}
          color="purple"
          value="34.6K"
          label="Tráfico (7d)"
          change="18%"
          positive
        />
        <StatCard
          icon={Link2}
          color="amber"
          value="9"
          label="Conexiones"
          change="3%"
          positive={false}
        />
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
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
              ↑ 18%
            </span>
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
          <h3 className="font-semibold text-white">Actividad reciente</h3>
          <div className="mt-4 space-y-4">
            {activity.map(({ icon: Icon, color, title, subtitle }, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${color}`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-medium text-white">
                    {title}
                  </div>
                  <div className="text-sm text-zinc-500">{subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-white/10 p-5">
            <h3 className="font-semibold text-white">Alertas</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm text-amber-200">
                <AlertTriangle className="mb-1 h-4 w-4 text-amber-400" />
                La base <code className="text-amber-300">auth-svc</code> está
                al 85% de capacidad.
              </div>
              <div className="rounded-lg border border-sky-500/20 bg-sky-500/5 px-4 py-3 text-sm text-sky-200">
                <Clock className="mb-1 h-4 w-4 text-sky-400" />
                La base <code className="text-sky-300">test-staging</code>{" "}
                expira en 2 días.
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 p-5">
            <h3 className="font-semibold text-white">Estado del sistema</h3>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Todos los sistemas operativos
            </div>
            <p className="mt-1 text-sm text-zinc-500">
              Uptime 99.98% · Latencia 24ms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
