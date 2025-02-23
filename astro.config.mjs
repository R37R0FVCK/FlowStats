// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import db from '@astrojs/db';

export default defineConfig({
  integrations: [
    react(),
    db()
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  db: {
    connectionString: 'mysql://root@localhost:3306/musica2'
  }
});