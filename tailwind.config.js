/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      'cyan': '#5FB4A2',
      'blue': '#203A4C',
      'dark-blue': '#33323D',
      'light-grey': '#FAFAFA',
      'grey': '#EAEAEB',
      'red': '#F43030',
      'white': '#FFFFFF'
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
      serif: ['Ibarra Real Nova', 'serif'],
    },
    extend: {
      backgroundImage: {
        'website-logo': "url('/Users/herve/Desktop/code/FrontendMentor/minimalist portfolio website/my portfolio website/src/assets/images/logo.svg')",
        'hamburger-icon': "url('/Users/herve/Desktop/code/FrontendMentor/minimalist portfolio website/my portfolio website/src/assets/images/icons/hamburger.svg')",
        'down-arrows': "url('/Users/herve/Desktop/code/FrontendMentor/minimalist portfolio website/my portfolio website/src/assets/images/icons/down-arrows.svg')",
      },
      width: {
        '15': '3.75rem',
        '38': '9.5rem',
        'btn': '12.5rem',
      },
      height: {
        '3.75': '0.812rem',
        'article': '38.4375rem'
      },
      inset: {
        'btn-top-center': '1.125rem',
      }
    },
    fontSize: {
      'h2': ['40px', {
        letterSpacing: '-0.36px',
        lineHeight: '42px',
      }],
      'btn': ['0.75rem', {
        letterSpacing: '0.125rem',
        lineHeight: '0.875rem'
      }],
      'p': ['1rem', {
        lineHeight: '1.875rem',
      }],
      'p2': ['0.9375rem', {
        lineHeight: '1.875rem',
      }],
      'techno': ['0.8125rem', {
        lineHeight: '1.875rem',
      }],
      'h3-mobile': ['2rem', {
        letterSpacing: '-0.29px',
        lineHeight: '2.625rem',
      }],
      'h3-mobile-btn': ['2rem', {
        letterSpacing: '-0.29px',
        lineHeight: '2.25rem',
      }],
      'link-tablet': ['0.75rem', {
        letterSpacing: '0.125rem',
        lineHeight: '0.0625rem',
      }],
      'h2-desktop': ['3.125rem', {
        letterSpacing: '-0.028125rem',
        lineHeight: '3.125rem',
      }]
    },
    opacity: {
      '15': '.15',
      'p': '.8',
      'p-mobile-btn': '.5'
    }, 
    screens: {
      'tablet': '689px',
      'desktop': '1439px',
      'mobile': '375px',
      'max-tablet': {'max': '688px'},
      'max-desktop': {'max': '1439px'},
    },
  },
  plugins: [],
}
