import { Database, KeyRound, Plug, UserPlus } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Crear cuenta",
    description: "Regístrate gratis en segundos. Sin tarjeta de crédito.",
  },
  {
    number: 2,
    icon: Database,
    title: "Crear base de datos",
    description: "Elige nombre y región. La instancia se aprovisiona sola.",
  },
  {
    number: 3,
    icon: KeyRound,
    title: "Obtener credenciales",
    description:
      "Host, puerto, usuario y connection string listos para copiar.",
  },
  {
    number: 4,
    icon: Plug,
    title: "Conectar la aplicación",
    description: "Pega la connection string y empieza a ejecutar queries.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
        <p className="text-sm font-medium text-indigo-400">Cómo funciona</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          De cero a conectado en 4 pasos
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          Sin infraestructura que configurar. Sin servidores que mantener.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <div key={number} className="flex flex-col items-center">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10">
                <Icon className="h-6 w-6 text-indigo-400" strokeWidth={2} />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-[11px] font-semibold text-white">
                  {number}
                </span>
              </div>
              <h3 className="mt-5 font-semibold text-white">{title}</h3>
              <p className="mt-2 max-w-[220px] text-sm leading-6 text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
