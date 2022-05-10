/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Nunito", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: withOpacity("--tw-clr-primary"),
          darker: withOpacity("--tw-clr-primary-darker"),
        },
        "on-primary": "#FFFFFF", // color on top of element with primary color
        secondary: "#FACA00",
        "on-secondary": "#000000", // color on top of element with secondary color
        dark: "#222222",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
