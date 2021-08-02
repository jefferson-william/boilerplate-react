# Boilerplate React

- [Basic commands](#basic-commands)
- [Branch flow](#branch-flow)
- [VSCode](#vscode)
  - [Debug](#debug)
- [Boilerplate creation process](#boilerplate-creation-process)
- [References](#references)

### Basic commands

```bash
cp .env.example .env
cp .env.production.local.example .env.production.local
nvm install ; nvm use
yarn ; yarn dev # http://localhost:3000
yarn test
yarn build
yarn start
```

### Branch flow

[master](https://github.com/jefferson-william/boilerplate-react): basic structure (cra, pwa, msw, jest, babel, typescript, eslint, stylelint)

[material-ui](https://github.com/jefferson-william/boilerplate-react/tree/material-ui): material-ui applied

[i18n](https://github.com/jefferson-william/boilerplate-react/tree/i18n): react-i18next applied

[all](https://github.com/jefferson-william/boilerplate-react/tree/all): < i18n < material-ui < master

[clean-arch](https://github.com/jefferson-william/boilerplate-react/tree/clean-arch): < all

[clean-arch-global-lints](https://github.com/jefferson-william/boilerplate-react/tree/clean-arch-global-lints): < clean-arch

[clean-arch-module-shared](https://github.com/jefferson-william/boilerplate-react/tree/clean-arch-module-shared): < clean-arch-global-lints

[clean-arch-single-spa](https://github.com/jefferson-william/boilerplate-react/tree/clean-arch-single-spa): < clean-arch-module-shared

#### VSCode

Add the settings that suit you. The most important is about stylelint.

```
"javascript.suggest.autoImports": false,
  "javascript.updateImportsOnFileMove.enabled": "never",
  "editor.tabSize": 2,
  "editor.rulers": [120],
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.npm": false,
    "source.fixAll.stylelint": true,
    "source.fixAll.eslint": true
  },
  "emmet.triggerExpansionOnTab": true,
  "emmet.showExpandedAbbreviation": "never",
  "emmet.showSuggestionsAsSnippets": true,
  "emmet.includeLanguages": {
    "javascript": "css",
    "vue-html": "html",
    "razor": "html",
    "plaintext": "jade"
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx",
    "typescript": "jsx",
    "typescriptreact": "jsx",
    "jsx": {
      "self_closing_tag": true
    }
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "[typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
```

### Debug

Create the `/.vscode/launch.json` file.

Remember to change `<user-name>` to the username of your environment and make sure you are using `nvm` as applied in `runtimeExecutable`.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}",
      "userDataDir": true
    },
    {
      "name": "Jest Tests",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "/Users/<your-user-name>/.nvm/versions/node/v14.17.3/bin/yarn",
      "runtimeArgs": ["test", "--runInBand"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "port": 9230
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Jest Current File",
      "runtimeExecutable": "/Users/<your-user-name>/.nvm/versions/node/v14.17.3/bin/yarn",
      "args": ["test", "${fileBasenameNoExtension}", "--detectOpenHandles"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true
    }
  ],
  "compounds": [
    {
      "name": "All",
      "configurations": ["Launch Chrome", "Jest Tests"]
    }
  ]
}
```

### Boilerplate creation process

```bash
npx create-react-app boilerplate-react --template cra-template-pwa-typescript

yarn add -D @babel/cli @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/runtime @commitlint/cli @commitlint/config-conventional @testing-library/dom @testing-library/jest-dom @testing-library/react @types/jest @types/node @types/react @types/react-router-dom @types/react-dom @types/styled-components @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-jest babel-loader babel-plugin-import babel-plugin-styled-components commitizen cz-conventional-changelog eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import-helpers eslint-import-resolver-typescript husky jest jest-transform-stub jest-styled-components lint-staged mutationobserver-shim prettier stylelint stylelint-config-prettier stylelint-config-rational-declaration stylelint-config-recommended stylelint-config-recommended-scss stylelint-order stylelint-prettier stylelint-scss ts-jest ts-loader typescript @hot-loader/react-dom react-app-rewire-hot-loader customize-cra react-app-rewired react-app-rewire-aliases babel-plugin-module-resolver msw jest-watch-typeahead

yarn add @material-ui/core history react react-dom react-router-dom react-hot-loader styled-components workbox-background-sync workbox-broadcast-update workbox-cacheable-response workbox-core workbox-expiration workbox-google-analytics workbox-navigation-preload workbox-precaching workbox-range-requests workbox-routing workbox-strategies workbox-streams
```

### References

- https://create-react-app.dev/docs/adding-typescript/
- https://create-react-app.dev/docs/making-a-progressive-web-app/
