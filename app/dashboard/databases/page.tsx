import { Clock, Database, Globe, MoreVertical, Plus, Search } from "lucide-react";

const databases = [
  {
    name: "mi-tienda-online",
    status: "Activa",
    space: "12.4MB",
    spacePct: 62,
    ttl: "26d",
    connections: "3/5",
    region: "us-east",
    created: "14 jul 2026",
  },
  {
    name: "auth-svc",
    status: "Activa",
    space: "17.1MB",
    spacePct: 86,
    ttl: "13d",
    connections: "5/5",
    region: "eu-west",
    created: "14 jul 2026",
  },
  {
    name: "blog-cms",
    status: "Pausada",
    space: "4.8MB",
    spacePct: 24,
    ttl: "1d",
    connections: "0/5",
    region: "us-west",
    created: "14 jul 2026",
  },
  {
    name: "test-staging",
    status: "Activa",
    space: "3.6MB",
    spacePct: 18,
    ttl: "1d",
    connections: "1/5",
    region: "sa-east",
    created: "14 jul 2026",
  },
];

export default function DatabasesPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Mis Bases de Datos
          </h1>
          <p className="mt-1 text-zinc-400">
            Administra todas tus instancias de SQL Server.
          </p>
        </div>
        <a
          href="/dashboard/databases/new"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white hover:from-indigo-500 hover:to-purple-500"
        >
          <Plus className="h-4 w-4" />
          Crear base de datos
        </a>
      </div>

      <div className="mt-6 rounded-xl border border-white/10">
        <div className="border-b border-white/10 p-4">
          <div className="flex max-w-sm items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-500">
            <Search className="h-4 w-4" />
            <input
              placeholder="Buscar base de datos..."
              className="w-full bg-transparent outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>

        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-zinc-500">
              <th className="px-6 py-3 font-medium">Nombre</th>
              <th className="px-6 py-3 font-medium">Estado</th>
              <th className="px-6 py-3 font-medium">Espacio</th>
              <th className="px-6 py-3 font-medium">TTL</th>
              <th className="px-6 py-3 font-medium">Conexiones</th>
              <th className="px-6 py-3 font-medium">Región</th>
              <th className="px-6 py-3 font-medium">Creada</th>
              <th className="px-6 py-3 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {databases.map((db) => (
              <tr key={db.name} className="border-t border-white/10">
                <td className="px-6 py-4">
                  <span className="flex items-center gap-2 font-mono text-zinc-200">
                    <Database className="h-4 w-4 text-indigo-400" />
                    {db.name}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                      db.status === "Activa"
                        ? "bg-emerald-400 text-on-accent"
                        : "bg-amber-400 text-on-accent"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {db.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-indigo-500"
                        style={{ width: `${db.spacePct}%` }}
                      />
                    </div>
                    <span className="text-zinc-400">{db.space}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 text-zinc-400">
                    <Clock className="h-3.5 w-3.5" />
                    {db.ttl}
                  </span>
                </td>
                <td className="px-6 py-4 text-zinc-400">{db.connections}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 text-zinc-400">
                    <Globe className="h-3.5 w-3.5" />
                    {db.region}
                  </span>
                </td>
                <td className="px-6 py-4 text-zinc-400">{db.created}</td>
                <td className="px-6 py-4">
                  <button className="text-zinc-500 hover:text-zinc-200">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
