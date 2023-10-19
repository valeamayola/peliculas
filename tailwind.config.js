module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk", "night", "valentine"],
    darkTheme: "dark", 
    base: true, 
    styled: true, 
    utils: true,
    rtl: false, 
    prefix: "", 
    logs: true, 
  },
};

import 'tailwindcss/tailwind.css'
