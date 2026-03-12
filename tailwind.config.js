/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          500: "#3EB489", // Add your desired mint color here
        },
        primary: {
          DEFAULT: "#673DE6",
          hover: "#7c5cf0",
        },
        surface: "#24252d",
        page: "#24252d",
      },
    },
  },
  plugins: [],
};
