import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontWeight: {
        'xlight': 100,  // Custom font weight, 100 (extra light)
        'medium': 500,  // Custom font weight, 500 (medium)
        'heavy': 800,   // Custom font weight, 800 (heavy)
      },
    },
  },
  plugins: [],
} satisfies Config;
