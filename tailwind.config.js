/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily:{
        "primary":"var(--font-medium)",
        "black":"var(--font-black)",
        "bold":"var(--font-bold)",
      },
      colors:{
        primary:"#003B65",
        "primary-light":"#557C98",
        "primary-deep":"#001E33",
        "primary-deeper":"#001422",
        "primary-light":"#557C98",
        "primary-lighter":"#CCD8E0",
        secondary:"#F0BD2D",
        gray:"#323232",
        "gray-2":"#767676",
        dark:"#191919",
        specialgray: "#D6D6D6",
        "light-bg":"#F1F0F1",
      },
    borderWidth:{
      "1": "1px",
    },
     boxShadow:{
      normal:"0px 2px 60px 0px rgba(0, 59, 101, 0.10)",
     }
    },
  },
  plugins: [],
}

//#767676