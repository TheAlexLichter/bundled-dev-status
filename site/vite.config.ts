import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // `results/` lives in the repo root, outside this app, so the dev server
  // must be allowed to serve it.
  server: { fs: { allow: [fileURLToPath(new URL('..', import.meta.url))] } },
  build: {
    rolldownOptions: {
      // Bundled dev only calls plugins' `hotUpdate` hook with this on. Without it,
      // a run file added to results/runs/ never reaches `import.meta.glob`.
      // `vite build` rejects any `devMode` option, so set it only when serving.
      experimental: command === 'serve' ? { devMode: { hotUpdate: true } } : {},
    },
  },
}))
