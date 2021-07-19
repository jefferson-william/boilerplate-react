module.exports = {
  '*.{ts,tsx}': ['yarn pretty-quick --staged', 'yarn lint', 'yarn stylelint', 'git add'],
}
