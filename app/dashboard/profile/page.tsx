"use client";

import { Monitor, Save, Shield, Trash2, User } from "lucide-react";
import { useState } from "react";

const tabs = [
  { key: "info", label: "Información personal", icon: User },
  { key: "sessions", label: "Sesiones", icon: Monitor },
  { key: "security", label: "Seguridad", icon: Shield },
] as const;

const sessions = [
  {
    device: "MacBook Pro · Chrome",
    location: "Madrid, ES · Ahora",
    current: true,
  },
  {
    device: "iPhone 15 · Safari",
    location: "Madrid, ES · Hace 2 h",
    current: false,
  },
  {
    device: "Windows · Firefox",
    location: "Berlín, DE · Hace 3 d",
    current: false,
  },
];

export default function ProfilePage() {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("info");

  return (
    <div className="p-6 lg:p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Perfil</h1>
        <p className="mt-1 text-zinc-400">
          Gestiona tu cuenta y configuración de seguridad.
        </p>
      </div>

      <div className="mt-6 flex gap-8">
        <aside className="w-56 shrink-0 space-y-1">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                tab === key
                  ? "bg-indigo-500/10 text-indigo-300"
                  : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </aside>

        <div className="flex-1">
          {tab === "info" && (
            <div className="rounded-xl border border-white/10 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white">
                  SE
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">
                    Sebastian Vargas Ramirez
                  </div>
                  <div className="text-sm text-zinc-500">
                    y.u.u.k.ibrb@gmail.com
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Nombre completo
                  </label>
                  <input
                    defaultValue="Sebastian Vargas Ramirez"
                    className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-2.5 text-sm text-zinc-200 outline-none focus:border-indigo-500/50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Email
                  </label>
                  <input
                    defaultValue="y.u.u.k.ibrb@gmail.com"
                    className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-2.5 text-sm text-zinc-200 outline-none focus:border-indigo-500/50"
                  />
                </div>
              </div>

              <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:from-indigo-500 hover:to-purple-500">
                <Save className="h-4 w-4" />
                Guardar cambios
              </button>
            </div>
          )}

          {tab === "sessions" && (
            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="font-semibold text-white">Sesiones activas</h3>
              <div className="mt-4 space-y-3">
                {sessions.map((s) => (
                  <div
                    key={s.device}
                    className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400">
                        <Monitor className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2 text-sm font-medium text-white">
                          {s.device}
                          {s.current && (
                            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                              Actual
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-zinc-500">
                          {s.location}
                        </div>
                      </div>
                    </div>
                    {!s.current && (
                      <button className="text-sm font-medium text-red-400 hover:text-red-300">
                        Cerrar sesión
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "security" && (
            <div className="space-y-5">
              <div className="rounded-xl border border-white/10 p-6">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <Shield className="h-4 w-4 text-zinc-500" />
                  Cambiar contraseña
                </div>
                <div className="mt-5 space-y-4">
                  <div>
                    <label className="mb-2 block text-sm text-zinc-300">
                      Contraseña actual
                    </label>
                    <input
                      type="password"
                      defaultValue="password"
                      className="w-full max-w-sm rounded-lg border border-white/10 bg-transparent px-4 py-2.5 text-sm text-zinc-200 outline-none focus:border-indigo-500/50"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-zinc-300">
                      Nueva contraseña
                    </label>
                    <input
                      type="password"
                      defaultValue="password"
                      className="w-full max-w-sm rounded-lg border border-white/10 bg-transparent px-4 py-2.5 text-sm text-zinc-200 outline-none focus:border-indigo-500/50"
                    />
                  </div>
                </div>
                <button className="mt-5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:from-indigo-500 hover:to-purple-500">
                  Actualizar contraseña
                </button>
              </div>

              <div className="rounded-xl border border-red-500/20 bg-red-500/[0.03] p-6">
                <h3 className="font-semibold text-red-400">Zona de peligro</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Eliminar tu cuenta revocará todas tus claves y borrará tus
                  bases de datos permanentemente.
                </p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-lg border border-red-500/30 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10">
                  <Trash2 className="h-4 w-4" />
                  Eliminar cuenta
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
