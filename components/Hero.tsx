import { ArrowRight, Database, HardDrive, Play, ShieldCheck } from "lucide-react";

const dashboardProjects = [
  { name: "base-tienda", env: "online", active: true },
  { name: "api-gateway", env: "", active: true },
  { name: "blog-cms", env: "", active: false },
];

const sidebarItems = [
  "Overview",
  "Bases de datos",
  "Documentación",
  "API Keys",
  "Perfil",
  "Ajustes",
];

const barHeights = [28, 40, 34, 55, 46, 62, 50, 70, 58, 48];

export function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            SQL Server gratis · sin tarjeta de crédito
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Bases de datos
            <br />
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              SQL Server
            </span>{" "}
            en segundos
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
            Crea, conecta y administra instancias de SQL Server gratuitas
            para desarrollo y pruebas. Toda la lógica vive en la base de
            datos con Stored Procedures, Views y Functions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:from-indigo-500 hover:to-purple-500"
            >
              Empezar gratis
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/5"
            >
              <Play className="h-3.5 w-3.5" />
              Ver documentación
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <HardDrive className="h-4 w-4 text-zinc-500" />
              20 MB por proyecto
            </span>
            <span className="inline-flex items-center gap-2">
              <Database className="h-4 w-4 text-zinc-500" />
              Subdominios automáticos
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-zinc-500" />
              Seguridad empresarial
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-surface shadow-2xl shadow-indigo-950/50">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs text-zinc-500">query.sql</span>
            </div>
            <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-6">
              <code>
                <span className="text-purple-400">CREATE PROCEDURE</span>{" "}
                <span className="text-zinc-100">sp_CreateUser</span>
                {"\n"}
                <span className="text-sky-400">@Email</span>{" "}
                <span className="text-amber-300">NVARCHAR</span>
                <span className="text-zinc-400">(255)</span>
                <span className="text-zinc-400">,</span>
                {"\n"}
                <span className="text-sky-400">@PasswordHash</span>{" "}
                <span className="text-amber-300">NVARCHAR</span>
                <span className="text-zinc-400">(255)</span>
                {"\n"}
                <span className="text-purple-400">AS BEGIN</span>
                {"\n"}
                <span className="text-purple-400">INSERT INTO</span>{" "}
                <span className="text-zinc-100">Users (Email, PasswordHash)</span>
                {"\n"}
                <span className="text-purple-400">VALUES</span>{" "}
                <span className="text-zinc-100">(@Email, @PasswordHash);</span>
                {"\n"}
                <span className="text-purple-400">SELECT</span>{" "}
                <span className="text-zinc-500">-- returns new id</span>
                {"\n"}
                <span className="text-zinc-100">SCOPE_IDENTITY()</span>{" "}
                <span className="text-purple-400">AS</span>{" "}
                <span className="text-zinc-100">UserId;</span>
                {"\n"}
                <span className="text-purple-400">END</span>
              </code>
            </pre>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-surface shadow-2xl shadow-indigo-950/50">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-xs text-zinc-500">
                app.dbhub.dev/dashboard
              </span>
            </div>
            <div className="flex">
              <div className="w-36 shrink-0 border-r border-white/10 px-3 py-4 text-[13px]">
                {sidebarItems.map((item, i) => (
                  <div
                    key={item}
                    className={`mb-1 rounded-md px-3 py-1.5 ${
                      i === 0
                        ? "bg-indigo-500/15 text-indigo-300"
                        : "text-zinc-400"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex-1 space-y-4 p-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg border border-white/10 p-3">
                    <div className="text-[11px] text-zinc-500">
                      Bases activas
                    </div>
                    <div className="mt-1 text-lg font-semibold text-emerald-400">
                      4
                    </div>
                  </div>
                  <div className="rounded-lg border border-white/10 p-3">
                    <div className="text-[11px] text-zinc-500">Espacio</div>
                    <div className="mt-1 text-lg font-semibold text-sky-400">
                      38 MB
                    </div>
                  </div>
                  <div className="rounded-lg border border-white/10 p-3">
                    <div className="text-[11px] text-zinc-500">Tráfico</div>
                    <div className="mt-1 text-lg font-semibold text-purple-400">
                      12K
                    </div>
                  </div>
                </div>

                <div className="flex h-24 items-end gap-1.5 rounded-lg border border-white/10 p-3">
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-indigo-500/40"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                <div className="space-y-2">
                  {dashboardProjects.map((p) => (
                    <div
                      key={p.name}
                      className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2 text-[13px] font-mono text-zinc-400"
                    >
                      <span>
                        {p.name}
                        {p.env && ` ${p.env}`} · {p.active ? "activa" : "pausada"}
                      </span>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          p.active ? "bg-emerald-400" : "bg-zinc-600"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
