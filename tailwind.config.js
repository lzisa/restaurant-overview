import { sharedColors } from "./src/theme/myTheme.ts";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: sharedColors.primary[0],
          100: sharedColors.primary[1],
          200: sharedColors.primary[2],
          300: sharedColors.primary[3],
          400: sharedColors.primary[4],
          500: sharedColors.primary[5],
          600: sharedColors.primary[6],
          700: sharedColors.primary[7],
          800: sharedColors.primary[8],
          900: sharedColors.primary[9],
        },
      },
    },
  },
  plugins: [],
};
