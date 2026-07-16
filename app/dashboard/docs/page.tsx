"use client";

import { BookOpen, Copy, Search, Terminal } from "lucide-react";
import { useState } from "react";

const sidebarSections = [
  {
    title: "EMPEZANDO",
    links: ["Introducción", "Inicio rápido", "Crear base de datos", "Connection String"],
  },
  {
    title: "GUÍAS",
    links: ["Stored Procedures", "Views y Functions", "Rate Limiting", "TTL automático"],
  },
  {
    title: "API",
    links: ["Endpoints", "Autenticación", "Webhooks", "Errores"],
  },
  {
    title: "SDK",
    links: [".NET", "Node.js", "Laravel", "Python"],
  },
];

const endpoints = [
  { method: "POST", path: "/v1/databases", description: "Crear una nueva base de datos" },
  { method: "GET", path: "/v1/databases", description: "Listar todas las bases de datos" },
  { method: "GET", path: "/v1/databases/{id}", description: "Obtener detalles de una base" },
  { method: "POST", path: "/v1/databases/{id}/restart", description: "Reiniciar la instancia" },
  { method: "DELETE", path: "/v1/databases/{id}", description: "Eliminar una base de datos" },
  { method: "POST", path: "/v1/databases/{id}/execute", description: "Ejecutar un Stored Procedure" },
];

const methodColor: Record<string, string> = {
  POST: "bg-emerald-400 text-on-accent",
  GET: "bg-sky-400 text-on-accent",
  DELETE: "bg-red-400 text-on-accent",
};

const codeLangs = ["Node.js", ".NET", "Python", "Laravel"];

export default function DocsPage() {
  const [activeLink, setActiveLink] = useState("Introducción");
  const [activeLang, setActiveLang] = useState("Node.js");

  return (
    <div className="p-6 lg:p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Documentación</h1>
        <p className="mt-1 text-zinc-400">
          Guías, endpoints y ejemplos para integrar DBHub en tu proyecto.
        </p>
      </div>

      <div className="mt-6 flex max-w-xl items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm text-zinc-500">
        <Search className="h-4 w-4" />
        <input
          placeholder="Buscar en la documentación..."
          className="w-full bg-transparent outline-none placeholder:text-zinc-500"
        />
        <kbd className="rounded border border-white/10 px-1.5 py-0.5 text-[11px] text-zinc-500">
          ⌘K
        </kbd>
      </div>

      <div className="mt-6 flex gap-8">
        <aside className="hidden w-52 shrink-0 space-y-6 lg:block">
          {sidebarSections.map((section) => (
            <div key={section.title}>
              <p className="px-3 text-xs font-medium tracking-wider text-zinc-600">
                {section.title}
              </p>
              <div className="mt-2 space-y-0.5">
                {section.links.map((link) => (
                  <button
                    key={link}
                    onClick={() => setActiveLink(link)}
                    className={`block w-full rounded-md px-3 py-1.5 text-left text-sm transition-colors ${
                      activeLink === link
                        ? "bg-indigo-500/15 text-indigo-300"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <div className="flex-1 space-y-6">
          <div className="rounded-xl border border-white/10 p-5">
            <div className="flex items-center gap-2 font-semibold text-white">
              <Terminal className="h-4 w-4 text-zinc-500" />
              Endpoints de la API REST
            </div>
            <div className="mt-4 divide-y divide-white/10">
              {endpoints.map((ep) => (
                <div
                  key={ep.path + ep.method}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded px-2 py-0.5 text-xs font-semibold ${methodColor[ep.method]}`}
                    >
                      {ep.method}
                    </span>
                    <code className="text-zinc-300">{ep.path}</code>
                  </div>
                  <span className="text-zinc-500">{ep.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold text-white">
                <BookOpen className="h-4 w-4 text-zinc-500" />
                Ejemplo: {activeLink}
              </div>
              <button className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300">
                <Copy className="h-3.5 w-3.5" />
                Copiar
              </button>
            </div>

            <div className="mt-4 flex gap-6 border-b border-white/10">
              {codeLangs.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`relative pb-3 text-sm font-medium transition-colors ${
                    activeLang === lang
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {lang}
                  {activeLang === lang && (
                    <span className="absolute inset-x-0 -bottom-px h-0.5 bg-indigo-500" />
                  )}
                </button>
              ))}
            </div>

            <pre className="mt-4 overflow-x-auto rounded-lg bg-black/30 p-4 font-mono text-[13px] leading-6 text-zinc-300">
              <code>{`import sql from "mssql";

const config = {
  server: "mi-tienda.sql.dbhub.dev",
  port: 1433,
  user: "admin_x4k2",
  password: "••••••••",
  database: "mi-tienda",
  options: { encrypt: true }
};

const pool = await sql.connect(config);
const result = await pool.request()
  .input("Email", sql.NVarChar, "dev@dbhub.dev")
  .execute("sp_CreateUser");
console.log(result.recordset);`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
