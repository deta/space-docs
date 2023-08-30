/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './components/**/*.{html,js,svelte,ts}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '432px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      white: 'white',
      warm: {
        default: '#FFFADC',
        light: '#FFFADD',
      },
      seashell: {
        25: '#fefcf8',
        50: '#fbf9f7',
        100: '#f7f5f2',
        200: '#f0eeea',
        300: '#ddd6d0',
        400: '#BCB6B1',
        500: '#7b7673',
        600: '#615e5b',
        700: '#494645',
        800: '#32302f',
        900: '#1c1b1b',
        1000: '#191818',
        DEFAULT: '#f0eeea',
      },
      deta: {
        light: '#f7b6d0',
        lighter: '#f596be',
        default: '#f26daa',
        dark: '#6c314c',
        'halo-1': '#f7b6d0b3',
        'halo-2': '#f7b6d080;',
      },
      blue: {
        light: '#C6D7E9',
        default: '#0A85C2',
        dark: '#06547B',
      },
      orange: {
        light: '#ffc28d',
        default: '#fa870c',
        dark: '#702c01',
      },
      algae: {
        light: '#bdf8d4',
        default: '#0ec463',
        dark: '#024d2b',
      },
      blood: {
        light: '#ffa7a7',
        default: '#f24441',
        dark: '#6b1b12',
      },
      limeno: {
        light: '#ffd17d',
        default: '#fab20a',
        dark: '#6b3d01',
      },
      purple: {
        light: '#B48FFF',
        default: '#884CFF',
        dark: '#4E1EAD',
      },
    },
    fontFamily: {
      sans: [fontFamily.sans],
      mono: ['Cartograph', ...fontFamily.mono],
    },
    extend: {
      spacing: {
        128: '28rem',
        256: '32rem',
      },
      typography: ({ theme }) => ({
        neutral: {
          css: {
            '--tw-prose-bullets': theme('colors.seashell[700]'),
          },
        },
      }),
    },
    keyframes: {
      flash: {
        '0%': { opacity: '0.2' },
        '20%': { opacity: '1' },
        '100%': { opacity: '0.2' },
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      pulse: {
        '0%, 100%': {
          opacity: 0,
        },
        '50%': {
          opacity: 1,
        },
      },
      shake: {
        '10%, 90%': {
          transform: 'translate3d(-3px, 0, 0)',
        },

        '20%, 80%': {
          transform: 'translate3d(4px, 0, 0)',
        },

        '30%, 50%, 70%': {
          transform: 'translate3d(-6px, 0, 0)',
        },

        '40%, 60%': {
          transform: 'transelate3d(6px, 0, 0)',
        },
      },
    },
    animation: {
      flash: 'flash 1.4s infinite linear',
      spin: 'spin 1s infinite linear',
      pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      shake: 'shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
    },
  },
}