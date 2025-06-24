import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: '#6F9C3B', // Green
          400: '#434344',    // Gray
          500: '#455D6A',    // Payne's Gray
        },
        gray: {
          DEFAULT: '#434344',
          paynes: '#455D6A',
        },
        green: {
          DEFAULT: '#6F9C3B',
        },
        eggshell: '#E8E9D7',
        vanilla: '#E1DBA7',
        ashGray: '#AAC1BF',
        paleDogwood: '#E5C5BB',
        paynesGray: '#455D6A',
        secondary: {
          DEFAULT: '#E1DBA7', // Vanilla
          foreground: '#434344', // Gray
        },
        destructive: {
          DEFAULT: '#E5C5BB', // Pale Dogwood
          foreground: '#434344', // Gray
        },
        muted: {
          DEFAULT: '#E8E9D7', // Eggshell
          foreground: '#434344', // Gray
        },
        accent: {
          success: '#6F9C3B', // Green
          warning: '#E1DBA7', // Vanilla
        },
        popover: {
          DEFAULT: '#E8E9D7', // Eggshell
          foreground: '#434344', // Gray
        },
        card: {
          DEFAULT: '#E8E9D7', // Eggshell
          foreground: '#434344', // Gray
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        0: "0px",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.15rem" }],
        sm: ["0.875rem", { lineHeight: "1.35rem" }],
        base: ["1rem", { lineHeight: "1.7rem" }],
        lg: ["1.125rem", { lineHeight: "1.85rem" }],
        xl: ["1.25rem", { lineHeight: "2rem" }],
        "2xl": ["1.5rem", { lineHeight: "2.2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.4rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.7rem" }],
        "5xl": ["3rem", { lineHeight: "3.5rem" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Source Serif Pro", "ui-serif", "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadein: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        "service-card-entrance": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) scale(0.92)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "service-card-float": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "25%": {
            transform: "translateY(-2px) rotate(-0.2deg)",
          },
          "50%": {
            transform: "translateY(-3px) rotate(0deg)",
          },
          "75%": {
            transform: "translateY(-1px) rotate(0.3deg)",
          },
        },
        "service-card-wake": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) scaleX(0)",
          },
          "50%": {
            opacity: "1",
            transform: "translateY(10px) scaleX(1)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(0) scaleX(0)",
          },
        },
        "service-card-accent-flow": {
          "0%": {
            backgroundPosition: "-100% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        "service-card-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
        },
        "service-card-ripple": {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(4)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadein: 'fadein 0.5s ease-in',
        'slide-up': 'slide-up 0.5s cubic-bezier(0.4,0,0.2,1)',
        "service-card-entrance": "service-card-entrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "service-card-float": "service-card-float 4s ease-in-out infinite",
        "service-card-wake": "service-card-wake 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "service-card-accent-flow": "service-card-accent-flow 2s linear infinite",
        "service-card-pulse": "service-card-pulse 1s ease-in-out infinite",
        "service-card-ripple": "service-card-ripple 0.6s linear",
      },
      boxShadow: {
        soft: '0 2px 8px 0 rgba(16, 30, 54, 0.08), 0 1.5px 4px 0 rgba(16, 30, 54, 0.03)',
        "service-card": '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
      transitionTimingFunction: {
        "confident-bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;

export default config;
