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
      fontFamily: {
        AeonikProLight: ['AeonikProLight', 'sans-serif'],
        AeonikProRegular: ['AeonikProRegular', 'sans-serif'],
        AeonikProMedium: ['AeonikProMedium', 'sans-serif'],
        AeonikProBold: ['AeonikProBold', 'sans-serif'],
        BrittiSansLight: ['BrittiSansLight', 'sans-serif'],
        BrittiSansRegular: ['BrittiSansRegular', 'sans-serif'],
        BrittiSansSemiBold: ['BrittiSansSemiBold', 'sans-serif'],
        BrittiSansBold: ['BrittiSansBold', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marqueefast: 'marquee 24s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)', // Move left by 50% of the total width (half the duplicated content)
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
