import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Concept 1 - Minimal & Sophisticated
        concept1: resolve(__dirname, 'concept-1.html'),
        concept1Vantablack: resolve(__dirname, 'concept-1-vantablack.html'),
        // Concept 2 - Cartoony & Playful
        concept2: resolve(__dirname, 'concept-2.html'),
        concept2Unicorn: resolve(__dirname, 'concept-2-unicorn.html'),
        // Concept 5 - Hyper-Technical (Factory)
        concept5: resolve(__dirname, 'concept-5.html'),
        concept5Linearflow: resolve(__dirname, 'concept-5-linearflow.html'),
        concept5Notiondocs: resolve(__dirname, 'concept-5-notiondocs.html'),
        concept5Slackhub: resolve(__dirname, 'concept-5-slackhub.html'),
        // Concept 6 - Neo-Pop
        concept6: resolve(__dirname, 'concept-6.html'),
        concept6Retro: resolve(__dirname, 'concept-6-retro.html'),
      },
    },
  },
});
