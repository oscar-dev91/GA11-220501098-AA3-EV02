import React from "react";

export default function Objectives() {
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold text-blue-700 mb-4">Objetivos y Alcance</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h4 className="font-semibold mb-2">Objetivo General</h4>
          <p className="text-gray-700">Documentar y mejorar el proceso de verificación del software aplicando buenas prácticas y métricas de calidad.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h4 className="font-semibold mb-2">Criterios de Evaluación</h4>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Selección de buenas prácticas basadas en marcos de trabajo.</li>
            <li>Implementación del proceso personal de desarrollo para mejorar calidad.</li>
            <li>Elaboración de instrumentos de documentación.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
