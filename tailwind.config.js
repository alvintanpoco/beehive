/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        radix_indigo: {
          1: '#f7fcfd',
          2: '#fcfcfd',
          3: '#f9fafb',
          4: '#f1f3f5',
          5: '#e6e8eb',
          6: '#d5d9e3',
          7: '#bfc5d1',
          8: '#a5afc4',
          9: '#7f8fa6',
          10: '#6c7894',
          11: '#5a687d',
          12: '#1c1f3a',
        },
        radix_indigo_dark: {
          1: '#131620',
          2: '#15192d',
          3: '#192140',
          4: '#1c274f',
          5: '#1f2c5c',
          6: '#22346e',
          7: '#273e89',
          8: '#2f4eb2',
          9: '#3e63dd',
          10: '#5373e7',
          11: '#849dff',
          12: '#eef1fd',
        },
        gray: generateScale("gray"),
      },
    },
  },
  plugins: [],
}

function generateScale(name) {
  let scale = Array.from({ length: 12 }, (_, i) => {
    let id = i + 1;
    return [
      [id, `var(--${name}${id})`],
      [`a${id}`, `var(--${name}A${id})`],
    ];
  }).flat();

  return Object.fromEntries(scale);
}