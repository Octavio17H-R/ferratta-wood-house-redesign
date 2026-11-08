import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Rutas con hash: funcionan en GitHub Pages y en otros hosting estáticos sin rewrite.
// Las variables CSS resuelven imágenes de fondo respetando el subdirectorio de Vite.
document.documentElement.style.setProperty('--ferratta-dining-bg', `url("${import.meta.env.BASE_URL}images/ferratta-dining.webp")`)
document.documentElement.style.setProperty('--ferratta-hero-bg', `url("${import.meta.env.BASE_URL}images/ferratta-hero.webp")`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
