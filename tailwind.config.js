export const mantineColors = {
  primary: [
    "#ffeef9",
    "#f3deea",
    "#dfbcd0",
    "#cc98b6",
    "#bb799f",
    "#b26591",
    "#ae5a8b",
    "#994a78",
    "#89416b",
    "#7a355e",
  ],
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Adjust to match your project
  theme: {
    extend: {
      colors: {
        primary: {
          50: mantineColors.primary[0],
          100: mantineColors.primary[1],
          200: mantineColors.primary[2],
          300: mantineColors.primary[3],
          400: mantineColors.primary[4],
          500: mantineColors.primary[5],
          600: mantineColors.primary[6],
          700: mantineColors.primary[7],
          800: mantineColors.primary[8],
          900: mantineColors.primary[9],
        },
      },
    },
  },
  plugins: [],
};
