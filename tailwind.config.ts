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
      screens: {
        'my-custom-md': '900px',  // Your chosen 2-column width
        'my-custom-xl': '1440px' // Your chosen 3-column width
      },
    },
  },
  plugins: [],
} satisfies Config;
