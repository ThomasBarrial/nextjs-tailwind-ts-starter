module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: '#00253E',
        lightBlue: '#194C6D',
        blue: '#04A7F0',
        white: '#F8F5F1',
      },
      maxWidth: {
        content: '1000px',
      },
      minHeight: {
        container: '550px',
        textpartner: '120px',
      },
      width: {
        section3: '89.5%',
        people: '11rem',
        92: '93%',
      },
      inset: {
        dot: '4.9rem',
      },
      height: {
        header: '28rem',
        line: '1px',
        footer: '32rem',
      },
      boxShadow: {
        container: '0px 10px 20px rgba(0, 0, 0, 0.25)',
        contactForm: '-20px 4px 20px rgba(0, 0, 0, 0.15);',
      },
      fontFamily: {
        syncopate: ['Syncopate', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        lg: '1400px',
        // => @media (min-width: 1080px) { ... }
      },
      animation: {
        fadeIn: 'fadeIn ease-in-out 2s',
        ping: 'fade 0.8s infinite',
        fadeOut: 'fadeOut ease-out 1s',
        fadeBg: 'fadeBg ease-in-out 2s',
        fadeFast: 'fadeIn ease-in-out 0.5s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fade: {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeBg: {
          '0%': { opacity: 0 },
          '100%': { opacity: 0.05 },
        },
      },
      fontSize: {
        xxs: '0.6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};