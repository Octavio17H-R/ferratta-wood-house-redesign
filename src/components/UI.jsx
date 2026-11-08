import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Icon from './Icon.jsx'
import { assetUrl } from '../utils/assets.js'

export function Eyebrow({ children, dark = false, className = '' }) {
  return <div className={`eyebrow flex items-center gap-3 ${dark ? 'eyebrow-light' : ''} ${className}`}><span />{children}</div>
}

export function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const reduce = useReducedMotion()
  const Component = motion[as] || motion.div
  return <Component className={`max-w-full ${className}`} initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</Component>
}

export function ArrowLink({ to, children, dark = false, className = '' }) {
  return <Link to={to} className={`arrow-link inline-flex items-center ${dark ? 'arrow-link-dark' : ''} ${className}`}>{children}<span><Icon name="diagonal" size={15}/></span></Link>
}

export function ButtonLink({ to, children, variant = 'dark', onClick, type = 'button', className = '' }) {
  const classes = `button inline-flex items-center justify-center transition-colors duration-300 button-${variant} ${className}`
  if (to) return <Link to={to} className={classes}>{children}<Icon name="diagonal" size={15}/></Link>
  return <button type={type} onClick={onClick} className={classes}>{children}<Icon name="diagonal" size={15}/></button>
}

export function SectionHeading({ eyebrow, title, text, align = 'left', dark = false }) {
  return <div className={`section-heading ${align === 'center' ? 'section-heading-center' : ''} ${dark ? 'section-heading-dark' : ''}`}>
    {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}

export function ImagePanel({ src, alt = '', className = '', label, number, tone = 'wood' }) {
  return <div className={`image-panel relative w-full overflow-hidden tone-${tone} ${className}`}>
    {src ? <img src={assetUrl(src)} alt={alt} loading="lazy"/> : <div className="image-placeholder-grain"/>}
    <div className="image-panel-grain"/>
    {(label || number) && <div className="image-panel-caption"><span>{label}</span><small>{number}</small></div>}
  </div>
}

export function Breadcrumbs({ items = [] }) {
  return <nav className="breadcrumbs flex flex-wrap items-center" aria-label="Ruta de navegación">
    <Link to="/">Inicio</Link>
    {items.map((item, i) => <React.Fragment key={`${item.label}-${i}`}><span>/</span>{item.to ? <Link to={item.to}>{item.label}</Link> : <span className="current">{item.label}</span>}</React.Fragment>)}
  </nav>
}

export function EmptyMedia({ title = 'Fotografía por integrar', subtitle = 'Área reservada para imagen oficial', ratio = 'portrait' }) {
  return <div className={`empty-media relative w-full overflow-hidden ${ratio}`}><div className="empty-media-lines"/><div className="empty-media-copy"><span>{subtitle}</span><strong>{title}</strong></div><span className="empty-media-plus">+</span></div>
}
