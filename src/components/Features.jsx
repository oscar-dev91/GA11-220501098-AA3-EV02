import React from "react";
import { FaCheckCircle, FaCogs, FaLock } from "react-icons/fa";

export default function Features() {
  const items = [
    { icon: <FaCheckCircle size={20} />, title: "Verificación", text: "Pruebas unitarias, integración y usabilidad." },
    { icon: <FaCogs size={20} />, title: "Ajustes", text: "Refactorización, CI y automatización de pruebas." },
    { icon: <FaLock size={20} />, title: "Seguridad", text: "Revisión de dependencias y sanidad de inputs." },
  ];

  return (
    <section id="features" className="grid md:grid-cols-3 gap-6">
      {items.map((it, i) => (
        <article key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-blue-50 text-blue-600 mb-4">{it.icon}</div>
          <h4 className="font-semibold text-lg mb-2 text-gray-900">{it.title}</h4>
          <p className="text-gray-700">{it.text}</p>
        </article>
      ))}
    </section>
  );
}
