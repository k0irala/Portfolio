import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#fefefe",
        foreground: "#2d3748",
        primary: {
          DEFAULT: "#68a085",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f0f4f1",
          foreground: "#4a5568",
        },
        destructive: {
          DEFAULT: "#e53e3e",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f7fafc",
          foreground: "#718096",
        },
        accent: {
          DEFAULT: "#e6f3ea",
          foreground: "#2d3748",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#2d3748",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#2d3748",
        },
        sage: {
          50: "#f6f8f6",
          100: "#e8f0e8",
          200: "#d1e1d1",
          300: "#a8c8a8",
          400: "#7ba87b",
          500: "#5a8a5a",
          600: "#4a7249",
          700: "#3d5c3c",
          800: "#334a33",
          900: "#2b3e2b",
        },
        warm: {
          50: "#fdfcfb",
          100: "#faf8f5",
          200: "#f5f1ea",
          300: "#ede6d9",
          400: "#e1d4c1",
          500: "#d4c2a4",
          600: "#c4ad87",
          700: "#a8926f",
          800: "#8a7760",
          900: "#716252",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
