import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
        "custom": {
            "100": "hsl(0, 36%, 70%)",
            "200" : "hsl(0, 93%, 68%)",
            "300" : "hsl(0, 6%, 24%)",
            "400" : "hsl(0, 80%, 86%)",
            "500" : "hsl(0, 74%, 74%)",
            "600" : "hsl(0, 0%, 100%)",
            "700" : "hsl(0, 100%, 98%)"
        },
    },
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-pattern' : "url('/images/bg-pattern-desktop.svg')",
        "bg-mobile" : "url('/images/hero-mobile.jpg')",
      },
      colors : colors,
      fontFamily: {
        josefin: ['Josefin Sans', "cursive"],
       },
    },
  },
  plugins: [],
}
export default config
