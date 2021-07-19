module.exports = {
  "*.{ts,tsx}": [
    "yarn pretty-quick --staged",
    "yarn types",
    "yarn lint",
    "yarn test",
    "git add",
  ],
};
