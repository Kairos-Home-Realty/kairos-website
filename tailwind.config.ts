import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#071B3B",
          light: "#0E2A56",
          dark: "#050F26",
        },
        gold: {
          DEFAULT: "#D6A84F",
          dark: "#B98B32",
          light: "#E8C787",
        },
        offwhite: "#FAF7F0",
        slate: {
          DEFAULT: "#2B2F38",
        },
        success: "#6FA97A",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(7,27,59,0.35) 0%, rgba(7,27,59,0.75) 60%, rgba(7,27,59,0.95) 100%)",
        "navy-gradient": "linear-gradient(135deg, #071B3B 0%, #0E2A56 100%)",
        "gold-gradient": "linear-gradient(135deg, #E8C787 0%, #D6A84F 50%, #B98B32 100%)",
        "skyline": "linear-gradient(180deg, #0a1f42 0%, #142c52 40%, #2a3d5f 70%, #4a5568 100%)",
      },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(7,27,59,0.15)",
        gold: "0 10px 40px -10px rgba(214,168,79,0.45)",
        card: "0 8px 30px rgba(7,27,59,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
