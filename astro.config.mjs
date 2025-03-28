// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';


import tailwindcss from '@tailwindcss/vite';


import db from '@astrojs/db';


export default defineConfig({
  integrations: [react(), db()],

  vite: {
    plugins: [tailwindcss()],
  },
  //Importante para que funciona la inserccion 
  // y otras operaciones de astro-db
  output: "server",
});