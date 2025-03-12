/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E8E3E",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#a80829",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FFC107",
          foreground: "#333333",
        },
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#666666",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#333333",
        },
        background: "#FFFFFF",
        text: {
          primary: "#333333",
          secondary: "#666666",
          light: "#FFFFFF",
        },
        border: "#E0E0E0",
        success: "#1E8E3E",
        error: "#a80829",
        disabled: "#BDBDBD",
      },
    },
  },
  plugins: [],
};
