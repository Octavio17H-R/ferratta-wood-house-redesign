import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { categories, mainNavigation, contact } from '../data/catalog.js'
import Icon from './Icon.jsx'

export default function Header({ onQuote }) {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const submitSearch = (event) => {
    event.preventDefault()
    const q = term.trim()
    if (q) navigate(`/buscar?q=${encodeURIComponent(q)}`)
    setSearchOpen(false)
    setMobileOpen(false)
  }

  const closeMenus = () => { setMegaOpen(false); setMobileOpen(false) }

  return <>
    <div className="topline"><span>Materiales que dan forma a espacios extraordinarios</span><div><span>Showroom · Roma Sur, CDMX</span><a href={`tel:${contact.phones[0].replaceAll(' ','')}`}>{contact.phones[0]}</a></div></div>
    <header className="site-header">
      <div className="header-inner flex w-full items-center justify-between">
        <Link className="brand-mark" to="/" onClick={closeMenus} aria-label="Ferratta Wood House, inicio"><span className="brand-symbol">F<span>.</span></span><span className="brand-name">FERRATTA<small>WOOD HOUSE</small></span></Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <button className={`nav-trigger ${megaOpen ? 'active' : ''}`} onClick={() => setMegaOpen(!megaOpen)} aria-expanded={megaOpen}>Pisos <Icon name="chevron" size={13}/></button>
          <NavLink to="/categoria/cortinas">Cortinas y persianas</NavLink>
          <NavLink to="/proyectos">Proyectos</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
        <div className="header-actions flex items-center">
          <button className="icon-button search-toggle" aria-label="Buscar" onClick={() => setSearchOpen(!searchOpen)}><Icon name="search" size={19}/></button>
          <button className="button button-dark header-quote" onClick={onQuote}>Solicitar cotización <Icon name="diagonal" size={14}/></button>
          <button className="icon-button mobile-toggle" aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMobileOpen(!mobileOpen)}><Icon name={mobileOpen ? 'close' : 'menu'} size={22}/></button>
        </div>
      </div>
      <AnimatePresence>
        {megaOpen && <motion.div className="mega-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .2 }}>
          <div className="mega-intro"><span className="micro-label">Explora por material</span><h3>Encuentra la superficie que define tu espacio.</h3><Link to="/catalogo" onClick={closeMenus}>Ver catálogo completo <Icon name="diagonal" size={14}/></Link></div>
          {mainNavigation[0].groups.map((group) => <div className="mega-group" key={group.title}><span className="micro-label">{group.title}</span>{group.items.map((item) => <Link key={item.label} to={item.to} onClick={closeMenus}>{item.label}<Icon name="arrow" size={13}/></Link>)}</div>)}
          <div className="mega-side-image"><span>01 / 03</span><strong>La materia<br/>en su mejor forma.</strong></div>
        </motion.div>}
      </AnimatePresence>
      <AnimatePresence>
        {searchOpen && <motion.form className="search-panel" onSubmit={submitSearch} initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}>
          <Icon name="search" size={19}/><input autoFocus value={term} onChange={(e)=>setTerm(e.target.value)} placeholder="Busca madera, SPC, Duo, Nogales…" aria-label="Buscar en el catálogo"/><button type="submit">Buscar <Icon name="arrow" size={15}/></button>
        </motion.form>}
      </AnimatePresence>
      <AnimatePresence>
        {mobileOpen && <motion.div className="mobile-nav" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}}>
          <Link to="/catalogo" onClick={closeMenus}>Catálogo completo</Link>
          {categories.filter((c)=>!c.pending).map((category)=><Link key={category.slug} to={`/categoria/${category.slug}`} onClick={closeMenus}>{category.title}</Link>)}
          <Link to="/proyectos" onClick={closeMenus}>Proyectos</Link><Link to="/servicios/instalacion-pisos" onClick={closeMenus}>Instalación</Link><Link to="/mantenimiento" onClick={closeMenus}>Mantenimiento</Link><Link to="/nosotros" onClick={closeMenus}>Nosotros</Link><Link to="/contacto" onClick={closeMenus}>Contacto</Link>
          <button className="button button-dark" onClick={()=>{closeMenus();onQuote()}}>Solicitar cotización <Icon name="diagonal" size={14}/></button>
        </motion.div>}
      </AnimatePresence>
    </header>
  </>
}
