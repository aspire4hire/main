module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: false,
  proseWrap: 'always',
  semi: false,
  spaceBeforeFunctionParen: true,
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }
  ],
  trailingComma: 'none',
  importOrder: ['^components/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
