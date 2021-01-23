const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   purge: [
     './resources/**/*.blade.php',
     './resources/**/*.js',
     './resources/**/*.jsx',
   ],
 darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
   
    colors:{
        'dark-b4u':'#030F89',
'light-b4u':'#E1BC1A',
'default-b4u':'#FFFFFF'
        },
        fontFamily: {
          sans: ['Calibri', ...defaultTheme.fontFamily.sans],
      },
      
      inset: {
          '0': 0,
         auto: 'auto',
         '1/2': '50%',
        },

        borderRadius: {
            'none': '0',
           'sm': '0.125rem',
           DEFAULT: '0.25rem',
           DEFAULT: '4px',
           'md': '0.375rem',
           'lg': '0.5rem',
           'full': '9999px',
           'large': '12px',
           'topLeft':'450px',
           'bottomLeft':'750px'
          },
          margin: {
            'negative': '-6.1px',
           },
           animation: {
              'spin': 'bounce infinite 3s',
             }
  },

  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [],
}
