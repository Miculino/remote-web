import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "dark-gray": "var(--dark-gray)",
        "dark-blue": "var(--dark-blue)",
        "purple-blue": "var(--purple-blue)",
        "dark-navy": "var(--dark-navy)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        crimson: "var(--font-crimson)",
      },
    },
  },
  plugins: [],
};
export default config;
