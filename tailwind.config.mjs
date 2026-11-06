/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10233f',
        ocean: '#164f68',
        leaf: '#13815c',
        sun: '#f19a36',
        mist: '#f4f7f6',
      },
      boxShadow: { card: '0 18px 55px rgba(16, 35, 63, .09)' },
      fontFamily: { sans: ['Inter', 'Arial', 'sans-serif'] },
    },
  },
  plugins: [],
};
