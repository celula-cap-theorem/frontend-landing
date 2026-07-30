"use client";

import { AlertCircle, ArrowLeft, ArrowRight, Check, Database, Globe, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const steps = [
  { key: "name", label: "Nombre" },
  { key: "region", label: "Región" },
  { key: "confirm", label: "Confirmación" },
] as const;

const regions = [
  {
    key: "us-east",
    flag: "🇺🇸",
    label: "EE. UU. (Este)",
    description: "Virginia · menor latencia en Norteamérica",
  },
  {
    key: "us-west",
    flag: "🇺🇸",
    label: "EE. UU. (Oeste)",
    description: "Oregón · ideal para la costa oeste",
  },
  {
    key: "eu-west",
    flag: "🇪🇺",
    label: "Europa (Oeste)",
    description: "Irlanda · cumplimiento GDPR",
  },
  {
    key: "sa-east",
    flag: "🇧🇷",
    label: "Sudamérica (Este)",
    description: "São Paulo · óptimo para LATAM",
  },
  {
    key: "ap-southeast",
    flag: "🇸🇬",
    label: "Asia (Sudeste)",
    description: "Singapur · cobertura APAC",
  },
];

export default function NewDatabasePage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("us-east");
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const regionLabel = regions.find((r) => r.key === region)?.label ?? "";

  async function handleCreate() {
    setCreating(true);
    setError(null);
    try {
      const res = await fetch("/api/databases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, region }),
      });
      if (!res.ok) {
        throw new Error(res.status === 401 ? "Tu sesión expiró, iniciá sesión de nuevo." : "No se pudo crear la base de datos.");
      }
      router.push("/dashboard/databases");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo crear la base de datos.");
      setCreating(false);
    }
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Crear base de datos
          </h1>
          <p className="mt-1 text-zinc-400">
            Configura una nueva instancia de SQL Server en segundos.
          </p>
        </div>
        <Link
          href="/dashboard/databases"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Cancelar
        </Link>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        {steps.map((s, i) => (
          <div key={s.key} className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold ${
                  i < step
                    ? "border-indigo-600 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                    : i === step
                      ? "border-indigo-500 text-indigo-400"
                      : "border-white/15 text-zinc-500"
                }`}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </span>
              <span
                className={`text-sm font-medium ${
                  i <= step ? "text-white" : "text-zinc-500"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span className="h-px w-16 bg-white/15" />
            )}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 p-8">
        {step === 0 && (
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
              <Database className="h-6 w-6 text-indigo-400" />
            </span>
            <h2 className="mt-4 text-xl font-semibold text-white">
              Nombra tu base de datos
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Usa un nombre descriptivo. Solo letras, números y guiones.
            </p>

            <label className="mt-6 block text-sm text-zinc-300">Nombre</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="mi-tienda-online"
              className="mt-2 w-full rounded-lg border border-white/10 bg-transparent px-4 py-2.5 text-sm text-zinc-200 outline-none placeholder:text-zinc-600 focus:border-indigo-500/50"
            />
            <p className="mt-2 text-sm text-zinc-500">
              Tu host será:{" "}
              <code className="text-zinc-300">
                {name || "mi-tienda-online"}.sql.dbhub.dev
              </code>
            </p>

            <div className="mt-6 flex justify-end">
              <button
                disabled={!name}
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:from-indigo-500 hover:to-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continuar
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
              <Globe className="h-6 w-6 text-indigo-400" />
            </span>
            <h2 className="mt-4 text-xl font-semibold text-white">
              Selecciona una región
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Elige la región más cercana a tus usuarios para menor latencia.
            </p>

            <div className="mt-6 space-y-3">
              {regions.map((r) => (
                <button
                  key={r.key}
                  onClick={() => setRegion(r.key)}
                  className={`flex w-full items-center justify-between rounded-lg border px-5 py-3.5 text-left ${
                    region === r.key
                      ? "border-indigo-500/50 bg-indigo-500/5"
                      : "border-white/10"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{r.flag}</span>
                    <span>
                      <span className="block text-sm font-medium text-white">
                        {r.label}
                      </span>
                      <span className="block text-sm text-zinc-500">
                        {r.description}
                      </span>
                    </span>
                  </span>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                      region === r.key
                        ? "border-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600"
                        : "border-white/20"
                    }`}
                  >
                    {region === r.key && (
                      <Check className="h-3 w-3 text-white" />
                    )}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep(0)}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5"
              >
                <ArrowLeft className="h-4 w-4" />
                Atrás
              </button>
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:from-indigo-500 hover:to-purple-500"
              >
                Continuar
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
              <Sparkles className="h-6 w-6 text-indigo-400" />
            </span>
            <h2 className="mt-4 text-xl font-semibold text-white">
              Confirma y crea
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Revisa la configuración antes de aprovisionar la instancia.
            </p>

            <div className="mt-6 divide-y divide-white/10 rounded-lg border border-white/10">
              {[
                ["Nombre", name || "mi-tienda-online"],
                ["Región", regionLabel],
                ["Espacio", "20 MB"],
                ["Conexiones máx.", "5"],
                ["TTL", "30 días"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between px-5 py-3.5 text-sm"
                >
                  <span className="text-zinc-500">{label}</span>
                  <span className="font-medium text-white">{value}</span>
                </div>
              ))}
            </div>

            {error && (
              <div className="mt-6 flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep(1)}
                disabled={creating}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" />
                Atrás
              </button>
              <button
                onClick={handleCreate}
                disabled={creating}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:from-indigo-500 hover:to-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {creating ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="h-4 w-4" />
                )}
                {creating ? "Creando..." : "Crear base de datos"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
