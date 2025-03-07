/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors:{
        "primary" : "#9338eb",
        "secondary" : "#f9a8d4",
        "accent" : "#f3f3f3"
        
      }
    },
  },
  plugins: [],
}

