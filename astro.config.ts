// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import db from '@astrojs/db';

import clerk from "@clerk/astro";

import { dark } from '@clerk/themes'

import { esMX } from '@clerk/localizations'

// https://astro.build/config
export default defineConfig({
  
  vite: {
    plugins: [tailwindcss()]
    
  },
  adapter: vercel(),
  output: "server",
  integrations: [db(),
    clerk({
      localization: esMX,
      appearance: {
        baseTheme: [dark],
        variables: {
          colorBackground: 'white'
        }
      },
    }),
  ]

});                                           