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
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
};
