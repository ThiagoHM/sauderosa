/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adicione os caminhos dos seus arquivos
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Adicione o Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Adicione o plugin do Flowbite
  ],
};
