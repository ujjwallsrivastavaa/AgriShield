import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
   
      '/api': {
        target: 'https://agrishield.onrender.com', 
        changeOrigin: true,
        secure: true, 
      },
    },
  },
})
