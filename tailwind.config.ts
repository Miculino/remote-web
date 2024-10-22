import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "payroll-radial":
          "radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, rgba(255, 255, 255, 0.1) 30%, rgba(255, 255, 255, 0) 60%, rgb(0, 181, 104) 100%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
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
        "green-primary": "var(--green-primary)",
        payroll: "var(--payroll)",
        "employer-of-record": "var(--employer-of-record)",
        "hr-management": "var(--hr-management)",
        "contractor-management": "var(--contractor-management)",
        "remote-talent": "var(--remote-talent)",
        "remote-apis": "var(--remote-apis)",
        research: "var(--research)",
        "employee-cost-calculator": "var(--employee-cost-calculator)",
        "country-explorer": "var(--country-explorer)",
        "misclassification-risk-tool": "var(--misclassification-risk-tool)",
        blog: "var(--blog)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        crimson: "var(--font-crimson)",
      },
      gridTemplateColumns: {
        "16": "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
