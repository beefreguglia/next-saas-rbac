/** @typedef {import('prettier').Config} PrettierConfig */

/**@type {PrettierConfig} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  tabWidth: 4,
  useTabs: false,
  singleQuote: false,
  quoteProps: 'as-needed',
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  bracketSameLine: false,
}

export default config