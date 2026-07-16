import { KeyRound, Layers, Monitor, Server, User } from "lucide-react";

const nodes = [
  {
    icon: User,
    title: "Usuario",
    description: "Tu aplicación o cliente",
  },
  {
    icon: Monitor,
    title: "Frontend",
    description: "React / Next / móvil",
  },
  {
    icon: Layers,
    title: "Backend",
    description: "Auth · Rate Limit · Proxy",
  },
  {
    icon: KeyRound,
    title: "Stored Procedures",
    description: "Views · Functions · Lógica",
  },
  {
    icon: Server,
    title: "SQL Server",
    description: "Motor de base de datos",
    highlight: true,
  },
];

export function Architecture() {
  return (
    <section id="arquitectura" className="border-b border-white/10">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-medium text-indigo-400">Arquitectura</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Toda la lógica vive en la base de datos
          </h2>
          <p className="mt-5 leading-7 text-zinc-400">
            DBHub sigue una{" "}
            <span className="font-medium text-white">
              arquitectura centrada en la base de datos
            </span>
            . El backend no contiene reglas de negocio: solo autentica
            usuarios, aplica rate limiting y comunica el frontend con SQL
            Server mediante Stored Procedures, Views y Functions.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Lógica encapsulada y auditable en procedures",
              "Backend ligero, sin acoplamiento de negocio",
              "Mayor seguridad y rendimiento nativo de SQL Server",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-zinc-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center">
          {nodes.map(({ icon: Icon, title, description, highlight }, i) => (
            <div key={title} className="w-full max-w-sm">
              <div
                className={`flex items-center gap-4 rounded-xl border px-5 py-4 ${
                  highlight
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : "border-white/10"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    highlight ? "bg-emerald-500/10" : "bg-white/5"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      highlight ? "text-emerald-400" : "text-sky-400"
                    }`}
                  />
                </span>
                <div>
                  <div className="font-semibold text-white">{title}</div>
                  <div className="text-sm text-zinc-500">{description}</div>
                </div>
              </div>
              {i < nodes.length - 1 && (
                <div className="flex justify-center py-2 text-zinc-600">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
