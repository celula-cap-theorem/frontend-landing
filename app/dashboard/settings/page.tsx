"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Bell, Check, Globe, Moon, Shield, Sun } from "lucide-react";
import { useState } from "react";

function Switch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        checked ? "bg-gradient-to-r from-indigo-600 to-purple-600" : "bg-white/10"
      }`}
    >
      <span
        className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function ToggleRow({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between border-t border-white/10 py-4 first:border-t-0">
      <div>
        <div className="text-sm font-medium text-white">{title}</div>
        <div className="text-sm text-zinc-500">{description}</div>
      </div>
      <Switch checked={checked} onChange={onChange} />
    </div>
  );
}

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState("es");
  const [notif, setNotif] = useState({
    email: true,
    push: false,
    ttl: true,
    security: true,
  });
  const [security, setSecurity] = useState({ twoFa: false, ipList: false });

  const languages = [
    { key: "es", flag: "🇪🇸", label: "Español" },
    { key: "en", flag: "🇬🇧", label: "English" },
    { key: "pt", flag: "🇧🇷", label: "Português" },
  ];

  return (
    <div className="p-6 lg:p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Ajustes</h1>
        <p className="mt-1 text-zinc-400">Personaliza tu experiencia en DBHub.</p>
      </div>

      <div className="mt-6 max-w-2xl space-y-5">
        <div className="rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 font-semibold text-white">
            🎨 Tema
          </div>
          <p className="mt-1 text-sm text-zinc-500">
            Elige la apariencia de la interfaz.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <button
              onClick={() => setTheme("dark")}
              className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-medium ${
                theme === "dark"
                  ? "border-indigo-500/50 bg-indigo-500/5 text-white"
                  : "border-white/10 text-zinc-300"
              }`}
            >
              <span className="flex items-center gap-2">
                <Moon className="h-4 w-4 text-indigo-400" />
                Oscuro
              </span>
              {theme === "dark" && <Check className="h-4 w-4 text-indigo-400" />}
            </button>
            <button
              onClick={() => setTheme("light")}
              className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-medium ${
                theme === "light"
                  ? "border-indigo-500/50 bg-indigo-500/5 text-white"
                  : "border-white/10 text-zinc-300"
              }`}
            >
              <span className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-zinc-400" />
                Claro
              </span>
              {theme === "light" && <Check className="h-4 w-4 text-indigo-400" />}
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 font-semibold text-white">
            <Globe className="h-4 w-4 text-indigo-400" />
            Idioma
          </div>
          <p className="mt-1 text-sm text-zinc-500">
            Selecciona el idioma de la interfaz.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {languages.map((l) => (
              <button
                key={l.key}
                onClick={() => setLang(l.key)}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium ${
                  lang === l.key
                    ? "border-indigo-500/50 bg-indigo-500/5 text-white"
                    : "border-white/10 text-zinc-300"
                }`}
              >
                <span>{l.flag}</span>
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 font-semibold text-white">
            <Bell className="h-4 w-4 text-indigo-400" />
            Notificaciones
          </div>
          <p className="mt-1 text-sm text-zinc-500">
            Decide cuándo quieres ser notificado.
          </p>
          <div className="mt-2">
            <ToggleRow
              title="Notificaciones por email"
              description="Resúmenes y alertas importantes"
              checked={notif.email}
              onChange={(v) => setNotif((n) => ({ ...n, email: v }))}
            />
            <ToggleRow
              title="Notificaciones push"
              description="Alertas en tiempo real en el navegador"
              checked={notif.push}
              onChange={(v) => setNotif((n) => ({ ...n, push: v }))}
            />
            <ToggleRow
              title="Avisos de expiración TTL"
              description="Cuando una base está por expirar"
              checked={notif.ttl}
              onChange={(v) => setNotif((n) => ({ ...n, ttl: v }))}
            />
            <ToggleRow
              title="Alertas de seguridad"
              description="Inicios de sesión y cambios de credenciales"
              checked={notif.security}
              onChange={(v) => setNotif((n) => ({ ...n, security: v }))}
            />
          </div>
        </div>

        <div className="rounded-xl border border-white/10 p-6">
          <div className="flex items-center gap-2 font-semibold text-white">
            <Shield className="h-4 w-4 text-indigo-400" />
            Seguridad
          </div>
          <p className="mt-1 text-sm text-zinc-500">
            Protege tu cuenta con verificación en dos pasos.
          </p>
          <div className="mt-2">
            <ToggleRow
              title="Autenticación en dos pasos (2FA)"
              description="Solicita un código al iniciar sesión"
              checked={security.twoFa}
              onChange={(v) => setSecurity((s) => ({ ...s, twoFa: v }))}
            />
            <ToggleRow
              title="Lista de IP permitidas"
              description="Restringe el acceso a IPs específicas"
              checked={security.ipList}
              onChange={(v) => setSecurity((s) => ({ ...s, ipList: v }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
