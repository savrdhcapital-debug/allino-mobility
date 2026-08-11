import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    // Keep the existing frozen website CSS untouched; Tailwind supplies utilities only.
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
