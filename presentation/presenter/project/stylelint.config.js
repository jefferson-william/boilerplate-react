module.exports = {
  plugins: ['stylelint-order', 'stylelint-prettier', 'stylelint-config-rational-declaration/plugin'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-order',
    'stylelint-config-rational-declaration',
    'stylelint-config-prettier',
  ],
  rules: {
    'string-quotes': 'single',
    'no-empty-source': null,
    'rule-empty-line-before': 'never',
    'declaration-bang-space-before': null,
    'prettier/prettier': true,
    'order/properties-order': [],
    'plugin/rational-declaration': [
      true,
      {
        'empty-line-between-groups': false,
      },
    ],
  },
}
