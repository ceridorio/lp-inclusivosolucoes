import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs2: "100px",
      xs: "320px",
      sm2: "400px",
      sm: "450px",
      md: "768px",
      lg: "992px",
      container: "1280px",
    },
    container: {
      padding: "1rem",
      center: true,
    },
    extend: {
      boxShadow: {
        bottom: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "hero-bg":
          "linear-gradient(to right, rgba(4,4,4, 0.7), rgba(4,4,4, 0.7)), url('../public/hero-bg.png')",
        "contact-bg":
          "linear-gradient(to right, rgba(4,4,4, 0.7), rgba(4,4,4, 0.7)), url('../public/idea.jpg')",
        "media-bg":
          "linear-gradient(to right, rgba(4,4,4, 0.7), rgba(4,4,4, 0.7)), url('../public/banner-02.webp')",
        "consulting-bg":
          "linear-gradient(to right, rgba(4,4,4, 0.7), rgba(4,4,4, 0.7)), url('../public/banner-03.webp')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      purple: "#7a0dda",
      blue700: "#0e1348",
      blue500: "#350cda",
      blue300: "#0364db",
      blue100: "#0fd1e4",
      darkGray: "#212121",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
