import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { readFileSync } from 'fs';

export default defineConfig({
  plugins: [react()],
  base: '/vid/',
  server: {
    https: {
      key: readFileSync(path.resolve(__dirname, 'ssl/key.pem')),
      cert: readFileSync(path.resolve(__dirname, 'ssl/cert.pem')),
    },
    host: true
  }
})