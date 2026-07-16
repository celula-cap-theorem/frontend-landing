import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h3 className="text-2xl font-bold text-white">
              ¿Listo para crear tu primera base de datos?
            </h3>
            <p className="mt-2 text-zinc-400">
              Empieza gratis. Sin tarjeta de crédito.
            </p>
          </div>
          <a
            href="/dashboard/databases/new"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:from-indigo-500 hover:to-purple-500"
          >
            Crear base de datos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
