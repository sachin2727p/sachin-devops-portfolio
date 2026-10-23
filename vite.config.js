import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project-site URL uses /portfolio-website/.
// Update this path if you use a different repository name.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',
});
