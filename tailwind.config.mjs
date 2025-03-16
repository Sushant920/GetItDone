/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#6A0DAD",
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainBackground: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
