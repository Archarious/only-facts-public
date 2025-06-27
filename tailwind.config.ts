import type { Config } from "tailwindcss";

const config: Config = {
  // ...existing code...
  theme: {
    extend: {
      fontFamily: {
        geologica: ["Geologica", "sans-serif"],
        "dela-gothic": ["Dela Gothic One", "cursive"],
      },
      // ...existing code...
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
  // ...existing code...
};

export default config;