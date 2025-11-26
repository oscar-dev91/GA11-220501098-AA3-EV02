import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Architecture from "../components/Architecture";
import Objectives from "../components/Objectives";

export default function Landing() {
  return (
    <div className="pt-24">
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* RESULTADOS */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-700 mb-4">Resultados del Proceso de Verificación</h3>
          <p className="text-gray-700 leading-relaxed">
            El proceso de verificación permitió identificar comportamientos clave del
            software frente a requisitos no funcionales como rendimiento, estabilidad,
            usabilidad, seguridad y compatibilidad. Estas evaluaciones se realizaron
            mediante pruebas estructuradas que siguieron las recomendaciones del
            componente formativo <b>“Aplicación de pruebas de software”</b>.
          </p>

          <ul className="mt-5 space-y-2 text-gray-800">
            <li>✔ Evaluación del rendimiento bajo carga</li>
            <li>✔ Pruebas de regresión para garantizar estabilidad</li>
            <li>✔ Validación de seguridad y manejo de datos</li>
            <li>✔ Pruebas exploratorias y de caja negra</li>
            <li>✔ Comparación con métricas definidas y criterios de aceptación</li>
          </ul>
        </div>

        {/* LECCIONES */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-700 mb-4">Lecciones Aprendidas</h3>
          <p className="text-gray-700 leading-relaxed">
            Durante el proceso se identificaron aprendizajes significativos que
            permitieron mejorar la estructura del desarrollo, la ejecución de pruebas y la
            integración del equipo. Estas lecciones fueron registradas en la bitácora y
            posteriormente analizadas para generar conclusiones accionables.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Gestión del Tiempo</h4>
              <p className="text-gray-700">
                La división del trabajo en sprints permitió identificar bloqueos temprano y
                mejorar la velocidad de respuesta del equipo.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Pruebas Continuas</h4>
              <p className="text-gray-700">
                Se comprobó que realizar pruebas desde el inicio reduce defectos
                acumulados y facilita la adaptación a requisitos emergentes.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Comunicación</h4>
              <p className="text-gray-700">
                Las reuniones cortas y frecuentes evitaron malentendidos y mejoraron la
                trazabilidad de decisiones técnicas.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Documentación</h4>
              <p className="text-gray-700">
                Se fortaleció la importancia de registrar las pruebas, incidentes y ajustes
                realizados para facilitar futuras iteraciones.
              </p>
            </div>
          </div>
        </div>

        {/* AJUSTES (coherente con estilos) */}
        <div className="bg-white rounded-2xl shadow p-8 border border-blue-50">
          <h3 className="text-3xl font-semibold text-blue-700 mb-6">Informe de Ajustes en el Proceso de Desarrollo</h3>
          <p className="text-gray-700 mb-6">
            Este documento recoge los ajustes operativos y técnicos realizados en el proceso de desarrollo del software, basados en prácticas recomendadas y marcos de trabajo. A continuación se resumen los ajustes y su impacto.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Ajustes Operativos</h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Refinamiento quincenal del backlog.</li>
                <li>Roles y responsabilidades claras (Quality Owner).</li>
                <li>Dailies y retrospectivas con métricas.</li>
                <li>Documentación como parte del DoD.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Ajustes Técnicos</h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>CI con ejecución de tests.</li>
                <li>Automatización de regresión donde aplica.</li>
                <li>Refactorización programada por sprint.</li>
                <li>Políticas básicas de seguridad y actualización de dependencias.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">Impacto</h4>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Disminución de defectos repetitivos.</li>
              <li>Incremento en la velocidad de entrega.</li>
              <li>Mejor estructura para pruebas y documentación.</li>
            </ul>
          </div>
        </div>

        {/* COMPONENTES REUTILIZABLES */}
        <Features />
        <Architecture />
        <Objectives />

      </section>
    </div>
  );
}
