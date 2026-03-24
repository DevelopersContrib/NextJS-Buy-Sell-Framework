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
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      colors: {
        mint: {
          500: "#3EB489", // Add your desired mint color here
        },
        primary: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
        },
        surface: "#ffffff",
        page: "#f4f7fc",
      },
    },
  },
  plugins: [],
};
