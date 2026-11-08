import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { brandCopy, contact } from '../data/catalog.js'
import { Eyebrow, Reveal, ArrowLink, ButtonLink, Breadcrumbs, SectionHeading, ImagePanel, EmptyMedia } from '../components/UI.jsx'
import Icon from '../components/Icon.jsx'

export function AboutPage({ onQuote }) {
  return <main className="page-main">
    <section className="about-hero"><div className="about-hero-title"><Breadcrumbs items={[{label:'Nosotros'}]}/><Eyebrow>FERRATTA WOOD HOUSE</Eyebrow><h1>Más que un acabado.<br/><em>Una forma de habitar.</em></h1></div><ImagePanel src="/images/ferratta-hero.webp" alt="Interior arquitectónico con piso de madera" label="La materia como punto de partida" number="01 / 03"/></section>
    <section className="section-wrap about-statement"><Reveal><Eyebrow>Nuestra filosofía</Eyebrow><h2>{brandCopy.statement}</h2></Reveal><Reveal delay={.1}><p>{brandCopy.philosophy} Creemos en materiales que combinan calidad, precisión y elegancia duradera.</p><p>FERRATTA WOOD HOUSE se presenta como una firma de decoración y mantenimiento residencial y comercial, con showroom en la colonia Roma Sur, Ciudad de México.</p><button className="button button-dark" onClick={onQuote}>Conversemos sobre tu proyecto <Icon name="diagonal" size={14}/></button></Reveal></section>
    <section className="about-image-grid section-wrap"><ImagePanel src="/images/ferratta-dining.webp" alt="Comedor con piso oscuro" label="Madera · Textura" number="02"/><EmptyMedia title="Showroom Ferratta" subtitle="Fotografía real por integrar"/><div className="about-image-copy"><Eyebrow>En cada detalle</Eyebrow><h2>Materiales elegidos<br/><em>con intención.</em></h2><p>La propuesta de rediseño ordena el portafolio de Ferratta en una experiencia digital clara, editorial y preparada para crecer con fotografías y fichas oficiales.</p></div></section>
    <section className="page-cta"><div><Eyebrow dark>Visita el showroom</Eyebrow><h2>Conoce las texturas<br/><em>de primera mano.</em></h2></div><ButtonLink to="/contacto" variant="light">Ubicación y contacto</ButtonLink></section>
  </main>
}

const maintenanceSections = [
  {number:'01',title:'Limpieza diaria',text:'Para el cuidado cotidiano, Ferratta recomienda barrer o aspirar. Evita aspiradoras con cepillos barredores que puedan rayar o dañar la superficie.'},
  {number:'02',title:'Limpieza semanal / quincenal',text:'La página recomienda Du Chateau Parquet Cleaner: diluir 100 ml de concentrado en 10 litros de agua tibia. Colocar la mezcla en un atomizador y limpiar con un mop de toalla húmedo, nunca empapado.'},
  {number:'03',title:'Mantenimiento anual y acondicionamiento',text:'Según las condiciones ambientales y el tráfico, se recomienda aplicar aceite de mantenimiento Du Chateau para hidratar y acondicionar el piso. En climas secos o áreas de alto tráfico puede requerirse una frecuencia mayor.'},
]

export function MaintenancePage({ onQuote }) {
  return <main className="page-main">
    <section className="service-hero service-hero-maintenance"><div><Breadcrumbs items={[{label:'Mantenimiento'}]}/><Eyebrow>Cuidado de la madera</Eyebrow><h1>El tiempo también<br/><em>puede ser bello.</em></h1><p>Recomendaciones publicadas por Ferratta para conservar los pisos de madera Du Chateau en buenas condiciones.</p></div><ImagePanel src="/images/ferratta-dining.webp" alt="Piso de madera oscura" label="Mantenimiento Du Chateau" number="01"/></section>
    <section className="section-wrap maintenance-list"><SectionHeading eyebrow="Guía de mantenimiento" title={<>Cuidado en cada<br/><em>etapa del año.</em></>} text="Sigue las recomendaciones de limpieza y acondicionamiento indicadas en el sitio actual. Consulta al equipo antes de usar productos distintos."/>{maintenanceSections.map((item)=><Reveal className="maintenance-row" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><Icon name="plus"/></Reveal>)}<div className="maintenance-disclaimer"><strong>Importante</strong><p>Verifica siempre las instrucciones del fabricante y la compatibilidad del producto de limpieza con el acabado instalado. Esta sección reproduce y organiza la guía pública; no sustituye la ficha técnica de mantenimiento del fabricante.</p></div></section>
    <section className="page-cta"><div><Eyebrow dark>Asesoría de cuidado</Eyebrow><h2>¿Necesitas cuidar<br/><em>tu piso?</em></h2></div><button className="button button-light" onClick={()=>onQuote('Mantenimiento Du Chateau')}>Contactar a Ferratta <Icon name="diagonal" size={14}/></button></section>
  </main>
}

