import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/meu_primeiro_projeto_React',
  plugins: [react()],
})
