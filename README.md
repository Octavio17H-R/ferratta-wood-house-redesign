# FERRATTA WOOD HOUSE — Rediseño integral

Proyecto de propuesta comercial y catálogo digital multipágina para FERRATTA WOOD HOUSE. La experiencia visual toma como referencia un lenguaje editorial de arquitectura e interiorismo premium; la organización del catálogo y los textos comerciales se basan en el contenido público de Ferratta.

## Requisitos

- Node.js 20 o superior (Node 22 también funciona).
- npm incluido con Node.
- VS Code recomendado.

## Ejecutar en Windows (PowerShell)

1. Descomprime el ZIP.
2. Abre la carpeta `Ferratta-Wood-House-Redesign` en VS Code. Debes ver `package.json` directamente en el explorador.
3. Abre `Terminal > New Terminal` y confirma que la ruta de la terminal termina en `Ferratta-Wood-House-Redesign`.
4. Instala dependencias:

```powershell
npm.cmd install
```

5. Inicia el sitio:

```powershell
npm.cmd run dev
```

6. Abre la dirección que muestre Vite; normalmente `http://localhost:5173/`.

Para generar la versión de producción:

```powershell
npm.cmd run build
```

Los archivos finales se generan en `dist/`.

## Estructura

```text
Ferratta-Wood-House-Redesign/
├── public/
│   ├── images/                 # Dos imágenes conceptuales para la presentación
│   └── catalogo/               # Carpeta para fotografías reales
├── src/
│   ├── components/             # Header, footer, iconos, UI y cotizador
│   ├── data/catalog.js         # Catálogo, colecciones, modelos y datos comerciales
│   ├── pages/                  # Inicio, catálogo, fichas, servicios y páginas informativas
│   ├── App.jsx                 # Rutas
│   ├── main.jsx                # Entrada React
│   └── index.css               # Sistema visual responsive
├── index.html
├── package.json
└── vite.config.js
```

## Alcance del catálogo inicial

- 7 familias de navegación (5 líneas de catálogo identificadas y 2 espacios opcionales por confirmar).
- 35 colecciones o líneas registradas en el archivo de datos, incluyendo algunas referencias de menú alternativo o históricas debidamente marcadas.
- 61 páginas de modelos/referencias generadas a partir de nombres publicados en fichas y catálogos.
- El contenido técnico sólo se muestra cuando fue localizado; los datos dudosos llevan una nota de validación.

## Páginas y funcionalidades

- Inicio editorial con hero, filosofía de marca, marcas, selecciones, servicios, inspiración y showroom.
- Catálogo general y páginas de categoría: madera, laminados, SPC, vinyl, cortinas/persianas, muros y pérgolas (estas dos últimas quedan identificadas como líneas por confirmar).
- Mega menú de escritorio con acceso directo a las colecciones y navegación móvil con las categorías principales.
- Páginas de colección con descripción, datos técnicos, modelos y llamada a cotización.
- Páginas individuales para las referencias/modelos identificados en el catálogo.
- Búsqueda en el catálogo.
- Mega menú de escritorio y navegación móvil.
- Nosotros, proyectos/inspiración, instalación de pisos, instalación de cortinas, mantenimiento, contacto y privacidad.
- Formulario de cotización que prepara un mensaje para WhatsApp.

## Cómo cargar fotografías reales

Las dos imágenes de `public/images/` son conceptuales y sólo sirven para presentar la propuesta. Para fotografía oficial, usa esta convención:

- Colección: `public/catalogo/colecciones/<slug>/cover.webp` y `detalle-01.webp` (si necesitas una segunda vista)
- Producto/modelo: `public/catalogo/productos/<slug>/cover.webp`
- Vistas adicionales: `public/catalogo/productos/<slug>/detalle-01.webp`, `detalle-02.webp`, `instalacion.webp`

Después agrega la ruta pública (sin `public`) en `src/data/catalog.js`:

