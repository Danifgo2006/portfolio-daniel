# Portfolio Daniel — RA2

Portfolio estático de Daniel Gallego, preparado como entrega de la Fase 1 del RA2. La versión implementada usa HTML, CSS y JavaScript nativos y conserva la exportación original de Figma MCP dentro de `mcp-export/`.

- Figma: https://www.figma.com/design/Ut4rOyHC6pAhTXGUaX1e5E/DAW_DanielGallego
- Exportación original: [`mcp-export/`](mcp-export/)
- Web publicada: pendiente de activar GitHub Pages

## Ejecutar el proyecto

1. Abre la carpeta `Portfolio_Daniel` en Visual Studio Code.
2. Abre `index.html` con Live Server o con cualquier servidor estático.
3. Comprueba los enlaces `Sobre mí` y `Contacto` del menú.
4. Para revisar móvil, usa las herramientas del navegador con un ancho de 360 px.

No hay dependencias de npm. Las únicas fuentes externas son Inter y Archivo Black desde Google Fonts.

## Estructura

```text
Portfolio_Daniel/
├── index.html
├── sobre-mi.html
├── contacto.html
├── css/
│   ├── style.css       # punto de entrada de estilos
│   ├── tokens.css      # variables de diseño
│   └── styles.css      # reset, layout y componentes
├── js/
│   └── main.js         # menú móvil y validación del formulario
├── assets/img/         # recursos gráficos usados por la web final
├── mcp-export/         # exportación original de Figma MCP, sin modificar
└── docs/captures/      # evidencias que se deben añadir durante la revisión
```

## Qué se obtuvo de Figma MCP

La carpeta `mcp-export/` conserva las tres pantallas solicitadas y su salida original. En la exportación aparecen HTML/CSS/JavaScript, además de los originales React en `mcp-export/original/`. Por tanto, la exportación original no se presenta como HTML puro: se documenta como salida mixta del MCP.

| Pantalla | Evidencia revisada | Resultado de la revisión |
| --- | --- | --- |
| `1:2 — 01_MisProyectos` | Página exportada, tarjetas, imágenes y navegación | Tres tarjetas de proyectos y fondo degradado; la navegación necesita conexión entre páginas en la implementación final. |
| `37:12 — 02_SobreMi` | Página exportada y recursos `02_SobreMi-*` | Sección de presentación con tres bloques visuales y textos de formación/habilidades. |
| `37:69 — 03_Contacto` | Página exportada y recursos `03_Contacto-*` | Formulario visual con nombre, correo, mensaje y acción de envío. |
| Recursos gráficos | `mcp-export/assets/` y `assets/img/` | Se conservaron los recursos originales; los nombres de los recursos finales se normalizaron sin espacios. |
| Tipografía | Valores extraídos del diseño | Inter para cuerpo y Archivo Black para la marca; los pesos usados son 400, 600 y 700. |
| Tokens de color | Valores extraídos del diseño | Fondo claro degradado, superficies blancas, texto negro y estados de botón/foco documentados en `css/tokens.css`. |
| Espaciado y radios | Valores extraídos y escala recomendada | La escala base se centraliza en `--space-*`; los radios y tamaños de controles también están en tokens. |
| Variables Figma | Variables disponibles en la exportación | No se recibió un fichero de variables editable; los tokens CSS indican qué valores provienen del diseño y cuáles se añadieron para estados web. |

## Tokens de diseño

`css/tokens.css` contiene únicamente custom properties dentro de `:root`. Los valores procedentes directamente de Figma son los colores, tipografías, tamaños y espaciados observados en las pantallas. Los estados `hover`, `active`, `focus`, `error` y `success`, junto con algunos tamaños de interacción, son tokens recomendados para cubrir los requisitos web que no estaban representados en las tres pantallas originales.

La hoja `css/style.css` solo importa `tokens.css` y `styles.css`. Esto permite localizar los tokens sin alterar la exportación de Figma.

