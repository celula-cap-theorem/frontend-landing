"use client";

import {
  BookOpen,
  ChevronRight,
  Database,
  KeyRound,
  LayoutGrid,
  Settings,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutGrid },
  { href: "/dashboard/databases", label: "Mis Bases de Datos", icon: Database },
  { href: "/dashboard/docs", label: "Documentación", icon: BookOpen },
  { href: "/dashboard/api-keys", label: "API Keys", icon: KeyRound },
  { href: "/dashboard/profile", label: "Perfil", icon: User },
  { href: "/dashboard/settings", label: "Ajustes", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(href);

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-white/10 bg-surface/30">
      <div className="flex-1 overflow-y-auto px-3 py-6">
        <p className="px-3 text-xs font-medium tracking-wider text-zinc-600">
          PLATAFORMA
        </p>
        <nav className="mt-3 space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-indigo-500/10 text-indigo-300"
                    : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="flex-1">{label}</span>
                {active && <ChevronRight className="h-4 w-4" />}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-white/10 p-4">
        <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <ShieldCheck className="h-4 w-4 text-indigo-400" />
            Plan Developer
          </div>
          <p className="mt-1 text-xs text-zinc-500">
            20 MB · 5 conexiones · 3 bases activas
          </p>
        </div>
      </div>
    </aside>
  );
}
