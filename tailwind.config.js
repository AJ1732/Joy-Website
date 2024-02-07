/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f5f5f5",
        slategray: "#627193",
        gray: {
          "100": "#132742",
          "200": "rgba(255, 255, 255, 0.2)",
          "300": "rgba(255, 255, 255, 0.8)",
        },
        midnightblue: "#00005c",
        darkorchid: {
          "100": "#672ebc",
          "200": "rgba(103, 46, 188, 0.1)",
        },
        mediumslateblue: "#8c54e3",
        cornsilk: "#fff5db",
        ghostwhite: "#fcfaff",
        lavender: {
          "100": "#f6efff",
          "200": "#dbd6e6",
        },
        black: "#000",
        gainsboro: "#e3e0e6",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        xl: "20px",
        "16xl": "35px",
        "19xl": "38px",
      },
    },
    fontSize: {
      base: "1rem",
      "5xl": "1.5rem",
      lgi: "1.19rem",
      "11xl": "1.88rem",
      lg: "1.13rem",
      "3xl": "1.38rem",
      "25xl": "2.75rem",
      "7xl": "1.63rem",
      "16xl": "2.19rem",
      sm: "0.88rem",
      xs: "0.75rem",
      "35xl": "3.38rem",
      "13xl": "2rem",
      "24xl": "2.69rem",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
