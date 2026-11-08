import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories, collections, contact } from '../data/catalog.js'
import Icon from './Icon.jsx'

export default function QuoteModal({ open, onClose, preset = '' }) {
  const [form, setForm] = useState({ name:'', email:'', phone:'', interest:preset, message:'' })
  const [sent, setSent] = useState(false)
  useEffect(() => { if (open) { setForm((current) => ({ ...current, interest: preset })); setSent(false) } }, [open, preset])
  const update = (field, value) => setForm((current)=>({...current,[field]:value}))
  const submit = (e) => {
    e.preventDefault()
    const lines = [
      'Hola, me gustaría solicitar una cotización con FERRATTA WOOD HOUSE.',
      `Nombre: ${form.name}`,
      `Correo: ${form.email}`,
      `Teléfono: ${form.phone}`,
      `Interés: ${form.interest || 'Por definir'}`,
      `Proyecto: ${form.message || 'Solicito asesoría'}`,
    ]
    const url = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }
  return <AnimatePresence>
    {open && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={(e)=>e.target===e.currentTarget&&onClose()}>
      <motion.section className="quote-modal" initial={{opacity:0,y:24,scale:.985}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:18,scale:.985}} transition={{duration:.24}} role="dialog" aria-modal="true" aria-labelledby="quote-title">
        <button className="modal-close icon-button" onClick={onClose} aria-label="Cerrar"><Icon name="close"/></button>
        {!sent ? <>
          <span className="micro-label">Atención personalizada</span><h2 id="quote-title">Hablemos de<br/><em>tu proyecto.</em></h2><p>Comparte tus datos y el material que te interesa. Prepararemos un mensaje para que continúes la solicitud por WhatsApp.</p>
          <form onSubmit={submit} className="quote-form">
            <label>Nombre completo<input required value={form.name} onChange={(e)=>update('name',e.target.value)} placeholder="Tu nombre"/></label>
            <div className="form-two"><label>Correo electrónico<input type="email" required value={form.email} onChange={(e)=>update('email',e.target.value)} placeholder="nombre@correo.com"/></label><label>Teléfono<input required value={form.phone} onChange={(e)=>update('phone',e.target.value)} placeholder="55 0000 0000"/></label></div>
            <label>¿Qué te interesa?<select value={form.interest} onChange={(e)=>update('interest',e.target.value)}><option value="">Selecciona una opción</option>{categories.map((category)=><option key={category.slug}>{category.title}</option>)}{collections.map((collection)=><option key={collection.slug}>{collection.name}</option>)}</select></label>
            <label>Cuéntanos brevemente sobre tu proyecto<textarea rows="3" value={form.message} onChange={(e)=>update('message',e.target.value)} placeholder="Espacio, medidas aproximadas, estilo o dudas…"/></label>
            <button type="submit" className="button button-dark button-full">Continuar por WhatsApp <Icon name="diagonal" size={15}/></button>
            <small>Este formulario prepara un mensaje; no almacena datos en un servidor.</small>
          </form>
        </> : <div className="quote-success"><span className="success-mark"><Icon name="check" size={28}/></span><span className="micro-label">Mensaje preparado</span><h2>Gracias por<br/><em>considerar Ferratta.</em></h2><p>Se abrió WhatsApp con la información de tu proyecto. Confirma el envío desde esa aplicación.</p><button className="button button-dark" onClick={()=>{setSent(false);onClose()}}>Cerrar <Icon name="arrow" size={15}/></button></div>}
      </motion.section>
    </motion.div>}
  </AnimatePresence>
}