| Token | Valor | Rol | Procedencia |
| --- | --- | --- | --- |
| `--color-background-start` | `#f7f8fa` | Inicio del fondo degradado | Figma, extraído de las pantallas |
| `--color-background-end` | `#e8eeff` | Final del fondo degradado | Figma, extraído de las pantallas |
| `--color-surface` | `#ffffff` | Superficie de tarjetas y formulario | Figma, extraído de las pantallas |
| `--color-text` | `#000000` | Texto principal | Figma, extraído de las pantallas |
| `--font-body` | `Inter` | Texto de contenido | Figma, extraído de la tipografía enlazada |
| `--font-logo` | `Archivo Black` | Marca DG | Figma, extraído de la tipografía enlazada |
| `--text-base` / `--text-lg` / `--text-page-title` | `1rem` / `1.125rem` / `3rem` | Escala tipográfica | Figma + normalización a rem |
| `--space-1` … `--space-12` | `0.25rem` … `4rem` | Escala de espaciado | Recomendación basada en escala de 4 px |
| `--color-primary-hover` | `#343b4b` | Estado hover del botón | Recomendado; no aparece como variable en la exportación |
| `--color-primary-active` | `#191d26` | Estado activo del botón | Recomendado; no aparece como variable en la exportación |
| `--color-focus-ring` | `#2563eb` | Indicador visible de foco | Recomendado para accesibilidad |
| `--color-error` | `#b91c1c` | Error de validación | Recomendado para el formulario |

## Comportamiento implementado

- Tres páginas enlazadas: proyectos, sobre mí y contacto.
- Menú móvil desplegable con botón, `aria-expanded` y cierre al seleccionar un enlace.
- Rejilla responsive de una columna en móvil, dos columnas en tablet y tres en escritorio.
- Formulario con validación en cliente, mensajes por campo, `aria-invalid` y foco en el primer error.
- Estados hover, active y focus-visible para controles.
- Animación de entrada escalonada para tarjetas, limitada a 150–300 ms en controles y desactivable con `prefers-reduced-motion`.
- Sin scroll horizontal a 360 px gracias a `minmax(0, 1fr)`, imágenes fluidas y `overflow-x: hidden`.

## Arquitectura y decisiones

La navegación usa Flexbox porque distribuye elementos en una sola fila; la galería usa CSS Grid porque necesita controlar filas, columnas y áreas; cada tarjeta y el formulario usan Flexbox para apilar contenido. Los puntos de corte de 48rem y 75rem corresponden al momento en que la navegación y las tarjetas dejan de caber cómodamente, no a un dispositivo concreto.

El formulario no usa un envío a servidor: el JavaScript valida los campos y muestra el estado de error para que la práctica pueda probarse localmente. En una aplicación real se conectaría el botón a un endpoint seguro.

## Autocrítica

1. Sustituiría la validación local por un servicio de envío real con protección antispam.
2. Añadiría una página individual para cada proyecto cuando exista contenido suficiente.
3. Comprimiría las imágenes exportadas y añadiría formatos WebP/AVIF para mejorar el rendimiento.

## Uso de herramientas

Se utilizó Figma MCP para consultar las tres pantallas y conservar su exportación inicial. La implementación final se revisó y reorganizó manualmente con HTML, CSS y JavaScript nativos. No se ha modificado el archivo de Figma.

## Evidencias y revisión pendiente

La carpeta `docs/captures/` incluye una guía para guardar capturas de Figma y del navegador. Antes del envío final hay que añadir las capturas reales de la vista móvil de Figma, de cada página renderizada y de los estados de interacción.

También quedan fuera de esta edición local las tareas externas de la práctica: crear o actualizar el repositorio público de GitHub, activar GitHub Pages, añadir la URL desplegada al formulario de entrega, crear los estados/variantes en Figma y completar el mínimo de diez commits del RA. No se ha hecho ningún commit ni se ha modificado el archivo de Figma desde este proyecto.

## Checklist antes de entregar

- [ ] Añadir capturas en `docs/captures/`.
- [ ] Crear estados/variantes en Figma y anotar sus nombres.
- [ ] Publicar el repositorio y activar GitHub Pages.
- [ ] Probar enlaces, menú, teclado y formulario.
- [ ] Verificar la vista a 360 px y el modo de movimiento reducido.
- [ ] Hacer los commits requeridos por la práctica.
