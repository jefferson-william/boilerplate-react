# Boilerplate React

- [Basic commands](#basic-commands)
- [Branch flow](#branch-flow)
- [Boilerplate creation process](#boilerplate-creation-process)
- [References](#references)

| clean arch                                                                                                     | dependency flow 1                                                                                              | dependency flow 2                                                                                              |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/2935122/115903944-946a8780-a43a-11eb-8f7b-1dcdb7a8602f.png) | ![image](https://user-images.githubusercontent.com/2935122/115903958-9896a500-a43a-11eb-8663-50b6798d15cd.png) | ![image](https://user-images.githubusercontent.com/2935122/115903965-9af8ff00-a43a-11eb-9e68-8b8d31423b71.png) |

### Basic commands

```bash
cp presentation/project/.env.example presentation/project/.env
cp presentation/project/.env.production.local.example presentation/project/.env.production.local
nvm use
yarn dev
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

### Boilerplate creation process

```bash
npm init

yarn add -D @types/node

yarn add concurrently
```

### References

- https://github.com/jefferson-william/react-clean-arch-frontend
