/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "screen-minus-240": "calc(100vh - 178px)",
      },
    },
  },
  plugins: [daisyui],
};
