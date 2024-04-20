import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.localhost'],
    host: true
  },
  test: {
    environment: 'happy-dom'
  }
})