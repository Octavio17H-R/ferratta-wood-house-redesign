// Catálogo estructurado para que las imágenes, fichas y modelos se puedan cargar
// desde archivos locales sin modificar los componentes de la tienda.
// Los campos vacíos o marcados como "por validar" no son especificaciones inventadas.

export const brandCopy = {
  line: 'FERRATTA WOOD HOUSE · DECORACIÓN Y MANTENIMIENTO RESIDENCIAL Y COMERCIAL',
  statement: 'En Ferratta, los espacios son declaraciones de estilo, funcionalidad y estética atemporal.',
  philosophy: 'Honramos la materia, respetamos la arquitectura, perseguimos la precisión de cada detalle.',
  promise: 'Creemos en materiales que combinan calidad, precisión y elegancia duradera.',
}

export const contact = {
  address: 'Campeche No. 30, Col. Roma Sur, CDMX, México',
  street: 'Campeche #30',
  neighborhood: 'Col. Roma Sur, CDMX',
  hours: 'Lunes a viernes · 10:00–18:00 h',
  phones: ['55 5412 38 67', '55 2215 83 08', '55 5264 15 09', '55 7833 48 36'],
  whatsapp: '525554123867',
  map: 'https://www.google.com/maps/search/?api=1&query=Campeche+30+Colonia+Roma+Sur+Ciudad+de+Mexico',
}

export const categories = [
  {
    slug: 'madera', title: 'Pisos de madera', navTitle: 'Madera', eyebrow: 'La expresión natural',
    description: 'Maderas finas de importación seleccionadas por su carácter, calidez y riqueza de veta. Colecciones de encino europeo, nogal y otras especies con acabados arquitectónicos.',
    image: '/images/ferratta-hero.webp', countLabel: '3 marcas · 15 colecciones y referencias',
    tonalities: ['Maderas claras', 'Tonos medios', 'Tonos oscuros'],
    brands: [
      { name: 'Du Chateau', slug: 'du-chateau', description: 'Pisos de encino europeo con acabados al aceite y una expresión natural, cruda y atemporal.' },
      { name: 'Vista Wood', slug: 'vista-wood', description: 'Maderas de apariencia natural y contemporánea, con acabados que resaltan veta y tonalidad.' },
      { name: 'Dabo', slug: 'dabo', description: 'Formatos y patrones de encino europeo, con presencia visual y geometrías arquitectónicas.' },
    ],
    collectionSlugs: ['du-chateau','vernal','riverstone','global-winds','terra-wide','terra-herringbone','vista-basicos','vista-seasons','vista-strips','vista-naturales','vista-nogales','vista-herringbone','vista-slim','dabo','dabo-patterns'],
  },
  {
    slug: 'laminados', title: 'Pisos laminados', navTitle: 'Laminados', eyebrow: 'Diseño versátil',
    description: 'Una selección de superficies laminadas en distintos formatos, espesores y niveles de uso residencial y comercial.',
    image: '/images/ferratta-dining.webp', countLabel: '3 colecciones',
    collectionSlugs: ['laminado-clasicos','laminado-select','laminado-vintage'],
  },
  {
    slug: 'spc', title: 'Pisos SPC', navTitle: 'SPC', eyebrow: 'Tecnología en superficies',
    description: 'Colecciones de pisos SPC con acabados texturizados y formatos distintos. Consulta las fichas y confirma la disponibilidad de cada referencia.',
    image: '/images/ferratta-hero.webp', countLabel: '4 colecciones',
    collectionSlugs: ['spc-futura','spc-max','spc-forest','spc-metropia'],
  },
  {
    slug: 'vinyl', title: 'Pisos de vinyl', navTitle: 'Vinyl', eyebrow: 'Confort cotidiano',
    description: 'Alternativas de piso vinílico con apariencia de madera, formatos compactos y soluciones para distintos tipos de espacio.',
    image: '/images/ferratta-dining.webp', countLabel: '2 colecciones publicadas · variantes históricas',
    collectionSlugs: ['vinyl-metropia','vinyl-woodstock','vinyl-deluxe-classic','vinyl-luxtech'],
  },
  {
    slug: 'cortinas', title: 'Cortinas y persianas', navTitle: 'Cortinas y persianas', eyebrow: 'Luz, textura y privacidad',
    description: 'Sistemas textiles, enrollables y persianas para modular la entrada de luz, la privacidad y el carácter de cada ambiente. Opciones manuales o motorizadas según colección.',
    image: '/images/ferratta-hero.webp', countLabel: '9 líneas de producto',
    collectionSlugs: ['cortinas-enrollables','cortinas-duo','cortinas-celular','cortinas-shangri-la','cortinas-balet','persianas-madera','cortinas-romana','persianas-aluminio','confeccion-tela'],
  },
  {
    slug: 'muros', title: 'Revestimientos de muro', navTitle: 'Muros', eyebrow: 'Línea complementaria',
    description: 'Espacio preparado para integrar revestimientos, materiales y acabados de muro cuando Ferratta confirme las referencias que desea publicar.',
    image: null, countLabel: 'Catálogo por confirmar', collectionSlugs: [], pending: true,
  },
  {
    slug: 'pergolas', title: 'Pérgolas y exterior', navTitle: 'Pérgolas', eyebrow: 'Línea complementaria',
    description: 'Sección opcional preparada para presentar soluciones exteriores. Modelos, materiales y disponibilidad deben validarse antes de publicar.',
    image: null, countLabel: 'Catálogo por confirmar', collectionSlugs: [], pending: true,
  },
]

