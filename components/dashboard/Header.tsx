"use client";

import { Bell, ChevronDown, Database, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const breadcrumbs: Record<string, string[]> = {
  "/dashboard": ["Dashboard"],
  "/dashboard/databases": ["Dashboard", "Bases de datos"],
  "/dashboard/databases/new": ["Dashboard", "Bases de datos", "Nueva"],
  "/dashboard/docs": ["Dashboard", "Documentación"],
  "/dashboard/api-keys": ["Dashboard", "API Keys"],
  "/dashboard/profile": ["Dashboard", "Perfil"],
  "/dashboard/settings": ["Dashboard", "Ajustes"],
};

export function Header() {
  const pathname = usePathname();
  const crumbs = breadcrumbs[pathname] ?? ["Dashboard"];

  return (
    <header className="flex h-16 shrink-0 items-center border-b border-white/10 bg-surface/30">
      <div className="flex h-full w-64 shrink-0 items-center border-r border-white/10 px-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700">
            <Database className="h-[18px] w-[18px] text-white" strokeWidth={2.25} />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            DB<span className="text-indigo-400">Hub</span>
          </span>
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-between px-6">
        <nav className="flex items-center gap-2 text-sm">
          {crumbs.map((crumb, i) => (
            <span key={crumb} className="flex items-center gap-2">
              {i > 0 && <span className="text-zinc-600">/</span>}
              {i === crumbs.length - 1 ? (
                <span className="font-medium text-white">{crumb}</span>
              ) : (
                <Link
                  href="/dashboard"
                  className="text-zinc-500 hover:text-zinc-300"
                >
                  {crumb}
                </Link>
              )}
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-zinc-500 sm:flex">
            <Search className="h-4 w-4" />
            Buscar...
            <kbd className="ml-6 rounded border border-white/10 px-1.5 py-0.5 text-[11px] text-zinc-500">
              ⌘K
            </kbd>
          </div>

          <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:text-white">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
          </button>

          <button className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-2 text-sm font-medium text-zinc-200 hover:bg-white/5">
            AD
            <ChevronDown className="h-3.5 w-3.5 text-zinc-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