```js
// En el objeto C(...) de una colección:
image: '/catalogo/colecciones/spc-futura/cover.webp',
gallery: ['/catalogo/colecciones/spc-futura/cover.webp', '/catalogo/colecciones/spc-futura/detalle-01.webp'],

// En un modelo dentro de models:
{
  name: 'Nombre del modelo',
  slug: 'spc-futura-nombre-del-modelo',
  image: '/catalogo/productos/spc-futura-nombre-del-modelo/cover.webp',
  gallery: [
    '/catalogo/productos/spc-futura-nombre-del-modelo/detalle-01.webp',
    '/catalogo/productos/spc-futura-nombre-del-modelo/detalle-02.webp',
    '/catalogo/productos/spc-futura-nombre-del-modelo/instalacion.webp'
  ]
}
```

El componente de colección y las fichas de producto detectan esas rutas y reemplazan automáticamente los espacios de fotografía.

## Editar el catálogo y los datos del negocio

El archivo `src/data/catalog.js` es la fuente principal de contenido. Ahí se encuentran:

- `categories`: categorías y navegación de catálogo.
- `collections`: descripciones, marca, URL original, estado de validación, medidas, material, acabado y modelos.
- `products`: se genera automáticamente a partir de `models`.
- `contact`: dirección, horario, teléfonos, WhatsApp y mapa.
- `brandCopy`: frases de marca localizadas en el sitio público.

No es necesario editar los componentes para añadir una nueva colección: agrega un registro `C(...)` en `collections`, incluye su `slug` en `collectionSlugs` de la categoría correspondiente y añade sus modelos en `models`.

## Consideraciones antes de publicar

- El formulario actual abre WhatsApp con los datos capturados; no guarda registros en una base de datos ni envía correos automáticamente.
- No se implementó carrito ni checkout. El sitio está planteado como catálogo premium y captación de solicitudes de cotización.
- No se publican precios ni inventario porque no se localizaron como datos comerciales vigentes de forma verificable.
- Las colecciones visibles en menús alternativos o con páginas antiguas se marcan como pendientes de validar.
- Muros y Pérgolas aparecen como secciones preparadas, no como líneas confirmadas del catálogo actual.
- El aviso de privacidad es un espacio de sustitución: debe integrarse el documento legal vigente que autorice Ferratta.
- Antes de lanzar, confirmar teléfonos, WhatsApp, horarios, rutas, vigencia de productos, medidas y nombres comerciales con la empresa.
- El archivo `public/.htaccess` ofrece fallback para React Router en Apache/cPanel. Desplegar primero en staging o subdominio: no subirlo directamente sobre el OpenCart actual sin plan de migración y respaldo.

## Dependencias principales

- React 18.3.1 y React DOM 18.3.1 fijados a la misma versión.
- React Router DOM 6.30.1.
- Framer Motion 11.18.2.
- Tailwind CSS 3.4.17.
- Vite 5.4.14.

No utiliza `lucide-react`: los iconos están implementados como SVG locales para evitar agregar otra dependencia de iconos y reducir el riesgo de repetir el error de hooks de la primera configuración.

## Publicar en GitHub Pages

Este proyecto incluye un workflow en `.github/workflows/deploy.yml` para compilar y publicar automáticamente en GitHub Pages.

1. Crea un repositorio **público** en GitHub, por ejemplo `ferratta-wood-house-redesign`. No marques las opciones para crear README, `.gitignore` ni licencia si vas a subir esta carpeta completa.
2. En VS Code, abre la carpeta donde está `package.json` y sube todos los archivos del proyecto (no subas `node_modules/` ni `dist/`).
3. En GitHub abre **Settings → Pages** y selecciona **GitHub Actions** como Source.
4. La rama `main` activa el workflow. En **Actions** verifica que termine en verde.
5. La dirección será `https://TU-USUARIO.github.io/ferratta-wood-house-redesign/`.

La configuración toma automáticamente el nombre del repositorio en GitHub Actions. En local, Vite sigue usando `/`. La aplicación usa `HashRouter` para que las rutas internas no devuelvan 404 al recargar en GitHub Pages. Las rutas de imágenes también respetan el subdirectorio del repositorio.

**Importante:** un repositorio público y GitHub Pages hacen que el código y la web sean visibles para cualquiera. No subas contraseñas, claves API, datos personales ni información privada del negocio. Para usar un repositorio privado con GitHub Pages, revisa las condiciones del plan de GitHub.
