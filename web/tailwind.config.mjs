import { theme, plugins } from 'configs/tailwind/config'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts|astro}', './node_modules/@ui/*/src/**/*.ts'],
  theme,
  plugins,
}
