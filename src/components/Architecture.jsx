import React from "react";

export default function Architecture() {
  return (
    <section id="architecture" className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-700 mb-4">Arquitectura y Componentes</h3>
      <p className="text-gray-700 mb-4">
        BancoDemoApp: Django (backend) + MySQL (BD) + React (frontend). El sistema emula movimientos bancarios registrados en la base de datos; operadores y usuarios con roles diferenciados.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded-lg shadow">
          <h4 className="font-semibold mb-2">Backend</h4>
          <p className="text-sm text-gray-700">Django con API REST, control de transacciones y seguridad de sesiones.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h4 className="font-semibold mb-2">Base de Datos</h4>
          <p className="text-sm text-gray-700">MySQL para almacenamiento persistente de cuentas, transacciones y logs.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h4 className="font-semibold mb-2">Frontend</h4>
          <p className="text-sm text-gray-700">React con Tailwind. Páginas para registrar usuarios, realizar transferencias y revisar logs.</p>
        </div>
      </div>
    </section>
  );
}
