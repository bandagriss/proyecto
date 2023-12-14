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
        primary: '#fff',
        secondary: '#0086FF',
        accent: '#37cdbe',
        neutral: '#3d4451',
        'base-100': '#ffffff'
      },
      myThemeDark: {
        primary: '#13678A',
        secondary: '#45C4B0',
        accent: '#9AEBA3',
        neutral: '#DAFDBA',
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
