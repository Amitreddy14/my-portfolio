// Prefix public assets with Vite's base URL so they resolve correctly on GitHub Pages
const BASE = import.meta.env.BASE_URL
export const asset = (path) => `${BASE}${path.replace(/^\//, '')}`
