import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import QuoteModal from './components/QuoteModal.jsx'
import HomePage from './pages/HomePage.jsx'
import { CatalogPage, CategoryPage, CollectionPage, ProductPage, SearchPage } from './pages/CatalogPages.jsx'
import { AboutPage, MaintenancePage, ServicePage, ProjectsPage, ContactPage, PrivacyPage, NotFoundPage } from './pages/InfoPages.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [quotePreset, setQuotePreset] = useState('')
  const openQuote = (preset = '') => { setQuotePreset(preset); setQuoteOpen(true) }
  const closeQuote = () => setQuoteOpen(false)
  return <>
    <ScrollToTop/>
    <Header onQuote={()=>openQuote()}/>
    <Routes>
      <Route path="/" element={<HomePage onQuote={openQuote}/>}/>
      <Route path="/catalogo" element={<CatalogPage onQuote={openQuote}/>}/>
      <Route path="/categoria/:slug" element={<CategoryPage onQuote={openQuote}/>}/>
      <Route path="/colecciones/:slug" element={<CollectionPage onQuote={openQuote}/>}/>
      <Route path="/productos/:slug" element={<ProductPage onQuote={openQuote}/>}/>
      <Route path="/buscar" element={<SearchPage/>}/>
      <Route path="/nosotros" element={<AboutPage onQuote={openQuote}/>}/>
      <Route path="/proyectos" element={<ProjectsPage onQuote={openQuote}/>}/>
      <Route path="/mantenimiento" element={<MaintenancePage onQuote={openQuote}/>}/>
      <Route path="/servicios/:slug" element={<ServicePage onQuote={openQuote}/>}/>
      <Route path="/contacto" element={<ContactPage onQuote={openQuote}/>}/>
      <Route path="/privacidad" element={<PrivacyPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    <Footer onQuote={()=>openQuote()}/>
    <QuoteModal open={quoteOpen} onClose={closeQuote} preset={quotePreset}/>
  </>
}
