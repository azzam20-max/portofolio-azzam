import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portofolio-azzam/', // tambahkan base sesuai nama repo
  plugins: [react()],
})
