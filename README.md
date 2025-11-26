# Informe de Verificación de Condiciones de Calidad del Producto de Software Ajustado

------------------------------------------------------------------------

## Introducción

El presente documento tiene como finalidad presentar el proceso de
verificación de las condiciones de calidad del producto de software
ajustado, siguiendo los lineamientos del componente formativo
*"Aplicación de pruebas de software"*.\
Aquí se describen las características de calidad evaluadas, las métricas
utilizadas, las herramientas aplicadas y la bitácora del proceso de
verificación. Finalmente, se presentan las acciones correctivas,
preventivas y de mejora recomendadas.

------------------------------------------------------------------------

## 1. Bitácora del Proceso de Verificación

La siguiente bitácora resume las actividades documentales realizadas
durante el proceso:

1.  Recolección de requisitos funcionales y no funcionales.
2.  Identificación de características y subcaracterísticas de calidad
    según ISO/IEC 25010.
3.  Selección de métricas e instrumentos de evaluación.
4.  Ejecución de pruebas manuales y automatizadas.
5.  Registro de hallazgos y resultados.
6.  Análisis de resultados y determinación de ajustes.
7.  Elaboración del informe final.

------------------------------------------------------------------------

## 2. Buenas Prácticas de Calidad Seleccionadas

Se seleccionaron buenas prácticas basadas en marcos como ISTQB, IEEE 829
y SCRUM:

-   Gestión de pruebas basada en riesgo.
-   Versionamiento estructurado del software.
-   Automatización temprana de pruebas regresivas.
-   Revisión por pares de código y documentación.
-   Integración continua y despliegue automatizado.

------------------------------------------------------------------------

## 3. Características y Subcaracterísticas de Calidad Evaluadas

El modelo ISO/IEC 25010 definió el marco de evaluación utilizado.

### **3.1 Características Evaluadas**

-   **Funcionalidad**
    -   Adecuación
    -   Exactitud
    -   Interoperabilidad
-   **Fiabilidad**
    -   Madurez
    -   Disponibilidad
    -   Tolerancia a fallos
-   **Usabilidad**
    -   Aprendizaje
    -   Operabilidad
    -   Accesibilidad
-   **Eficiencia**
    -   Tiempo de respuesta
    -   Recursos utilizados
-   **Mantenibilidad**
    -   Analizabilidad
    -   Modificabilidad
-   **Portabilidad**
    -   Adaptabilidad
    -   Instalabilidad

### **3.2 Propiedades de Calidad**

-   Rendimiento del sistema
-   Consistencia visual
-   Estabilidad del código
-   Seguridad en datos y rutas críticas

### **3.3 Métricas Utilizadas**

-   **Complejidad ciclomática (CC)**
-   **Cobertura de código (%)**
-   **Tiempo promedio de respuesta (ms)**
-   **Defectos por módulo**
-   **Tasa de éxito en pruebas automatizadas (%)**
-   **Porcentaje de cumplimiento de accesibilidad (WCAG)**

------------------------------------------------------------------------

## 4. Actividades y Tareas del Proceso de Evaluación

Las actividades realizadas fueron:

1.  **Planificación de pruebas:**
    -   Definición del alcance.
    -   Identificación de módulos críticos.
2.  **Diseño de casos de prueba:**
    -   Casos funcionales.
    -   Casos no funcionales.
3.  **Ejecución de pruebas:**
    -   Pruebas unitarias.
    -   Pruebas de integración.
    -   Pruebas funcionales manuales.
    -   Pruebas de rendimiento.
4.  **Recolección de datos:**
    -   Logs de ejecución.
    -   Métricas generadas por herramientas.
5.  **Evaluación:**
    -   Comparación con estándares.
    -   Identificación de hallazgos.
6.  **Informe de resultados y ajustes:**
    -   Documentación de hallazgos.
    -   Acciones correctivas y preventivas.

------------------------------------------------------------------------

## 5. Herramientas Software Utilizadas

Las siguientes herramientas permitieron automatizar la medición y
evaluación:

-   **Jest / React Testing Library** → Pruebas unitarias.
-   **Lighthouse** → Métricas de accesibilidad, SEO y rendimiento.
-   **SonarQube** → Análisis estático y métricas de mantenibilidad.
-   **GitHub Actions** → Automatización de CI/CD.
-   **K6 / JMeter** → Pruebas de carga y rendimiento.
-   **Chrome DevTools** → Perfilamiento del sistema.

------------------------------------------------------------------------

## 6. Acciones Correctivas, Preventivas y de Mejora

Según los resultados obtenidos, se determinaron:

### **Acciones Correctivas**

-   Refactorización de componentes con complejidad ciclomática elevada.
-   Mejora en tiempos de respuesta mediante optimización de consultas.
-   Corrección de inconsistencias visuales en la interfaz.

### **Acciones Preventivas**

-   Implementar validaciones adicionales en puntos críticos.
-   Extender los casos de pruebas automatizadas de regresión.
-   Documentar nuevos patrones de diseño adoptados.

### **Acciones de Mejora**

-   Integrar monitoreo continuo de desempeño.
-   Aumentar el porcentaje mínimo aceptado de cobertura.
-   Implementar pruebas de seguridad automatizadas.

------------------------------------------------------------------------

## Conclusiones

El proceso de verificación de calidad permitió identificar fortalezas y
áreas de mejora en el producto de software ajustado.\
La aplicación de métricas estandarizadas, pruebas automatizadas y
herramientas de análisis aseguró una evaluación objetiva y confiable.\
Las acciones correctivas y preventivas propuestas contribuirán a elevar
la calidad del software y garantizar un mejor desempeño, mantenibilidad
y experiencia de usuario.

