import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "warm-cream": "var(--warm-cream)",
        terracotta: "var(--terracotta)",
        copper: "var(--copper)",
        "velvet-green": "var(--velvet-green)",
        "muted-gold": "var(--muted-gold)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        accent: "var(--accent)",
        accent2: "var(--accent2)"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px color-mix(in oklab, var(--accent) 45%, transparent), 0 10px 25px -15px var(--glow)"
      },
      backgroundImage: {
        "ambient-radial":
          "radial-gradient(circle at 20% 0%, color-mix(in oklab, var(--terracotta) 22%, transparent), transparent 45%), radial-gradient(circle at 80% 20%, color-mix(in oklab, var(--velvet-green) 35%, transparent), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
