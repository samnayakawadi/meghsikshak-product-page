// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        assetFileNames: ({ name }) => {
          if (name) {
            if (/\.(png|jpe?g)$/i.test(name)) {
              return 'meghsikshak/assets/images/[name].[hash][extname]';
            }
            if (/\.(woff2?|ttf)$/i.test(name)) {
              return 'meghsikshak/assets/fonts/[name].[hash][extname]';
            }
            if (name && name.endsWith('.css')) {
              return 'meghsikshak/css/[name].[hash][extname]';
            }
          }
          return 'meghsikshak/assets/[name].[hash][extname]'; // Default for other assets
        },
        chunkFileNames: 'meghsikshak/js/[name].[hash].js', // Dynamic imports
        entryFileNames: 'meghsikshak/js/[name].[hash].js', // Main entry
      },
    }
  },
  esbuild: {
    loader: 'jsx',
    include: [
      // Add the following file extensions
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
    ],
    exclude: [],
  }
})  