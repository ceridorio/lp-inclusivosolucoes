import type { Config } from "tailwindcss";

const config: Config = {
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
      padding: "2rem",
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
          "linear-gradient(to right, rgba(4,4,4, 0.7), rgba(4,4,4, 0.7)), url('../public/banner-02.jpg')",
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
  plugins: [],
};
export default config;
