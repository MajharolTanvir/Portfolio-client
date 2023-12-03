import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   mainColor: "#0c0724",
    //   secondaryColor: "#5799FC",
    //   accentColor: "#F4F7F9",
    // },
  },
  plugins: [],
};
export default config
