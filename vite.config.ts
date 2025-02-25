import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/TaskManager-Frontend/", // Asegúrate de que esto es correcto
});
