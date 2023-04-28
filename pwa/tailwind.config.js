/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Montserrat"],
        'roboto': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: "0px 0px 20px 0px rgba(0, 0, 0, 0.15)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      minHeight: {
        24: "96px"
      },
      colors: {
        eggshell: "#F3FAFF",
        rich_black: "#01161E",
        midnight_green: "#124559",
        payne_gray:"#5F6C7B",
        powder_blue:"#90B4CE",
        argentinian_blue: "#3DA9FC",
        bittersweet: "#F05D5E",
        yellow: "#F6D800",
        red: "#FF1313",
        green: "#1AC421",
        black: "#1d1e1c",
        white: "#ffffff",
        transparent: "transparent",
      },
    },
    container: {
      padding: "2rem",
      center: true,
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
