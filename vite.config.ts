import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core libraries
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          
          // Three.js - separate chunk (it's huge ~600KB)
          if (id.includes('node_modules/three')) {
            return 'three-vendor';
          }
          
          // TanStack Router
          if (id.includes('@tanstack/react-router')) {
            return 'router';
          }
          
          // UI libraries (lucide icons, radix-ui)
          if (id.includes('lucide-react') || id.includes('@radix-ui')) {
            return 'ui-vendor';
          }
          
          // PocketBase
          if (id.includes('pocketbase')) {
            return 'pocketbase-vendor';
          }
          
          // State management (zustand)
          if (id.includes('zustand')) {
            return 'state-vendor';
          }
          
          // Split each route into its own chunk
          if (id.includes('src/routes/')) {
            const routeName = id.split('src/routes/')[1].split('.')[0];
            return `route-${routeName}`;
          }
          
          // Split home components separately (they contain heavy WireframeGlobe)
          if (id.includes('src/components/home/')) {
            return 'home-components';
          }
        },
      },
    },
    chunkSizeWarningLimit: 500,
    minify: 'esbuild',
    target: 'esnext',
    cssCodeSplit: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@tanstack/react-router', 'lucide-react'],
    exclude: ['three'], // Don't pre-bundle three.js
  },
})