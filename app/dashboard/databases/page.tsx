import { cookies } from "next/headers";
import { Database, MoreVertical, Plus, Search } from "lucide-react";
import { apiFetch } from "@/lib/api";
import type { DatabaseConnection } from "@/lib/types";

async function getMyDatabase(): Promise<DatabaseConnection | null> {
  const token = (await cookies()).get("ct_token")?.value;
  if (!token) return null;

  try {
    return await apiFetch<DatabaseConnection>("/api/databases/mine", token);
  } catch {
    return null;
  }
}

export default async function DatabasesPage() {
  const mine = await getMyDatabase();

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Mis Bases de Datos
          </h1>
          <p className="mt-1 text-zinc-400">
            Administra tus instancias de bases de datos.
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

      {mine ? (
        <div className="mt-6 rounded-xl border border-white/10">
          <div className="border-b border-white/10 px-6 py-4">
            <h2 className="text-sm font-semibold text-zinc-300">Tu base de datos activa</h2>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-zinc-500">
                <th className="px-6 py-3 font-medium">Nombre</th>
                <th className="px-6 py-3 font-medium">Estado</th>
                <th className="px-6 py-3 font-medium">Host</th>
                <th className="px-6 py-3 font-medium">Usuario</th>
                <th className="px-6 py-3 font-medium">Motor</th>
                <th className="px-6 py-3 font-medium">Creada</th>
                <th className="px-6 py-3 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10 bg-indigo-500/[0.04]">
                <td className="px-6 py-4">
                  <span className="flex items-center gap-2 font-mono text-zinc-200">
                    <Database className="h-4 w-4 text-indigo-400" />
                    {mine.dbName}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400 px-2.5 py-1 text-xs font-semibold text-on-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {mine.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-zinc-400 font-mono">
                  {mine.host}:{mine.port}
                </td>
                <td className="px-6 py-4 text-zinc-400 font-mono">{mine.dbUser}</td>
                <td className="px-6 py-4 text-zinc-400">{mine.engine}</td>
                <td className="px-6 py-4 text-zinc-400">
                  {new Date(mine.createdAt).toLocaleDateString("es")}
                </td>
                <td className="px-6 py-4">
                  <button className="text-zinc-500 hover:text-zinc-200">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="border-t border-white/10 px-6 py-4">
            <h3 className="mb-3 text-sm font-semibold text-zinc-300">Credenciales de conexión</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-white/10 px-4 py-3">
                <span className="text-zinc-500">Contraseña</span>
                <div className="mt-1 font-mono text-zinc-200">{mine.password}</div>
              </div>
              <div className="rounded-lg border border-white/10 px-4 py-3">
                <span className="text-zinc-500">Engine</span>
                <div className="mt-1 text-zinc-200">{mine.engine}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-white/10 p-12 text-center">
          <Database className="mx-auto h-12 w-12 text-zinc-600" />
          <h3 className="mt-4 text-lg font-semibold text-zinc-300">No tienes bases de datos</h3>
          <p className="mt-2 text-sm text-zinc-500">
            Inicia sesión con Google o GitHub para recibir tu base de datos automáticamente.
          </p>
          <a
            href="/login"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:from-indigo-500 hover:to-purple-500"
          >
            Ir a iniciar sesión
          </a>
        </div>
      )}
    </div>
  );
}
