import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">BancoDemo - QA</h4>
          <p className="text-sm text-slate-400">Documentación & Ajustes de calidad</p>
        </div>

        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} Oscar Palomino · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
