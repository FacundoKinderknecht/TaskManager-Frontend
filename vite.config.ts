import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  base: '/TaskManager-Frontend/',  //Esto es necesario para GitHub Pages
});
