import {
  Activity,
  Boxes,
  Clock,
  Code2,
  Database,
  Globe,
  HardDrive,
  ShieldCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "SQL Server gratuito",
    description:
      "Instancias completas de SQL Server sin costo, listas para desarrollo y pruebas.",
  },
  {
    icon: Zap,
    title: "Creación instantánea",
    description:
      "Tu base de datos está activa en segundos, sin configuración manual.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad empresarial",
    description:
      "Rate limiting, protección contra inyección SQL y conexiones encriptadas.",
  },
  {
    icon: Boxes,
    title: "Stored Procedures",
    description: "Toda tu lógica de negocio vive dentro de la base de datos.",
  },
  {
    icon: Code2,
    title: "APIs listas",
    description:
      "Endpoints REST que se comunican directamente con tus procedimientos.",
  },
  {
    icon: Clock,
    title: "TTL automático",
    description:
      "Las bases inactivas se pausan y expiran automáticamente para ahorrar recursos.",
  },
  {
    icon: Activity,
    title: "Rate Limiting",
    description:
      "Límites inteligentes por usuario y proyecto para proteger la plataforma.",
  },
  {
    icon: HardDrive,
    title: "20 MB por proyecto",
    description:
      "Espacio suficiente para prototipos reales sin restricciones artificiales.",
  },
  {
    icon: Globe,
    title: "Subdominios automáticos",
    description:
      "Cada proyecto obtiene un subdominio único para conectarse al instante.",
  },
];

export function Features() {
  return (
    <section id="producto" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-sm font-medium text-indigo-400">Beneficios</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Todo lo que necesitas para construir
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          Una plataforma pensada para desarrolladores, con la seguridad y
          velocidad de un producto empresarial.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 p-6 transition-colors hover:border-white/20"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                <Icon className="h-5 w-5 text-indigo-400" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
