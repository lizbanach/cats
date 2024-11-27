import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        petal: '#e8d9ed',
        midnight: '#0b1957',
        lace: '#f7f4ed',
        lavender: '#d2b3db',
        blue: '#e9f3ff',
      },
    },
  },
  plugins: [],
} satisfies Config;