export function ServicePage({ onQuote }) {
  const { slug } = useParams()
  const floors = slug === 'instalacion-pisos'
  const title = floors ? 'Instalación de pisos' : 'Instalación de cortinas y persianas'
  const intro = floors ? 'Instalación de pisos de madera y laminados.' : 'Instalación de cortinas y persianas, con opciones manuales o motorizadas según la colección.'
  return <main className="page-main">
    <section className="service-hero"><div><Breadcrumbs items={[{label:'Servicios',to:'/proyectos'},{label:title}]}/><Eyebrow>Servicios Ferratta</Eyebrow><h1>{floors?<>La instalación<br/><em>también es diseño.</em></>:<>La luz encuentra<br/><em>su medida.</em></>}</h1><p>{intro}</p><button className="button button-dark" onClick={()=>onQuote(title)}>Solicitar asesoría <Icon name="diagonal" size={14}/></button></div><ImagePanel src={floors?'/images/ferratta-hero.webp':null} alt="Referencia de instalación" label="Imagen de servicio por integrar" number="01"/></section>
    <section className="section-wrap service-content"><div><Eyebrow>El servicio</Eyebrow><h2>Un buen resultado<br/><em>se planea desde el inicio.</em></h2></div><div><p>Esta página organiza la información de instalación que Ferratta publica en su sitio y deja preparada una sección para explicar el alcance, cobertura, proceso, garantías y tiempos una vez validados por el equipo.</p><div className="service-steps"><div><span>01</span><strong>Asesoría</strong><small>Definir el tipo de producto y el espacio.</small></div><div><span>02</span><strong>Medición</strong><small>Integrar medidas y condiciones del proyecto.</small></div><div><span>03</span><strong>Propuesta</strong><small>Confirmar material, acabados y alcance.</small></div><div><span>04</span><strong>Instalación</strong><small>Agregar proceso y condiciones oficiales.</small></div></div><p className="small-note">Los pasos son una estructura editorial sugerida para la nueva web; los tiempos, garantías y cobertura deben confirmarse con Ferratta.</p><button className="button button-dark" onClick={()=>onQuote(title)}>Cotizar instalación <Icon name="diagonal" size={14}/></button></div></section>
    <section className="page-cta"><div><Eyebrow dark>Hablemos de tu espacio</Eyebrow><h2>Cuéntanos qué<br/><em>quieres transformar.</em></h2></div><button className="button button-light" onClick={()=>onQuote(title)}>Solicitar cotización <Icon name="diagonal" size={14}/></button></section>
  </main>
}

export function ProjectsPage({ onQuote }) {
  const tiles = [
    {name:'Residencial',type:'Sala · Comedor · Recámara',src:'/images/ferratta-hero.webp'},
    {name:'Comercial',type:'Oficinas · Retail · Hospitalidad'},
    {name:'Materialidad',type:'Detalle · Textura · Acabados',src:'/images/ferratta-dining.webp'},
    {name:'Control de luz',type:'Cortinas · Persianas'},
  ]
  return <main className="page-main">
    <section className="projects-hero"><div><Breadcrumbs items={[{label:'Proyectos'}]}/><Eyebrow>Archivo de inspiración</Eyebrow><h1>Los materiales<br/><em>en contexto.</em></h1><p>Una galería preparada para mostrar los acabados Ferratta aplicados a espacios residenciales y comerciales.</p></div><span>F / 01—04</span></section>
    <section className="section-wrap project-gallery">{tiles.map((tile,index)=><Reveal className={`project-gallery-item project-gallery-item-${index+1}`} key={tile.name} delay={index*.04}><Link to="/contacto">{tile.src?<ImagePanel src={tile.src} alt={tile.name} label={tile.type} number={`0${index+1}`}/>:<EmptyMedia title={tile.name} subtitle="Fotografía de proyecto por integrar"/>}<div className="project-gallery-caption"><div><span>{tile.type}</span><h3>{tile.name}</h3></div><Icon name="diagonal"/></div></Link></Reveal>)}</section>
    <section className="project-note section-wrap"><Eyebrow>Contenido listo para carga</Eyebrow><h2>Un archivo visual<br/><em>que cuenta historias.</em></h2><p>Los espacios vacíos de la galería son intencionales: permiten incorporar fotografías reales, nombre de proyecto, ubicación autorizada, materiales utilizados y créditos de fotografía sin cambiar la estructura del sitio.</p><button className="button button-dark" onClick={onQuote}>Solicitar una asesoría <Icon name="diagonal" size={14}/></button></section>
  </main>
}

