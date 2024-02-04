/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        seaFoamGreen: '#93e9be',
        sfDarker:'#77c4a1',
        navyBlue: "#001f3f",
        deepTeal: "#005d5d",
        chocolateBrown: "#4b3832",
        charcoalGray: "#36454f",
        burgundy: "#800020"
      },
      height: {
        "8vh": "8vh",
		"92vh": "92vh"
      },
      padding: {
        "8%": "6%",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
