import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite a Vercel acceder al servidor
    port: 4173, // Puerto estándar de Vite
    strictPort: true,
  },
});
