import { Database } from "lucide-react";

const links = [
  { label: "Producto", href: "#producto" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Arquitectura", href: "#arquitectura" },
  { label: "Seguridad", href: "#seguridad" },
  { label: "Docs", href: "#docs" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700">
            <Database className="h-[18px] w-[18px] text-white" strokeWidth={2.25} />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            DB<span className="text-indigo-400">Hub</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm text-zinc-300 hover:text-white sm:block"
          >
            Iniciar sesión
          </a>
          <a
            href="/dashboard"
            className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:from-indigo-500 hover:to-purple-500"
          >
            Probar gratis
          </a>
        </div>
      </div>
    </header>
  );
}
