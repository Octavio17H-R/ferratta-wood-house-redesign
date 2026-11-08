import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// En GitHub Actions toma automáticamente el nombre del repositorio.
// En desarrollo local y en repositorios de usuario (usuario.github.io) usa '/'.
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
const base = isGitHubActions && repositoryName && !repositoryName.endsWith('.github.io')
  ? `/${repositoryName}/`
  : '/'

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: 5173,
    strictPort: false,
  },
})
