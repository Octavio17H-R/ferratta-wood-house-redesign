import React from 'react'
import { Link } from 'react-router-dom'
import { categories, contact, brandCopy } from '../data/catalog.js'
import Icon from './Icon.jsx'

export default function Footer({ onQuote }) {
  return <footer className="site-footer">
    <div className="footer-cta"><div><span className="micro-label">Hablemos de tu proyecto</span><h2>El espacio comienza<br/><em>con una buena elección.</em></h2></div><button className="button button-light" onClick={onQuote}>Solicitar asesoría <Icon name="diagonal" size={15}/></button></div>
    <div className="footer-main">
      <div className="footer-brand"><Link to="/" className="brand-mark brand-mark-light"><span className="brand-symbol">F<span>.</span></span><span className="brand-name">FERRATTA<small>WOOD HOUSE</small></span></Link><p>{brandCopy.philosophy}</p><div className="footer-social"><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a></div></div>
      <div className="footer-column"><span className="micro-label">Catálogo</span>{categories.filter((c)=>!c.pending).map((category)=><Link key={category.slug} to={`/categoria/${category.slug}`}>{category.title}</Link>)}<Link to="/catalogo">Ver todo el catálogo</Link></div>
      <div className="footer-column"><span className="micro-label">La marca</span><Link to="/nosotros">Nosotros</Link><Link to="/proyectos">Proyectos</Link><Link to="/servicios/instalacion-pisos">Instalación de pisos</Link><Link to="/servicios/instalacion-cortinas">Instalación de cortinas</Link><Link to="/mantenimiento">Mantenimiento</Link><Link to="/privacidad">Aviso de privacidad</Link></div>
      <div className="footer-column footer-contact"><span className="micro-label">Showroom</span><p>{contact.address}</p><p>{contact.hours}</p>{contact.phones.map((phone)=><a key={phone} href={`tel:${phone.replaceAll(' ','')}`}>{phone}</a>)}<Link to="/contacto" className="footer-map">Cómo llegar <Icon name="diagonal" size={13}/></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} FERRATTA WOOD HOUSE</span><span>Diseño, materia y arquitectura.</span><span>Propuesta de rediseño · Contenido editable</span></div>
  </footer>
}
