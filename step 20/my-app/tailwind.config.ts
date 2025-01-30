import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main:"#044e83",
        sub:"#2eb6e8",
      },
      screens:{

         xs:"500px",
         sm:"640px",
         md:"769px",
         lg:"1024px"




      }




      
    },
  },
  plugins: [],
} satisfies Config;
