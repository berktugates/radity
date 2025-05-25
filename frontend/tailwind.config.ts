import type { Config } from "tailwindcss";
import { Colors } from "./constants/Colors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        SelectPlatformBg: Colors.SelectPlatformBg,
        ByzantineBlue: Colors.ByzantineBlue,
        NeonAqua: Colors.NeonAqua,
        OxfordBlue:Colors.OxfordBlue,
        PrimaryNavyOxford:Colors.PrimaryNavyOxford,
        Grayscale:Colors.Grayscale,
        Seasalt:Colors.Seasalt,
        EstimateButton:Colors.EstimateButon
      },
    },
  },
  plugins: [],
} satisfies Config;
