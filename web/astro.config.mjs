import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

const publicDir = import.meta.env.DEV ? '../public/' : undefined
// https://astro.build/config
export default defineConfig({
  publicDir,
  integrations: [tailwind()],
})