export function ContactPage({ onQuote }) {
  return <main className="page-main">
    <section className="contact-hero"><div><Breadcrumbs items={[{label:'Contacto'}]}/><Eyebrow>Showroom · Ciudad de México</Eyebrow><h1>Hagamos espacio<br/><em>para nuevas ideas.</em></h1><p>Visita nuestro showroom o comparte los detalles de tu proyecto para recibir atención personalizada.</p><button className="button button-dark" onClick={()=>onQuote()}>Solicitar cotización <Icon name="diagonal" size={14}/></button></div><ImagePanel src="/images/ferratta-hero.webp" alt="Interior contemporáneo" label="FERRATTA WOOD HOUSE" number="ROMA SUR"/></section>
    <section className="section-wrap contact-grid"><div className="contact-info"><Eyebrow>Visítanos</Eyebrow><h2>Showroom<br/><em>Roma Sur.</em></h2><div className="contact-item"><Icon name="pin"/><div><span>Dirección</span><p>{contact.address}</p><a href={contact.map} target="_blank" rel="noreferrer">Cómo llegar <Icon name="diagonal" size={13}/></a></div></div><div className="contact-item"><Icon name="clock"/><div><span>Horario de atención</span><p>{contact.hours}</p></div></div><div className="contact-item"><Icon name="phone"/><div><span>Teléfonos</span>{contact.phones.map((phone)=><a className="phone-line" href={`tel:${phone.replaceAll(' ','')}`} key={phone}>{phone}</a>)}</div></div><div className="contact-item"><Icon name="mail"/><div><span>WhatsApp</span><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">Iniciar conversación <Icon name="diagonal" size={13}/></a></div></div></div><div className="map-panel"><div className="map-placeholder"><span className="map-grid"/><span className="map-pin"><Icon name="pin" size={28}/></span><div><strong>FERRATTA</strong><small>CAMPECHE 30 · ROMA SUR</small></div></div><a href={contact.map} target="_blank" rel="noreferrer" className="map-open">Abrir ubicación en Google Maps <Icon name="external" size={14}/></a></div></section>
    <section className="contact-bottom"><Eyebrow dark>Atención a proyectos</Eyebrow><h2>El siguiente paso<br/><em>empieza aquí.</em></h2><button className="button button-light" onClick={()=>onQuote()}>Enviar solicitud <Icon name="diagonal" size={14}/></button></section>
  </main>
}

export function PrivacyPage() {
  return <main className="page-main section-wrap privacy-page"><Breadcrumbs items={[{label:'Aviso de privacidad'}]}/><Eyebrow>Información legal</Eyebrow><h1>Aviso de<br/><em>privacidad.</em></h1><div className="privacy-placeholder"><strong>Documento legal pendiente de validación.</strong><p>El sitio actual incluye un enlace a su política de privacidad. Para evitar publicar un texto legal incompleto o incorrecto, esta sección queda estructurada para incorporar el aviso autorizado por FERRATTA WOOD HOUSE, incluyendo responsable del tratamiento, datos recabados, finalidades, transferencias, medios para ejercer derechos ARCO y datos de contacto.</p><p>Antes de publicar el nuevo sitio, sustituir este texto por la versión vigente revisada por el responsable legal de la empresa.</p></div><Link to="/contacto" className="text-link">Volver a contacto <Icon name="arrow" size={14}/></Link></main>
}

export function NotFoundPage() {
  return <main className="section-wrap not-found"><Eyebrow>404 / Página no encontrada</Eyebrow><h1>Esta página<br/><em>no existe todavía.</em></h1><p>Regresa al inicio y explora el catálogo completo.</p><ButtonLink to="/" variant="dark">Volver al inicio</ButtonLink></main>
}
