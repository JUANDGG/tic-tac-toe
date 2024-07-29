import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'url';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styleSheets': path.resolve(fileURLToPath(new URL('./src/assets/stylesheets', import.meta.url))),
      '@components':path.resolve(fileURLToPath(new URL('./src/components', import.meta.url))),
      '@customHooks':path.resolve(fileURLToPath(new URL('./src/hooks', import.meta.url))),
      '@scripts':path.resolve(fileURLToPath(new URL('./src/assets/js', import.meta.url)))
    },
  },
})
