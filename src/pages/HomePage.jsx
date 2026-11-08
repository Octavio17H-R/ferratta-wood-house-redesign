import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories, collections, brandCopy, contact } from '../data/catalog.js'
import { Eyebrow, Reveal, ArrowLink, ButtonLink, SectionHeading, ImagePanel, EmptyMedia } from '../components/UI.jsx'
import Icon from '../components/Icon.jsx'
import { assetUrl } from '../utils/assets.js'

const featured = ['du-chateau','dabo-patterns','spc-futura','cortinas-duo'].map((slug)=>collections.find((item)=>item.slug===slug)).filter(Boolean)

export default function HomePage({ onQuote }) {
  return <main>
    <section className="home-hero relative w-full overflow-hidden">
      <img className="home-hero-image" src={assetUrl('/images/ferratta-hero.webp')} alt="Interior residencial contemporáneo con piso de madera natural"/>
      <div className="home-hero-shade"/>
      <div className="home-hero-top"><span>FERRATTA WOOD HOUSE</span><span>ACABADOS · SUPERFICIES · TEXTILES</span></div>
      <div className="home-hero-copy">
        <Eyebrow dark>Materiales que definen espacios</Eyebrow>
        <h1>El inicio de<br/>un espacio <em>extraordinario.</em></h1>
        <p>{brandCopy.statement}</p>
        <div className="hero-actions"><ButtonLink to="/catalogo" variant="light">Explorar colecciones</ButtonLink><button className="text-link text-link-light" onClick={onQuote}>Solicitar asesoría <Icon name="arrow" size={16}/></button></div>
      </div>
      <div className="hero-index"><span>01</span><i/><span>04</span><small>ROMA SUR · CIUDAD DE MÉXICO</small></div>
      <div className="hero-caption"><span>01 / MATERIALIDAD</span><span>Encino europeo · Texturas naturales</span></div>
    </section>

    <section className="intro-section section-wrap mx-auto">
      <Reveal className="intro-aside"><Eyebrow>La esencia Ferratta</Eyebrow><span className="intro-serial">01 — 04</span></Reveal>
      <Reveal className="intro-main" delay={.08}><h2>Honramos la materia.<br/><em>Respetamos la arquitectura.</em></h2><p>{brandCopy.philosophy} Creemos en materiales que combinan calidad, precisión y elegancia duradera.</p><ArrowLink to="/nosotros">Conoce Ferratta</ArrowLink></Reveal>
      <Reveal className="intro-image" delay={.16}><ImagePanel src={assetUrl('/images/ferratta-dining.webp')} alt="Comedor con piso de madera en patrón espiga" label="Materialidad con intención" number="02 / 04"/></Reveal>
    </section>

    <section className="catalog-home section-wrap mx-auto section-dark">
      <div className="catalog-home-heading"><SectionHeading eyebrow="El catálogo" title={<>Materiales para<br/><em>vivir el espacio.</em></>} text="Explora las familias de superficies y soluciones de interiorismo que forman parte del universo Ferratta." dark/><ArrowLink to="/catalogo" dark>Ver catálogo completo</ArrowLink></div>
      <div className="category-showcase">
        {categories.filter((item)=>!item.pending).map((category,index)=><Reveal className={`category-tile category-tile-${index+1}`} key={category.slug} delay={index*.05}><Link to={`/categoria/${category.slug}`} className="category-tile-link"><div className="category-tile-media">{category.image ? <img src={assetUrl(category.image)} alt="" loading="lazy"/> : <EmptyMedia title={category.title}/>}<span className="tile-number">0{index+1}</span><span className="tile-arrow"><Icon name="diagonal" size={17}/></span></div><div className="category-tile-meta"><div><span>{category.eyebrow}</span><h3>{category.title}</h3></div><small>{category.countLabel}</small></div></Link></Reveal>)}
      </div>
    </section>

    <section className="brand-section section-wrap mx-auto">
      <div className="brand-heading"><Reveal><Eyebrow>Marcas y manufactura</Eyebrow><h2>Una selección.<br/><em>Tres lenguajes de madera.</em></h2></Reveal><Reveal delay={.1}><p>Distintas formas de interpretar la veta, la textura y la presencia natural de la madera. Descubre las colecciones de Du Chateau, Vista Wood y Dabo.</p><ArrowLink to="/categoria/madera">Explorar pisos de madera</ArrowLink></Reveal></div>
      <div className="brand-grid">
        <Reveal className="brand-card brand-card-large"><ImagePanel src={assetUrl('/images/ferratta-hero.webp')} alt="Piso de madera natural en interior de lujo" label="Madera · Encino europeo" number="01"/><div className="brand-card-copy"><span>01 / MARCA</span><h3>Du Chateau</h3><p>Textura, carácter y acabados al aceite.</p><Link to="/colecciones/du-chateau">Descubrir colección <Icon name="arrow" size={14}/></Link></div></Reveal>
        <Reveal className="brand-card" delay={.07}><ImagePanel src={assetUrl('/images/ferratta-dining.webp')} alt="Piso de madera oscura en patrón espiga" label="Madera · Diseño contemporáneo" number="02"/><div className="brand-card-copy"><span>02 / MARCA</span><h3>Vista Wood</h3><p>Vetas naturales y tonalidades auténticas.</p><Link to="/colecciones/vista-basicos">Descubrir colección <Icon name="arrow" size={14}/></Link></div></Reveal>
        <Reveal className="brand-card brand-card-offset" delay={.12}><EmptyMedia title="Dabo Patterns" subtitle="Imagen de colección por integrar"/><div className="brand-card-copy"><span>03 / MARCA</span><h3>Dabo</h3><p>Geometría y expresión arquitectónica.</p><Link to="/colecciones/dabo-patterns">Descubrir colección <Icon name="arrow" size={14}/></Link></div></Reveal>
      </div>
    </section>

    <section className="selected-section section-wrap">
      <div className="selected-heading"><SectionHeading eyebrow="Selección Ferratta" title={<>Colecciones que merecen<br/><em>una segunda mirada.</em></>} text="Una muestra de líneas del catálogo. Cada ficha puede ampliarse con fotografía, tonos, muestras y documentos técnicos."/><ArrowLink to="/catalogo">Ver todas las colecciones</ArrowLink></div>
      <div className="selected-grid">{featured.map((collection,index)=><Reveal className="selected-card" key={collection.slug} delay={index*.06}><Link to={`/colecciones/${collection.slug}`}><div className={`selected-image selected-image-${index+1}`}><div className="swatch-texture"/><span>0{index+1}</span><Icon name="diagonal" size={18}/></div><div className="selected-card-copy"><span>{collection.brand} · {categories.find((x)=>x.slug===collection.category)?.title}</span><h3>{collection.name}</h3><p>{collection.description}</p></div></Link></Reveal>)}</div>
    </section>

    <section className="manifesto-section">
      <div className="manifesto-photo"><img src={assetUrl('/images/ferratta-dining.webp')} alt="Detalle de piso de madera en interior arquitectónico" loading="lazy"/></div><div className="manifesto-panel"><Eyebrow dark>La calidad se demuestra</Eyebrow><h2>Belleza.<br/>Durabilidad.<br/><em>Desempeño.</em></h2><p>Un espacio bien concebido se siente y se vive en cada detalle.</p><ButtonLink to="/proyectos" variant="outline-light">Ver inspiración</ButtonLink><span className="manifesto-mark">F.</span></div>
    </section>

    <section className="services-section section-wrap">
      <div className="services-heading"><SectionHeading eyebrow="Acompañamiento especializado" title={<>Del material a la<br/><em>instalación final.</em></>} text="Ferratta integra productos y servicios para acompañar decisiones de acabado en espacios residenciales y comerciales."/><button className="text-link" onClick={onQuote}>Conversa con un asesor <Icon name="arrow" size={16}/></button></div>
      <div className="service-list">
        <Link to="/servicios/instalacion-pisos"><span>01</span><div><h3>Instalación de pisos de madera y laminados</h3><p>Asesoría y colocación para que el acabado dialogue con el proyecto.</p></div><Icon name="diagonal"/></Link>
        <Link to="/servicios/instalacion-cortinas"><span>02</span><div><h3>Instalación de cortinas y persianas</h3><p>Sistemas manuales y motorizados, textiles y control de luz.</p></div><Icon name="diagonal"/></Link>
        <Link to="/mantenimiento"><span>03</span><div><h3>Mantenimiento de pisos Du Chateau</h3><p>Cuidados cotidianos y acondicionamiento periódico de la madera.</p></div><Icon name="diagonal"/></Link>
      </div>
    </section>

    <section className="project-teaser section-wrap">
      <div className="project-teaser-copy"><Eyebrow>Inspiración y proyectos</Eyebrow><h2>Los materiales<br/><em>en contexto.</em></h2><p>Un espacio editorial para mostrar aplicaciones residenciales y comerciales, combinaciones de materiales y detalles de instalación.</p><ArrowLink to="/proyectos">Explorar proyectos</ArrowLink></div>
      <div className="project-teaser-grid"><ImagePanel src={assetUrl('/images/ferratta-hero.webp')} alt="Sala residencial con piso de madera" label="Residencial" number="01"/><EmptyMedia title="Espacios comerciales" subtitle="Fotografía de proyecto por integrar"/><ImagePanel src={assetUrl('/images/ferratta-dining.webp')} alt="Comedor con madera oscura" label="Interiorismo" number="03"/></div>
    </section>

    <section className="showroom-band"><div><Eyebrow dark>Visítanos</Eyebrow><h2>Una textura se entiende<br/><em>mejor de cerca.</em></h2><p>Conoce el showroom Ferratta en Roma Sur y explora materiales, tonos y acabados.</p></div><div className="showroom-detail"><span><Icon name="pin"/> {contact.address}</span><span><Icon name="clock"/> {contact.hours}</span><ButtonLink to="/contacto" variant="light">Visitar showroom <Icon name="diagonal" size={15}/></ButtonLink></div></section>
  </main>
}
