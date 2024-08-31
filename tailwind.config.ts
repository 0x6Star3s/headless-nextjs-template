import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/{app,ui,components}/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000",
        canvas: "#fff",
        accent: "#0070F0",
        // headerBgColor: "rgba(27, 34, 81, 0.568",
      },
      fontFamily: {},
      maxHeight: {
        fold: "calc(100svh - var(--header-height))",
      },
      height: {
        "screen-hero": "calc(100vh - 67px)",
      },
      backgroundImage: {
        heroDevGradient:
          "radial-gradient(48.79% 136.07% at 50.03% 48.54%,rgba(27, 34, 81, 0.568) 0, rgba(9, 19, 72, 0.677) 100%)",
      },
      backgroundColor: {
        headerBgColor: "rgba(27, 34, 81, 0.568)",
      },
      boxShadow: {
        "header-open": "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("header-open", "body:has(#header-open:checked) &");
      addVariant("header-closed", "body:has(#header-open:not(:checked)) &");
    }),
  ],
};
export default config;
