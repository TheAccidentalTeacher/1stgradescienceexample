import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Blue for trust and learning
        secondary: '#059669', // Green for nature/creation
        accent: '#f59e0b', // Orange for energy/excitement
        dinosaur: '#8b5cf6', // Purple for dinosaurs
        truck: '#ea580c', // Orange-red for trucks
        bug: '#84cc16', // Lime for bugs
      },
      fontFamily: {
        sans: ['Comic Sans MS', 'Chalkboard SE', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
