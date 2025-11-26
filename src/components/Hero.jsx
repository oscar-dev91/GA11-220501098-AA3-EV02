import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="text-center px-6 py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-4">
        Lecciones Aprendidas & Ajustes en el Desarrollo
      </motion.h2>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg max-w-3xl mx-auto opacity-90">
        Resumen integral del proceso de verificación, pruebas, aprendizajes y ajustes implementados en el ciclo de desarrollo de software basado en buenas prácticas de calidad y marcos de trabajo ágiles.
      </motion.p>
    </section>
  );
}