const C = (slug, category, brand, name, description, details = {}) => ({
  slug, category, brand, name, description,
  originalUrl: details.originalUrl || '',
  specs: details.specs || [],
  models: details.models || [],
  note: details.note || '',
  status: details.status || 'Contenido público localizado',
  image: details.image || null,
  gallery: details.gallery || [],
  material: details.material || '',
  finish: details.finish || '',
})

export const collections = [
  // Madera · Du Chateau
  C('du-chateau','madera','Du Chateau','Colección Du Chateau','La colección muestra cambios naturales de textura y carácter en el encino europeo. El sitio la describe como madera acabada al aceite, con variaciones que evocan la antigüedad de la materia.',{
    originalUrl:'https://ferratta.com/Madera/Du-Chateau/Colecci%C3%B3n-Du-Chateau', material:'Encino europeo', finish:'Al aceite',
    specs:[['Especie','Encino europeo'],['Ancho','19 cm'],['Espesor','1.59 cm'],['Largo','El sitio publica 1.90; unidad por confirmar'],['Instalación','Con adhesivo'],['Uso','Residencial y comercial']],
    models:[{name:'Domenico',slug:'du-chateau-domenico'},{name:'Bravone',slug:'du-chateau-bravone'}],
    note:'La ficha original presenta más de una dimensión para ciertos nombres. Confirmar la ficha técnica vigente antes de publicar medidas definitivas.'
  }),
  C('vernal','madera','Du Chateau','Colección Vernal','Pisos encerados, lustrados y modernos que buscan crear una atmósfera de tranquilidad. El sitio menciona una combinación de pureza, frescura natural y posibilidades para distintos interiores.',{
    originalUrl:'https://ferratta.com/Madera/Du-Chateau/Colecci%C3%B3n-Vernal',material:'Nogal americano',finish:'Barniz mate',
    specs:[['Marca','Du Chateau'],['Especie','Nogal americano'],['Ancho','19 cm'],['Espesor','1.59 cm'],['Largo','1.9 m'],['Terminado','Barniz mate']],
    models:[]
  }),
  C('riverstone','madera','Du Chateau','Colección Riverstone','Una evolución esculpida a mano, con nudos suaves y naturales que aportan una lectura cruda y orgánica, compatible con interiores clásicos y contemporáneos.',{
    originalUrl:'https://ferratta.com/Madera/Du-Chateau/Colecci%C3%B3n-Riverstone',material:'Encino europeo',finish:'Al aceite',
    specs:[['Marca','Du Chateau'],['Especie','Encino europeo'],['Ancho','19 cm'],['Espesor','1.59 cm'],['Largo','1.9 m'],['Acabado','Al aceite'],['Instalación','Con adhesivo']]
  }),
  C('global-winds','madera','Du Chateau','Colección Global Winds','Una colección inspirada en la belleza natural de la madera dura y en la acción del sol, el viento y el tiempo sobre sus tonalidades y carácter.',{
    originalUrl:'https://ferratta.com/Madera/Du-Chateau/Coleccion-Global-Winds',material:'Encino europeo',specs:[['Especie','Encino europeo']],
    note:'La ficha consultada contiene una descripción de colección y parte de sus especificaciones; completar atributos por modelo con la ficha técnica vigente.'
  }),
  C('terra-wide','madera','Du Chateau','Colección Terra Wide','Colección inspirada en ecosistemas naturales de distintas regiones del mundo. Sus referencias visuales recorren bosques, praderas y paisajes costeros.',{
    originalUrl:'https://ferratta.com/Madera/Du-Chateau/Coleccion-Terra-Wide',material:'Madera natural',note:'Descripción editorial localizada; especificaciones por modelo pendientes de cargar.'
  }),
  C('terra-herringbone','madera','Du Chateau','Colección Herringbone Terra','Una lectura geométrica de la colección Terra. El sitio relaciona su inspiración con ecosistemas naturales y patrones que evocan distintos paisajes.',{
    originalUrl:'https://ferratta.com/Madera/Du-Chateau/Coleccion-Herringbone-Terra',material:'Madera natural',note:'La ficha alterna el título Herringbone Terra y Terra Herringbone. Se unificó como Terra Herringbone para la navegación.'
  }),
  // Madera · Vista Wood
  C('vista-basicos','madera','Vista Wood','Colección Básicos','Una de las colecciones más reconocidas de Vista Wood, basada en la apariencia y resistencia del encino europeo.',{
    originalUrl:'https://ferratta.com/Madera/Vista-Woods/COLECCI%C3%93N-ENCINOS',material:'Encino europeo',finish:'Barniz mate',
    specs:[['Entrega','Inmediata'],['Especie','Encino europeo'],['Ancho','19 cm'],['Espesor','12 mm'],['Largo','Diversos: 62 cm a 1.86 m'],['Acabado','Barniz mate'],['Instalación','Con adhesivo'],['Uso','Residencial y comercial']]
  }),
  C('vista-seasons','madera','Vista Wood','Colección Seasons','Colección incluida en la navegación interna de Vista Wood. La ficha de producto y sus atributos visuales están preparados para recibir las imágenes y datos vigentes.',{
    originalUrl:'',note:'Colección visible en el menú interno de Ferratta; no se localizó una ficha pública independiente verificable.'
  }),
  C('vista-strips','madera','Vista Wood','Colección Strips','Colección incluida en la navegación interna de Vista Wood. La ficha queda lista para incorporar modelos, acabados y fotografías oficiales.',{
    originalUrl:'',note:'Colección visible en el menú interno de Ferratta; no se localizó una ficha pública independiente verificable.'
  }),
  C('vista-naturales','madera','Vista Wood','Colección Naturales','Pisos de encino europeo y fresno con tonalidades que van de claras a oscuras. El sitio destaca el ancho de 19 cm y los acabados mate.',{
    originalUrl:'https://ferratta.com/Madera/Vista-Woods/COLECCI%C3%93N-NOGALES',material:'Encino europeo y fresno',finish:'Barniz y aceite',
    specs:[['Especies','Encino europeo y fresno'],['Ancho mencionado','19 cm'],['Acabados','Barniz y aceite']],
    models:[{name:'Light Oak',slug:'vista-naturales-light-oak'},{name:'Simple Oak',slug:'vista-naturales-simple-oak'},{name:'Platinum Ash',slug:'vista-naturales-platinum-ash'},{name:'Amber Oak',slug:'vista-naturales-amber-oak'},{name:'Brown Ash',slug:'vista-naturales-brown-ash'}],
    note:'La ruta y el encabezado de la ficha original no coinciden: la página abierta desde el enlace de Naturales muestra el encabezado “Colección Naturales”.'
  }),
  C('vista-nogales','madera','Vista Wood','Colección Nogales','Una colección de nogal de carácter clásico, descrita por Ferratta como majestuosa y funcional.',{
    originalUrl:'https://ferratta.com/Madera/Vista-Woods/COLECCION-NOGAL',material:'Nogal',finish:'Barniz semi-mate',
    specs:[['Entrega','Inmediata'],['Especie','Nogal'],['Acabado','Barniz semi-mate'],['Uso Slim Walnut','Residencial'],['Uso Native Walnut','Residencial y comercial']],
    models:[{name:'Slim Walnut',slug:'vista-nogales-slim-walnut',specs:'12.7 cm × 1.0 cm × hasta 1.20 m'},{name:'Native Walnut',slug:'vista-nogales-native-walnut',specs:'16.5 cm × 1.27 cm × hasta 1.20 m'}]
  }),
  C('vista-herringbone','madera','Vista Wood','Colección Herringbone','Piso de encino europeo en patrón espiga, con acabado de barniz mate.',{
    originalUrl:'https://ferratta.com/Madera/Vista-Woods/COLECCION-HERRINGBONE',material:'Encino europeo',finish:'Barniz mate',
    specs:[['Entrega','Inmediata'],['Especie','Encino europeo'],['Ancho','13 cm'],['Espesor','14 mm'],['Largo','0.725 m'],['Instalación','Con adhesivo'],['Uso','Residencial y comercial']]
  }),
  C('vista-slim','madera','Vista Wood','Colección Slim','Colección referenciada en una de las versiones del menú de Vista Wood.',{
    originalUrl:'https://ferratta.com/Madera/Vista-Woods/COLECCI%C3%93N-SLIM',status:'Enlace original no disponible',note:'El enlace público consultado respondió 404. Se conserva el espacio en el catálogo para validar si sigue vigente.'
  }),
  // Madera · Dabo
  C('dabo','madera','Dabo','Colección Dabo','Piso de encino europeo con una presencia sobria y formato de tabla ancha.',{
    originalUrl:'https://ferratta.com/Madera/Dabo/Coleccion-Dabo',material:'Encino europeo',finish:'Al barniz',
    specs:[['Entrega','Inmediata'],['Especie','Encino europeo'],['Ancho','24 cm'],['Espesor','1.5 cm'],['Largo','2.20 m'],['Acabado','Al barniz'],['Instalación','Con adhesivo'],['Uso','Residencial y comercial']]
  }),
  C('dabo-patterns','madera','Dabo','Colección Dabo Patterns','Colección de encino europeo con geometrías decorativas y modelos de dimensiones diferenciadas.',{
    originalUrl:'https://ferratta.com/Madera/Dabo/Dabo-Patterns',material:'Encino europeo',finish:'Barniz',
    specs:[['Entrega','Inmediata'],['Especie','Encino europeo'],['Acabado','Barniz'],['Instalación','Con adhesivo'],['Uso','Residencial y comercial']],
    models:[{name:'Biwa',slug:'dabo-patterns-biwa',specs:'18.2 × 1.5 × 64.8 cm'},{name:'Daisen',slug:'dabo-patterns-daisen',specs:'26.2 × 1.5 × 38.9 cm'},{name:'Nara',slug:'dabo-patterns-nara',specs:'12.7 × 1.5 × 91 cm'},{name:'Tokio',slug:'dabo-patterns-tokio',specs:'9.2 × 1.5 × 60 cm'}]
  }),
  // Laminados
  C('laminado-clasicos','laminados','Ferratta','Colección Clásicos','Piso laminado para uso residencial y comercial ligero.',{
    originalUrl:'https://ferratta.com/Pisos-Laminados',specs:[['Largo','1,380 mm'],['Ancho','193 mm'],['Espesor','7 mm'],['Uso','Comercial ligero y residencial'],['Bisel','La ficha menciona “sin bisel”; confirmar modelo']]
  }),
  C('laminado-select','laminados','Ferratta','Colección Select','Piso laminado en formato ancho para uso residencial y comercial medio.',{
    originalUrl:'https://ferratta.com/Pisos-Laminados',specs:[['Largo','1,380 mm'],['Ancho','244 mm'],['Espesor','8 mm'],['Uso','Comercial medio y residencial'],['Bisel','Con bisel']]
  }),
  C('laminado-vintage','laminados','Ferratta','Colección Vintage','Piso laminado con proporción de tabla estilizada y acabado de carácter clásico.',{
    originalUrl:'https://ferratta.com/Pisos-Laminados',specs:[['Largo','1,380 mm'],['Ancho','159 mm'],['Espesor','8 mm'],['Uso','Comercial medio y residencial'],['Bisel','Con bisel']]
  }),
  // SPC
  C('spc-futura','spc','Ferratta','Colección Futura','Colección SPC con relieve grabado, concebida para aplicaciones residenciales y comerciales.',{
    originalUrl:'https://ferratta.com/Piso-SPC/Colecci%C3%B3n-Futura',specs:[['Ancho','22.8 cm'],['Espesor','4 mm'],['Largo','1.22 m'],['Acabado','Grabado en relieve'],['Uso','Residencial y comercial']]
  }),
  C('spc-max','spc','Ferratta','Colección Max','Colección SPC de 5 mm de espesor con acabado grabado en relieve.',{
    originalUrl:'https://ferratta.com/Piso-SPC/coleccion-max',specs:[['Ancho','22.8 cm'],['Espesor','5 mm'],['Largo','1.22 m'],['Acabado','Grabado en relieve'],['Uso','Residencial y comercial']]
  }),
  C('spc-forest','spc','Ferratta','Colección Forest','Colección que aparece en el catálogo SPC de Ferratta. La ficha pública consultada no expone especificaciones técnicas.',{
    originalUrl:'https://ferratta.com/Piso-SPC/coleccion-forest',status:'Ficha por completar',note:'Nombre y ficha localizados; atributos y fotografías por cargar con información autorizada.'
  }),
  C('spc-metropia','spc','Ferratta','Colección Metropia SPC','Colección SPC con acabado grabado en relieve y formato de tabla larga.',{
    originalUrl:'https://ferratta.com/Piso-SPC/coleccion-metropiaspc',specs:[['Ancho','23 cm'],['Espesor','6.5 mm'],['Largo','1.80 m'],['Acabado','Grabado en relieve'],['Uso','Residencial y comercial']]
  }),
  // Vinyl
  C('vinyl-metropia','vinyl','London Cooper','Colección Metropia','Piso vinílico texturizado en distintos tonos y formatos. La ficha original muestra variantes Classic Walnut y Fine Walnut.',{
    originalUrl:'https://ferratta.com/PISOS-DE-VYNIL/COLECCI%C3%93N-AUSTRALIA',specs:[['Ancho variante 1','18.6 cm'],['Ancho variante 2','22.86 cm'],['Espesor','3 mm'],['Largo','1.22 m'],['Acabado','Texturizado'],['Uso','Residencial y comercial']],
    models:[{name:'Classic Walnut',slug:'vinyl-metropia-classic-walnut'},{name:'Fine Walnut',slug:'vinyl-metropia-fine-walnut'}],
    note:'La ruta del sitio contiene “Australia”, mientras que la ficha se titula “Colección Metropia”. Se conserva el alias para evitar perder la referencia.'
  }),
  C('vinyl-woodstock','vinyl','London Cooper','Colección Woodstock','Piso vinílico con apariencia y sensación de madera natural. La ficha destaca limpieza con medios húmedos, sensación térmica agradable y baja transmisión de ruido.',{
    originalUrl:'https://ferratta.com/PISOS-DE-VYNIL/COLECCI%C3%93N-WOODSTOCK',finish:'Semi-mate',
    specs:[['Marca','London Cooper'],['Espesor','3 mm'],['Dimensiones','95 cm × 8.4 cm'],['Capa de uso','0.50 mm'],['Perfil','Sin bisel'],['Rendimiento por caja','3.32 m²'],['Uso','Residencial y comercial medio']]
  }),
  C('vinyl-deluxe-classic','vinyl','Ferratta','Vinyl Deluxe Classic','Referencia que aparece en versiones ampliadas del menú de producto.',{
    originalUrl:'',status:'Catálogo extendido por validar',note:'Se encontró en un menú interno alternativo, pero no en la categoría pública vigente de Vinyl consultada. Confirmar disponibilidad.'
  }),
  C('vinyl-luxtech','vinyl','Ferratta','Luxtech 20','Referencia que aparece en versiones ampliadas del menú de producto.',{
    originalUrl:'',status:'Catálogo extendido por validar',note:'Se encontró en un menú interno alternativo, pero no en la categoría pública vigente de Vinyl consultada. Confirmar disponibilidad.'
  }),
  // Cortinas y persianas
  C('cortinas-enrollables','cortinas','Ferratta','Cortinas enrollables','Gran variedad de telas con diferentes niveles de opacidad, aislamiento térmico y durabilidad. Se ofrecen sistemas manuales o motorizados.',{
    originalUrl:'https://ferratta.com/Cortinas-enrollables',specs:[['Accionamiento','Manual o motorizado'],['Opciones','Blackout y telas de distintas opacidades'],['Configuraciones','Sistemas para una, dos o tres cortinas en un mismo cabezal']],
    models:[
      {name:'Blackout tela de luxe',slug:'enrollables-blackout-luxe',details:'Colecciones Albans, Super Albans y Chromato; más de 20 colores; poliéster.'},
      {name:'Blackout tela premium',slug:'enrollables-blackout-premium',details:'Colecciones Crystal Fiori, Quebec, Baku, Porto, Macau y Albany; más de 20 colores; poliéster.'},
      {name:'Blackout tela estándar',slug:'enrollables-blackout-estandar',details:'Colecciones Adana, Daytona BO, Dakar, Kabul y Bursa; más de 20 colores; poliéster.'},
      {name:'Blackout de PVC',slug:'enrollables-blackout-pvc',details:'Colección Fresno; 3 colores; composición publicada: 33% fibra de vidrio y 67% PVC.'},
      {name:'Screen de luxe',slug:'enrollables-screen-luxe',details:'Colecciones Cross Line, Bethel, Diamond, Isola 10 y Rokku; más de 20 colores.'},
      {name:'Screen premium',slug:'enrollables-screen-premium',details:'Colecciones Unica 5 y Unica 10; más de 10 colores.'},
      {name:'Screen estándar',slug:'enrollables-screen-estandar',details:'Colecciones Performance, Handscreen y Olar; más de 15 colores.'},
      {name:'Decorativa de tela',slug:'enrollables-decorativa',details:'Colecciones Daytona Dec, Woods, Aspen, Metallic, Floss, Ross y Desert; más de 20 colores.'}
    ]
  }),
  C('cortinas-duo','cortinas','Ferratta','Colección Duo','Cortina tipo cebra con doble tela y franjas opacas y translúcidas que se superponen para regular el ingreso de luz y la privacidad.',{
    originalUrl:'https://ferratta.com/Duo/Colecci%C3%B3n-Duo',specs:[['Sistema','Doble tela / día y noche'],['Composición','100% poliéster'],['Colores','Más de 20'],['Ancho máximo publicado','3.50 m'],['Alto máximo publicado','5.00 m'],['Peso','310 g/m²'],['Uso','Residencial'],['Tiempo de entrega publicado','2 semanas']],models:['Chicnova','Classic','Elegant Knit','Linen','Infinity Sheer','Vintage Decor','Wisteria Scroll'].map((name)=>({name,slug:`duo-${name.toLowerCase().replaceAll(' ','-')}`})),note:'La ficha original publica el alto máximo como “5.000 m”; confirmar esta medida con el proveedor antes de utilizarla como límite técnico.'
  }),
  C('cortinas-celular','cortinas','Ferratta','Colección Celular','Cortina fabricada con celdas indeformables. El sitio describe beneficios de confort térmico y acústico, distintas opacidades y control de privacidad.',{
    originalUrl:'https://ferratta.com/Celular/Colecci%C3%B3n-Celular',specs:[['Composición','100% poliéster'],['Colores','Más de 20'],['Motorización','Disponible'],['Sistema','Día y noche en una sola cortina'],['Ancho máximo estándar','3.60 m'],['Alto máximo estándar','2.80 m'],['Ancho máximo Ultra Swift','4.40 m'],['Alto máximo Ultra Swift','4.20 m'],['Uso','Residencial'],['Tiempo de entrega publicado','2 semanas']],
    models:['Squash','Dezato','Mantis','Sunterra','Vintage','Nut','Cornflower','Apis','Sukker','Munterra'].map((name)=>({name,slug:`celular-${name.toLowerCase()}`})),
    note:'La ficha publica hasta 95% de protección UV; conviene validar la vigencia de esa afirmación con el proveedor antes de reutilizarla en publicidad.'
  }),
  C('cortinas-shangri-la','cortinas','Ferratta','Colección Shangri-La','Sistema que combina la funcionalidad de una persiana horizontal con telas translúcidas y vanos horizontales suspendidos entre velos.',{
    originalUrl:'https://ferratta.com/Shangri-La/Colecci%C3%B3n-Shangri-La',specs:[['Composición','100% poliéster'],['Colores','Más de 10'],['Ancho máximo publicado','3.50 m'],['Alto máximo publicado','3.00 m'],['Uso','Residencial'],['Tiempo de entrega publicado','2 semanas']],
    models:['Sanke','Hikari','Koromo','Kohaku','Showa','Asagi','Shiro','Bekko'].map((name)=>({name,slug:`shangri-la-${name.toLowerCase()}`})),
    note:'Las unidades del área máxima aparecen incompletas en la página original. Se omiten del resumen hasta confirmar la ficha técnica.'
  }),
  C('cortinas-balet','cortinas','Ferratta','Colección Balet','Cortina de tabletas verticales cubiertas de tela y unidas a un velo translúcido. Ofrece control de luz, privacidad y protección solar.',{
    originalUrl:'https://ferratta.com/Balet/Colecci%C3%B3n-Balet',specs:[['Composición','100% poliéster'],['Colores','Más de 10'],['Motorización','Disponible'],['Ancho máximo','4.80 m'],['Alto máximo','3.00 m'],['Uso','Residencial'],['Tiempo de entrega publicado','2 semanas']],
    models:['Chicova','Classic','Elegant Knit','Linen','Infinity Sheer','Vintage Decor','Wisteria Scroll'].map((name)=>({name,slug:`balet-${name.toLowerCase().replaceAll(' ','-')}`}))
  }),
  C('persianas-madera','cortinas','Ferratta','Persianas de madera','Persianas horizontales que combinan la belleza de la madera con el control de luz. La ficha publica dos opciones de material: Cerezo y Nogal.',{
    originalUrl:'https://ferratta.com/Maderas/Colecci%C3%B3n-Maderas',specs:[['Cerezo','Polímero imitación madera'],['Nogal','Madera natural'],['Colores','Más de 10'],['Motorización','Disponible'],['Ancho máximo','2.40 m'],['Alto máximo','3.20 m'],['Área máxima publicada','7.70 m²'],['Uso','Residencial'],['Tiempo de entrega publicado','2 semanas']],
    models:[{name:'Cerezo',slug:'persianas-madera-cerezo'},{name:'Nogal',slug:'persianas-madera-nogal'}]
  }),
  C('cortinas-romana','cortinas','Ferratta','Cortina Romana','Línea incluida en el menú original de Cortinas y Persianas. La estructura de catálogo y ficha queda preparada para incorporar fotografías y especificaciones oficiales.',{
    originalUrl:'https://ferratta.com/Romana/Colecci%C3%B3n-Romana',status:'Ficha por validar',note:'La consulta automatizada del enlace público devolvió 404. Confirmar URL, modelos y datos actuales antes de publicar.'
  }),
  C('persianas-aluminio','cortinas','Ferratta','Persianas de aluminio','Persianas horizontales con tabletas de aluminio sólido o perforado, en acabados de pintura electrostática y opciones de madera natural. La ficha pública destaca el control gradual de luminosidad y privacidad.',{
    originalUrl:'https://ferratta.com/Horizontales-de-Aluminio/Colecci%C3%B3n-Horizontales-de-Aluminio',specs:[['Colección Palladium','Tableta de 20 mm'],['Colecciones Tantallum, Chromo y Forato','Tableta de 50 mm'],['Nogal','Madera natural'],['Colores','Más de 8'],['Ancho máximo Palladium','3.00 m'],['Alto máximo Palladium','3.00 m'],['Área máxima Palladium','9.00 m²'],['Ancho máximo otras colecciones','3.60 m'],['Alto máximo otras colecciones','3.20 m'],['Área máxima otras colecciones','11.52 m²'],['Material','Aluminio sólido y perforado'],['Espesor publicado','0.130 mm o superior'],['Acabado','Pintura electrostática'],['Uso','Residencial']]
  }),
  C('confeccion-tela','cortinas','Ferratta','Confección de tela','Catálogo de textiles organizado en familias Black Out, Chenille, Liso y Terciopelo.',{
    originalUrl:'https://ferratta.com/Confecci%C3%B3n-de-tela',
    models:[
      {name:'Black Out de tela',slug:'textiles-blackout',details:'Botero, Casablanca, Caviar, Corsario, Dimitri, Hanssen, Herry, Magnetic, Niagan y Sochi, entre otras referencias.'},
      {name:'Chenille',slug:'textiles-chenille',details:'Bettina, Bosnia, Brian, Duvet, Hemera, Nardo, Panoma, Posh, Sasco, Siberia y Tron, entre otras referencias.'},
      {name:'Liso',slug:'textiles-liso',details:'Allyson, American Linen, Award, Bella, Benevento, Crystal, Damasco, Dawn y Destiny, entre otras referencias.'},
      {name:'Terciopelo',slug:'textiles-terciopelo',details:'Diamond, Dickens, Emily, Favola, Mirage, Seaweed, Symba y Capitonado, entre otras referencias.'}
    ],
    note:'Los listados del sitio incluyen referencias adicionales truncadas en la página; no se reconstruyen los nombres faltantes.'
  }),
]

