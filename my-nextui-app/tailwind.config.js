import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        mui: {
          extend: "dark",
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "hsl(210, 100%, 96%)",
              100: "hsl(210, 100%, 90%)",
              200: "hsl(210, 100%, 80%)",
              300: "hsl(210, 100%, 70%)",
              400: "hsl(210, 100%, 60%)",
              500: "hsl(210, 100%, 45%)",
              600: "hsl(210, 100%, 42%)",
              700: "hsl(210, 100%, 38%)",
              800: "hsl(210, 100%, 30%)",
              900: "hsl(210, 100%, 23%)",
              DEFAULT: "hsl(210, 100%, 45%)",
              foreground: "#ffffff",
            },
          },
          layout: {
            radius: {
              small: "4px",
              medium: "8px",
              large: "12px",
            },
            borderWidth: {
              small: "0.5px",
              medium: "1px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
