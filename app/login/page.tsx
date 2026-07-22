import { Database } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5112";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm rounded-xl border border-white/10 p-8">
        <div className="mb-8 flex items-center justify-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700">
            <Database className="h-[18px] w-[18px] text-white" strokeWidth={2.25} />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            DB<span className="text-indigo-400">Hub</span>
          </span>
        </div>

        <h1 className="text-center text-xl font-semibold text-white">
          Iniciar sesión
        </h1>
        <p className="mt-1 text-center text-sm text-zinc-400">
          Accedé a tu base de datos SQL Server
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href={`${API_URL}/api/auth/google`}
            className="flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5"
          >
            Continuar con Google
          </a>
          <a
            href={`${API_URL}/api/auth/github`}
            className="flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5"
          >
            Continuar con GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
