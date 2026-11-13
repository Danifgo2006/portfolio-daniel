# Exportación inicial de Figma MCP

Origen: DAW_DanielGallego, archivo Ut4rOyHC6pAhTXGUaX1e5E. Nodos 1:2, 37:12 y 37:69.

El MCP generó React (JSX) con clases Tailwind, no HTML puro. Los tres componentes originales se conservan sin alterar en original/. Sus URL temporales solo se conservan como registro; los HTML usan los recursos descargados en assets/.

Las tres páginas HTML y css/export.css son una conversión de esa salida a HTML y CSS puro. js/export.js añade únicamente navegación local. No requieren React ni Tailwind. Abrir mis-proyectos.html para comenzar.

Se mantiene el lienzo inicial de 1440 × 1024, las capas y los recortes de imágenes. No se han aplicado mejoras de responsive, accesibilidad, semántica ni arquitectura. El formulario es una representación gráfica sin envío ni backend, como la salida MCP. Inicio enlaza provisionalmente con Mis proyectos porque no se ha exportado una cuarta pantalla.

Las tipografías Inter y Archivo Black se cargan desde Google Fonts: Figma MCP no entregó archivos de fuentes. Se necesita conexión para cargarlas.

Los recursos originales descargados son seis PNG y seis SVG. No se ha modificado Figma ni se han realizado commits.
