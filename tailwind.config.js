/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    fontFamily: {
      'serif': 'Didot, "Bodoni MT", "Noto Serif Display", "URW Palladio L", P052, Sylfaen, serif'
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-code': theme('colors.pink[900]'),
          }
        }
      })
    },
  },
  plugins: [require('@tailwindcss/typography'),
  ],
};
