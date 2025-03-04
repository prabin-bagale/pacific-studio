import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

    './node_modules/@my-company/tailwind-components/**/*.{ts,js,tsx,jsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
      },
      backgroundImage: {
        'bar-gradient':
          '`linear-gradient(to bottom,rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255, 0.85) 28%,white 100%)`',
      },
      backdropBrightness: {
        '68': '.68',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1366px',
        '2xl': '1440px',
        '3xl': '1600px',
      },
      fontFamily: {
        Roboto: ['var(--font-Roboto)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        SairaExtraCondensed: ['Saira Extra Condensed", Arial, Verdana, Helvetica, sans-serif'],
      },
      colors: {
        facebook: '#3B5998',
        google: '#DD4B39',
        twitter: '#55ACEE',
        pinterest: '#CC2127',
        instagram: '#8A3AB9',
        transparent: 'transparent',
        translucent: 'rgba(255, 255, 255, 0.24)',
        'primary-clicked': '#256b3e',
        'primary-hover': '#328f53',
        'primary-default': '#3eb368',
        'primary-light': '#b2e1c3',
        'primary-lighter': '#d8f0e1',
        'primary-lightest': '#ecf8f0',
        'secondary-clicked': '#115b94',
        'secondary-hover': '#167ac6',
        'secondary-default': '#1c98f7',
        'neutral-black': '#111',
        'neutral-black-2': '#1F1F1F',
        'neutral-base': '#374151',
        'neutral-sub-text-alt': '#4B5563',
        'neutral-sub-text': '#6B7280',
        'neutral-disabled': '#D1D5DB',
        'neutral-light': '#E5E7EB',
        'neutral-lighter': '#F3F4F6',
        'neutral-lightest': '#F9FAFB',
        'pure-white': '#ffffff',
        'pure-black': '#000000',
        'accent-orange': '#FFAB53',
        'accent-orange-darker': '#ff9220',
        'accent-red-base': '#E02424',
        'accent-red-light': '#F05252',
        'accent-red-lighter': '#FBD5D5',
        'accent-red-lightest': '#FDF2F2',
        'yellow-base': '#ffce1f',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontSize: {
        'title-1': ['3rem', { fontWeight: 700, lineHeight: '1.5' }],
        'title-2': ['2.5rem', { fontWeight: 700, lineHeight: '1.5' }],
        'title-3': ['2.25rem', { fontWeight: 700, lineHeight: '1.5' }],
        'title-4': ['2rem', { fontWeight: 700, lineHeight: '1.5' }],
        'title-5': ['1.5rem', { fontWeight: 700, lineHeight: '1.5' }],
        'body-big-bold': ['1.25rem', { fontWeight: 700, lineHeight: '1.5' }],
        'body-big': ['1.25rem', { fontWeight: 400, lineHeight: '1.5' }],
        'body-base-bold': ['1rem', { fontWeight: 700, lineHeight: '1.5' }],
        'body-base-medium': ['1rem', { fontWeight: 500, lineHeight: '1.5' }],
        'body-base': ['1rem', { fontWeight: 400, lineHeight: '1.5' }],
        'body-base-italic': ['1rem', { fontWeight: 400, lineHeight: '1.5' }],
        'body-small-bold': ['0.875rem', { fontWeight: 700, lineHeight: '1.5' }],
        'body-small-medium': ['.875rem', { fontWeight: 500, lineHeight: '1.5' }],
        'body-small': ['0.875rem', { fontWeight: 400, lineHeight: '1.5' }],
        'body-small-italic': ['0.875rem', { fontWeight: 400, lineHeight: '1.5' }],
        'body-small-strikethrough': ['0.875rem', { fontWeight: 500, lineHeight: '1.5' }],
        'body-tiny-bold': ['0.875rem', { fontWeight: 700, lineHeight: '1.5' }],
        'body-tiny-medium': ['0.75rem', { fontWeight: 500, lineHeight: '1.5' }],
        'body-tiny': ['0.75rem', { fontWeight: 400, lineHeight: '1.5' }],
        'button-base': ['1rem', { fontWeight: 500, lineHeight: '1.5' }],
        'button-small': ['0.875rem', { fontWeight: 500, lineHeight: '1.5' }],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugin(({ addComponents }: { addComponents: any }) => {
      addComponents({
        '.container': {
          '@apply mx-auto max-w-[1180px] px-4 md:px-5 lg:px-6': {},
        },
        '.c-container': {
          '@apply mx-auto max-w-[1376px] px-4 sm:px-6 xl:px-20 3xl:px-0': {},
        },
        '.container-fluid': {
          '@apply max-w-full w-full lg:px-5': {},
        },
      });
    }),

    plugin(({ addUtilities }) => {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};

export default config;
