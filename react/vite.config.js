import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Make sure the `public` folder is being served
    server: {
      static: {
        directory: path.join(__dirname, 'public')
      }
    }
  }
});