import { theme, plugins } from 'configs/tailwind/config'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/web/src/**/*.{ts|astro}','./ui/*/src/**/*.{ts}'],
  theme,
  plugins,
}