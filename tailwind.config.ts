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
      },
      fontFamily: {},
      maxHeight: {
        fold: "calc(100svh - var(--header-height))",
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
