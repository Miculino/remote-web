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
        semrush: "var(--purple-blue)",
        shootsta: "var(--tropical-teal)",
        fountain: "var(--electric-azure)",
        "reverse-tech": "var(--neon-lime)",
        weaviate: "var(--deep-indigo)",
        pento: "var(--cool-violet)",
        commercetools: "var(--golden-yellow)",
        tablevibe: "var(--sky-blue)",
        tele2: "var(--vivid-purple)",
        fluz: "var(--light-pink)",
        homeproject: "var(--soft-red)",
        "dark-navy": "var(--dark-navy)",
        link: "var(--vibrant-purple)",
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
