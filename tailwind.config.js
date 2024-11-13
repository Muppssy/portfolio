/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins:['Poppins', 'serif'],
        raleway:['Raleway', 'serif'],
        roboto:['Roboto Slab', 'serif'],
        rakkas:['Rakkas', 'sans-serif'],
        zendots:['Zen Dots', 'sans-serif'],
        oxanium:['Oxanium', 'sans-serif']
        
      }
    },
  },
  plugins: [],
};