export const collectionBySlug = Object.fromEntries(collections.map((item) => [item.slug, item]))
export const categoryBySlug = Object.fromEntries(categories.map((item) => [item.slug, item]))

export const products = collections.flatMap((collection) => (collection.models || []).map((model, index) => ({
  ...model,
  collectionSlug: collection.slug,
  collectionName: collection.name,
  category: collection.category,
  brand: collection.brand,
  description: model.details || `Referencia de la ${collection.name}. Consulta con Ferratta disponibilidad, acabados e información técnica actualizada.`,
  specs: model.specs ? [['Dimensiones', model.specs]] : collection.specs.slice(0, 4),
  image: model.image || null,
  gallery: model.gallery || [],
  datasheet: model.datasheet || '',
  order: index + 1,
})))
export const productBySlug = Object.fromEntries(products.map((item) => [item.slug, item]))

export const mainNavigation = [
  { label: 'Pisos', type: 'mega', groups: [
    { title: 'Madera', items: [
      {label:'Ver pisos de madera',to:'/categoria/madera'},
      {label:'Du Chateau · Colección',to:'/colecciones/du-chateau'},
      {label:'Vernal',to:'/colecciones/vernal'},
      {label:'Riverstone',to:'/colecciones/riverstone'},
      {label:'Global Winds',to:'/colecciones/global-winds'},
      {label:'Terra Wide',to:'/colecciones/terra-wide'},
      {label:'Herringbone Terra',to:'/colecciones/terra-herringbone'},
      {label:'Vista Wood · Básicos',to:'/colecciones/vista-basicos'},
      {label:'Seasons',to:'/colecciones/vista-seasons'},
      {label:'Strips',to:'/colecciones/vista-strips'},
      {label:'Naturales',to:'/colecciones/vista-naturales'},
      {label:'Nogales',to:'/colecciones/vista-nogales'},
      {label:'Herringbone',to:'/colecciones/vista-herringbone'},
      {label:'Slim',to:'/colecciones/vista-slim'},
      {label:'Dabo',to:'/colecciones/dabo'},
      {label:'Dabo Patterns',to:'/colecciones/dabo-patterns'},
    ]},
    { title: 'Laminados · SPC · Vinyl', items: [
      {label:'Pisos laminados',to:'/categoria/laminados'},
      {label:'Clásicos',to:'/colecciones/laminado-clasicos'},
      {label:'Select',to:'/colecciones/laminado-select'},
      {label:'Vintage',to:'/colecciones/laminado-vintage'},
      {label:'Pisos SPC',to:'/categoria/spc'},
      {label:'Futura',to:'/colecciones/spc-futura'},
      {label:'Max',to:'/colecciones/spc-max'},
      {label:'Forest',to:'/colecciones/spc-forest'},
      {label:'Metropia SPC',to:'/colecciones/spc-metropia'},
      {label:'Pisos Vinyl',to:'/categoria/vinyl'},
      {label:'Metropia',to:'/colecciones/vinyl-metropia'},
      {label:'Woodstock',to:'/colecciones/vinyl-woodstock'},
      {label:'Deluxe Classic*',to:'/colecciones/vinyl-deluxe-classic'},
      {label:'Luxtech 20*',to:'/colecciones/vinyl-luxtech'},
    ]},
    { title: 'Cortinas y persianas', items: [
      {label:'Ver todas las líneas',to:'/categoria/cortinas'},
      {label:'Enrollables',to:'/colecciones/cortinas-enrollables'},
      {label:'Duo',to:'/colecciones/cortinas-duo'},
      {label:'Celular',to:'/colecciones/cortinas-celular'},
      {label:'Shangri-La',to:'/colecciones/cortinas-shangri-la'},
      {label:'Balet',to:'/colecciones/cortinas-balet'},
      {label:'Persianas de madera',to:'/colecciones/persianas-madera'},
      {label:'Romana*',to:'/colecciones/cortinas-romana'},
      {label:'Aluminio',to:'/colecciones/persianas-aluminio'},
      {label:'Confección de tela',to:'/colecciones/confeccion-tela'},
    ]},
    { title: 'Servicios', items: [
      {label:'Instalación de pisos',to:'/servicios/instalacion-pisos'},
      {label:'Instalación de cortinas',to:'/servicios/instalacion-cortinas'},
      {label:'Mantenimiento Du Chateau',to:'/mantenimiento'},
      {label:'Proyectos e inspiración',to:'/proyectos'},
      {label:'Solicitar cotización',to:'/contacto'},
    ]},
  ]},
  { label: 'Cortinas y persianas', to: '/categoria/cortinas' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
]
