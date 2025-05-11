/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.15)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.2)',
      },
      keyframes:{
        "fade-in-down" : {
          '0%':{
            opacity: '0',
            transform: 'translateY(-15px)'
          },
          '100%': {
            opacity: '1',
            transform:'translateY(0)'
          },
        },
        'bounce-right': {
          '0%': { transform: 'translateX(0)'
          },
          '100%': { transform: 'translateX(100px)' 
          },
        },
        'scale-up-rotate': {
          '0%': { 
            transform: 'scale(0.2) rotate(0deg)',
          }, 
          '100%': { 
            transform: 'scale(1) rotate(360deg)',
          } 
        },
        'spin-once': {
          '0%': { transform: 'rotate(0deg)' ,
          }, 
          '100%': { transform: 'rotate(360deg)' ,
          } 
        },
        "slide-up" : {
          '0%':{
            opacity: '60',
            transform: 'translateX(100px)'
          },
          '100%': {
            opacity: '1',
            transform:'translateX(0)'
          },
        },
      },
      
      animation:{
        'fade-in-down': 'fade-in-down 0.75s ease-out',// fade in and scroll down
        'bounce-right-slow': 'bounce-right 2s ease-in-out', // Longer, more complex bounce
        'scale-up-rotate': 'scale-up-rotate 0.5s linear forwards', // Duration, easing, and fill mode
        'spin-once': 'spin-once 1s linear forwards',
        'slide-up':'slide-up .75s linear',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 1)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 1)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
//npx tailwindcss -i ./src/input.css -o ./src/tailwindStyle.css --watch

