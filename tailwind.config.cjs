const flowbite = require('flowbite/plugin');


module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  darkMode: 'class',
  plugins: [
    flowbite,
  ],
};