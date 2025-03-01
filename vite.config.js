import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(),
    react()
  ],
  server: {
    host: '0.0.0.0', // อนุญาตให้เข้าถึงจากทุกที่
    allowedHosts: [
      '6486-2403-6200-8847-17ef-994-b5c7-723b-1712.ngrok-free.app' // เพิ่มโดเมนของ ngrok
    ]
  }
})
