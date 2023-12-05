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
        primary: '#a991f7',
        secondary: '#f6d860',
        accent: '#37cdbe',
        neutral: '#3d4451',
        'base-100': '#ffffff'
      }
    },
    'light',
    'dark',
    'cupcake',
    'bumblebee'
  ],
  darkTheme: 'dark',
  base: true,
  styled: true,
  utils: true,
  prefix: '',
  logs: true,
  themeRoot: ':root' // The element that receives theme color CSS variables
}