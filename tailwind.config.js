/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: ['selector', '[class = "dark"]'], // Enable dark mode with the 'class' strategy
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "#525256",
        defaultBlack: "#191919",
        gray: {
          "01": "#666666",
          "02": "#878787",
          "03": "#9F9F9F",
          "04": "#D1D1D1",
          "05": "#E8E8E8",
          "06": "#F3F3F3",
        },
        special: {
          bg: "rgba(210,210,210,0.25)",
          bg2: "rgba(255,255,255,0.7)",
          bg3: "rgba(255,255,255,0.08)",
          mainBg: "#F4F5F7",
          green: "#E73D1C",
          red: "#4DAF6E",
        },
        dark: {
          primary: "#1a202c",
          secondary: "#2d3748",
          defaultBlack: "#171923",
          gray: {
            "01": "#2d3748",
            "02": "#4a5568",
            "03": "#718096",
            "04": "#a0aec0",
            "05": "#cbd5e0",
            "06": "#e2e8f0",
          },
          special: {
            bg: "rgba(45,45,45,0.25)",
            bg2: "rgba(30,30,30,0.7)",
            bg3: "rgba(20,20,20,0.08)",
            mainBg: "#1a202c",
            green: "#48bb78",
            red: "#f56565",
          },
        },
      },
      fontFamily: {
        body: ["Inter"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
