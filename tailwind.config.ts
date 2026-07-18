import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#2E2118",
        "espresso-light": "#3D2E22",
        cream: "#F4EDE0",
        "cream-dark": "#EBE3D4",
        moss: "#4A5A3A",
        "moss-light": "#5C6E48",
        forest: "#203A28",
        leaf: "#4F7F5C",
        sage: "#8EA88D",
        olive: "#B8C8B0",
        pine: "#2F4C3A",
        copper: "#A8703F",
        "copper-light": "#C4894F",
        mist: "#DCE0D5",
        "mist-dark": "#C8CDC0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        caption: "0.14em",
        display: "-0.025em",
      },
      boxShadow: {
        premium: "0 4px 24px -4px rgba(46, 33, 24, 0.08), 0 12px 48px -12px rgba(46, 33, 24, 0.12)",
        "premium-lg": "0 8px 32px -8px rgba(46, 33, 24, 0.1), 0 24px 64px -16px rgba(46, 33, 24, 0.14)",
        card: "0 2px 8px -2px rgba(46, 33, 24, 0.06), 0 8px 24px -8px rgba(46, 33, 24, 0.1)",
        nav: "0 1px 0 rgba(244, 237, 224, 0.06)",
      },
      keyframes: {
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.06) translate(-0.5%, -0.3%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-hint": {
          "0%, 100%": { opacity: "0.4", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(6px)" },
        },
      },
      animation: {
        "ken-burns": "ken-burns 24s ease-in-out infinite alternate",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "scroll-hint": "scroll-hint 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
