import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig(({ command }) => ({
  plugins: [
    tailwindcss(),
    react(),
    basicSsl()
  ],
  base: command === 'serve' ? '/' : '/testLanding/', // '/' ตอน dev, '/testLanding/' ตอน build
}))
