/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFBC20",
        secondary: "#EFEFFD",
        blue: "#10455B",
        red: "#F15928",
        dark: "#0E0E2C",
        success: "#46D4B2",
        accent: "#ECF1F4",
        white: "#FAFCFE",
        bodytext: "#4A4A68",
        SubText: "#8C8CA1",
      },
      fontSize: {
        'title': ['64px', { letterSpacing: '-2%' }],
        'header-2': ['40px', { letterSpacing: '-2%' }],
        'header-3': ['24px', { letterSpacing: '-2%' }],
        'subtitle': '24px',
        'body': '16px',
        'small': '14px',
        'pre-title': ['10px', { letterSpacing: '3%' }],
        'button-text': ['10px', { letterSpacing: '3%' }],
        'link': '16px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        'bold': 'bold',
        'medium': '500',
      },
      lineHeight: {
        '140': '140%',
      },
      textDecoration: {
        'underline': 'underline',
      },
    },
    screens: {
      'xs': '480px',
      'ss': '620px',
      'sm': '768px',
      'md': '1060px',
      'lg': '1200px',
      'xl': '1700px',
    },
  },
  plugins: [],
};