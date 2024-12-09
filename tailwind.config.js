/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths for all files using Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',       // Custom primary background color
        secondary: '#1E293B',     // Custom secondary background color
        accent: '#7477FF',        // Custom accent background color
      },
      textColor: {
        accent: '#7477FF',        // Custom text color for accent
      },
    },
  },
  plugins: [],
};
