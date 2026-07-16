import { Activity, Clock, FileLock2, HardDrive, Link2, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Activity,
    title: "Rate Limiting",
    description:
      "Límites por usuario y proyecto para evitar abusos y garantizar disponibilidad.",
  },
  {
    icon: ShieldCheck,
    title: "Protección SQL Injection",
    description:
      "Parámetros obligatorios y sanitización en cada procedimiento almacenado.",
  },
  {
    icon: Clock,
    title: "TTL automático",
    description:
      "Las bases inactivas se pausan y expiran, liberando recursos automáticamente.",
  },
  {
    icon: Link2,
    title: "Conexiones concurrentes",
    description:
      "Control estricto del número de conexiones simultáneas por instancia.",
  },
  {
    icon: HardDrive,
    title: "Límites de almacenamiento",
    description:
      "Cuotas claras de 20 MB por proyecto con monitoreo en tiempo real.",
  },
  {
    icon: FileLock2,
    title: "Seguridad empresarial",
    description:
      "Encriptación en tránsito, aislamiento de instancias y auditoría completa.",
  },
];

export function Security() {
  return (
    <section id="seguridad" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-sm font-medium text-emerald-400">Seguridad</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Seguridad de nivel empresarial
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          Protegemos tus datos y los de tus usuarios con las mismas medidas
          que un producto comercial.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 rounded-xl border border-white/10 p-6 transition-colors hover:border-white/20"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                <Icon className="h-5 w-5 text-emerald-400" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
