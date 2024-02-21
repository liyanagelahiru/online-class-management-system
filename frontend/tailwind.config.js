/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            OpenSans: ['Open Sans', 'sans-serif'],
            GemunuLibre: ['Gemunu Libre', 'sans-serif'],
            Montserrat: ['Montserrat', 'sans-serif']
         }
      }
   },
   plugins: [daisyui],
   daisyui: {
      themes: ['light', 'dark'],
      darkTheme: 'light'
   }
};
