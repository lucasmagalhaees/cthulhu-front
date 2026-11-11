import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Was create-react-app (abandoned). The build still goes to build/, so the Dockerfile and Vercel keep working, and the
// .env.stage / .env.prod files keep their REACT_APP_ names (`--mode stage` / `--mode prod` load them).
export default defineConfig({
  plugins: [react()],
  envPrefix: ['VITE_', 'REACT_APP_'],
  build: { outDir: 'build' },
  server: { port: 3000 },
});
