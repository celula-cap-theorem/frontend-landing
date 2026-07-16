import { Database, Mail } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.79-.25.79-.55v-2.14c-3.2.7-3.87-1.34-3.87-1.34-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.15v3.19c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L6.4 3.9H4.6L17.7 20Z" />
    </svg>
  );
}

const columns = [
  {
    title: "Producto",
    links: ["Beneficios", "Cómo funciona", "Arquitectura", "Seguridad", "Precios"],
  },
  {
    title: "Documentación",
    links: ["Introducción", "API REST", "SDKs", "Stored Procedures", "Ejemplos"],
  },
  {
    title: "Recursos",
    links: ["Estado del servicio", "Changelog", "Guías", "Comunidad", "GitHub"],
  },
  {
    title: "Empresa",
    links: ["Contacto", "Privacidad", "Términos", "Seguridad", "Blog"],
  },
];

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700">
                <Database className="h-[18px] w-[18px] text-white" strokeWidth={2.25} />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                DB<span className="text-indigo-400">Hub</span>
              </span>
            </div>
            <p className="mt-4 max-w-[220px] text-sm leading-6 text-zinc-500">
              Hosting gratuito de bases de datos SQL Server para
              desarrolladores y estudiantes.
            </p>
            <div className="mt-5 flex gap-3">
              {[GithubIcon, XIcon, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row">
          <p>© 2026 DBHub. Hecho para desarrolladores.</p>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Todos los sistemas operativos
          </span>
        </div>
      </div>
    </footer>
  );
}
