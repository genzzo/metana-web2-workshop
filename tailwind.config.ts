import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        foreground: "rgba(var(--color-foreground-rgb) / <alpha-value>)",
        background: "rgba(var(--color-background-rgb) / <alpha-value>)",
      },
      backgroundImage: {
        "base-gradient":
          "linear-gradient(to right, #00dbde, #fc00ff, #00dbde, #fc00ff)",
      },
      borderRadius: {
        pill: "100vh",
      },
    },
  },
  plugins: [],
};
export default config;
