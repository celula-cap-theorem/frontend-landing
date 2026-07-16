import { Copy, Eye, Plus, Trash2 } from "lucide-react";

const keys = [
  {
    name: "Producción",
    key: "dbh_live_k4m9p2••••••••••••",
    permission: "read_write",
    status: "Activa",
    lastUsed: "14/7/2026",
  },
  {
    name: "Desarrollo",
    key: "dbh_live_m8n3q1••••••••••••",
    permission: "read_only",
    status: "Activa",
    lastUsed: "13/7/2026",
  },
  {
    name: "Webhook (antigua)",
    key: "dbh_live_p2r8t5••••••••••••",
    permission: "read_write",
    status: "Revocada",
    lastUsed: "Nunca",
  },
];

export default function ApiKeysPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">API Keys</h1>
          <p className="mt-1 text-zinc-400">
            Administra las claves de acceso para autenticar tus solicitudes.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white hover:from-indigo-500 hover:to-purple-500"
        >
          <Plus className="h-4 w-4" />
          Generar nueva key
        </a>
      </div>

      <div className="mt-6 rounded-xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-zinc-500">
              <th className="px-6 py-3 font-medium">Nombre</th>
              <th className="px-6 py-3 font-medium">Clave</th>
              <th className="px-6 py-3 font-medium">Permisos</th>
              <th className="px-6 py-3 font-medium">Estado</th>
              <th className="px-6 py-3 font-medium">Último uso</th>
              <th className="px-6 py-3 text-right font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((k) => (
              <tr key={k.name} className="border-t border-white/10">
                <td className="px-6 py-4 font-medium text-white">{k.name}</td>
                <td className="px-6 py-4">
                  <span className="flex items-center gap-2 font-mono text-zinc-400">
                    {k.key}
                    <button className="text-zinc-500 hover:text-zinc-200">
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                    <button className="text-zinc-500 hover:text-zinc-200">
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs text-zinc-400">
                    {k.permission}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      k.status === "Activa"
                        ? "bg-emerald-400 text-on-accent"
                        : "bg-zinc-700 text-zinc-300"
                    }`}
                  >
                    {k.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-zinc-400">{k.lastUsed}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    {k.status === "Activa" && (
                      <button className="rounded-md border border-amber-500/30 px-3 py-1.5 text-xs font-medium text-amber-400 hover:bg-amber-500/10">
                        Revocar
                      </button>
                    )}
                    <button className="text-red-400 hover:text-red-300">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
