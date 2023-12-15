import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#527853",
          100: "#527853",
          200: "#527853",
          300: "#527853",
          400: "#527853",
          500: "#527853",
          600: "#527853",
          700: "#527853",
          800: "#527853",
          900: "#527853",
          950: "#527853",
        },
        neutral: {
          50: "#e7e5e4",
          100: "#e7e5e4",
          200: "#e7e5e4",
          300: "#e7e5e4",
          400: "#e7e5e4",
          500: "#e7e5e4",
          600: "#e7e5e4",
          700: "#e7e5e4",
          800: "#e7e5e4",
          900: "#e7e5e4",
          950: "#e7e5e4",
        },
        secondary: "#e7e5e4",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
};
