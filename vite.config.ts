import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-env-vars',
      transformIndexHtml: {
        enforce: 'pre',
        transform(html, ctx) {
          return html.replace(/%VITE_(\w+)%/g, (match, key) => {
            const envVar = `VITE_${key}`;
            return process.env[envVar] || match;
          });
        },
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
