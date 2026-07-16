"use client";

import { ArrowRight, BookOpen, Search, Terminal } from "lucide-react";
import { useState } from "react";

const topTabs = ["Introducción", "Auth", "Endpoints", "SDK", "Ejemplos"];

const sidebarLinks = [
  "Inicio rápido",
  "Crear base de datos",
  "Connection String",
  "Stored Procedures",
  "Rate Limiting",
  "Webhooks",
  "SDK .NET",
  "SDK Node.js",
  "SDK Python",
];

const codeLangs = [".NET", "Node.js", "Laravel", "Python"];

export function Docs() {
  const [activeTab, setActiveTab] = useState("Introducción");
  const [activeLink, setActiveLink] = useState("Connection String");
  const [activeLang, setActiveLang] = useState(".NET");

  return (
    <section id="docs" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
        <p className="text-sm font-medium text-indigo-400">Documentación</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Docs que los desarrolladores aman
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          Buscador, ejemplos copiables y SDK en múltiples lenguajes. Todo
          integrado.
        </p>

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-white/10 text-left">
          <div className="flex gap-6 border-b border-white/10 px-6">
            {topTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-4 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 bg-indigo-500" />
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="shrink-0 border-b border-white/10 p-4 text-sm md:w-56 md:border-b-0 md:border-r">
              {sidebarLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => setActiveLink(link)}
                  className={`block w-full rounded-md px-3 py-2 text-left transition-colors ${
                    activeLink === link
                      ? "bg-indigo-500/15 text-indigo-300"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>

            <div className="flex-1 p-6">
              <div className="mb-6 flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-500">
                <Search className="h-4 w-4" />
                Buscar en la documentación...
                <kbd className="ml-auto rounded border border-white/10 px-1.5 py-0.5 text-[11px] text-zinc-500">
                  ⌘K
                </kbd>
              </div>

              <h3 className="text-xl font-semibold text-white">
                {activeLink}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Conecta tu aplicación usando la cadena de conexión generada
                para tu base de datos. Reemplaza los valores por tus
                credenciales.
              </p>

              <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-surface">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 text-xs text-zinc-500">
                  <Terminal className="h-3.5 w-3.5" />
                  csharp · ADO.NET
                </div>
                <pre className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-6">
                  <code>
                    <span className="text-purple-400">var</span>{" "}
                    <span className="text-sky-300">connStr</span>{" "}
                    <span className="text-zinc-400">=</span>{" "}
                    <span className="text-emerald-300">
                      &quot;Server=dbh-dbhub-dev.sql.dbhub.dev,1433;&quot;
                    </span>{" "}
                    <span className="text-zinc-400">+</span>
                    {"\n"}
                    <span className="text-emerald-300">
                      &quot;Database=mi_tienda;&quot;
                    </span>{" "}
                    <span className="text-zinc-400">+</span>
                    {"\n"}
                    <span className="text-emerald-300">
                      &quot;User Id=admin;&quot;
                    </span>{" "}
                    <span className="text-zinc-400">+</span>
                    {"\n"}
                    <span className="text-emerald-300">
                      &quot;Password=••••••••;&quot;
                    </span>{" "}
                    <span className="text-zinc-400">+</span>
                    {"\n"}
                    <span className="text-emerald-300">
                      &quot;Encrypt=True;&quot;;
                    </span>
                  </code>
                </pre>
              </div>

              <div className="mt-4 flex gap-2">
                {codeLangs.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                      activeLang === lang
                        ? "border-indigo-500/40 bg-indigo-500/10 text-indigo-300"
                        : "border-white/10 text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
              >
                <BookOpen className="h-4 w-4" />
                Leer la documentación completa
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
