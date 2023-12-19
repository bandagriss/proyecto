/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
export const theme = {
  extend: {}
}
// eslint-disable-next-line no-undef
export const plugins = [require('@tailwindcss/typography'), require('daisyui')]
export const daisyui = {
  themes: [
    {
      myTheme: {
        primary: '#00C8BA',
        secondary: '#486DE7',
        warning: '#E68048',
        neutral: '#3d4451',
        'base-100': '#ffffff',
        'base-200': '#c0bfc9'
      },
      myThemeDark: {
        primary: '#00C8BA',
        secondary: '#486DE7',
        warning: '#E68048',
        neutral: '#DAFDBA',
        'base-100': '#183361',
        'base-200': '#7272f3'
      }
    },
    'light',
    'dark',
    'cupcake',
    'bumblebee'
  ],
  // darkTheme: 'dark',
  base: true,
  styled: true,
  utils: true,
  prefix: '',
  logs: true,
  themeRoot: ':root' // The element that receives theme color CSS variables
}
