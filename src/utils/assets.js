/**
 * Convierte rutas públicas absolutas (/images/...) en rutas compatibles
 * con el subdirectorio de despliegue configurado por Vite (GitHub Pages).
 * Las URLs externas se dejan intactas.
 */
export function assetUrl(path) {
  if (!path || typeof path !== 'string') return path
  if (/^(https?:)?\/\//i.test(path) || /^(data:|blob:|mailto:|tel:)/i.test(path) || path.startsWith('#')) {
    return path
  }
  const base = import.meta.env.BASE_URL
  if (base !== '/' && path.startsWith(base)) return path
  const cleanPath = path.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${cleanPath}`
}
