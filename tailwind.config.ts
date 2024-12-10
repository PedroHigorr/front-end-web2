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
        cpowerPurple: "#4F359B",
        cmount: "#7D6F86",
        cgrey: "#F2F2F2",
        cdark: "#0C0910",
        cpurple: "#585191",
        roseQuartz: "#AAA1C8",
        russianViolet: "#280434",
        thistle: "#D5C6E0",
        lavanderBlush: "#F5E6E8",
        mountbatten: "#967AA1",

      },
    },
  },
  plugins: [],
} satisfies Config;
