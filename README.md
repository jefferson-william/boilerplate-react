# Boilerplate React

- [Basic commands](#basic-commands)
- [Single SPA](#single-spa)
- [Etc](#etc)

| folders                                                                                                        | clean arch                                                                                                     |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/2935122/126218252-2da8361a-2695-4397-810a-bf1f049db6d7.png) | ![image](https://user-images.githubusercontent.com/2935122/115903958-9896a500-a43a-11eb-8663-50b6798d15cd.png) |

## Dependency rules

| dependency flow 1                                                                                              | dependency flow 2                                                                                              |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/2935122/115903958-9896a500-a43a-11eb-8663-50b6798d15cd.png) | ![image](https://user-images.githubusercontent.com/2935122/115903965-9af8ff00-a43a-11eb-9e68-8b8d31423b71.png) |

### Basic commands

```bash
cp presentation/presenter/project/.env.example presentation/presenter/project/.env
cp presentation/ui/react/.env.example presentation/ui/react/.env
nvm install ; nvm use ; yarn
yarn dev
yarn test
yarn build
yarn start
```

### Single SPA

Inspirado no [craco-plugin-single-spa-application](https://www.npmjs.com/package/craco-plugin-single-spa-application)
para Webpack, foi aplicado uma estrutura que permite ter a experiência de desenvolvimento do **CRA4**, mas com possibilidade
de utilizar os componentes configurados no
[entries.json](https://github.com/jefferson-william/boilerplate-react/blob/clean-arch-single-spa/presentation/ui/react/entries.js)
em outra aplicação via [Single SPA](https://single-spa.js.org/).

Cada componente é exposto pelo
[ui/react](https://github.com/jefferson-william/boilerplate-react/tree/clean-arch-single-spa/presentation/ui/react)
via arquivo
[single.spa.tsx](https://github.com/jefferson-william/boilerplate-react/blob/clean-arch-single-spa/presentation/ui/react/src/components/Button/single.spa.tsx).
Após, é importado via
[SystemJS](https://github.com/jefferson-william/boilerplate-react/blob/clean-arch-single-spa/presentation/presenter/angularjs-webpack/src/index.ejs#L44)
e renderizado pelo
[single-spa-react](https://github.com/jefferson-william/boilerplate-react/blob/clean-arch-single-spa/presentation/ui/react/src/components/Button/single.spa.tsx#L3)
e [single-spa-layout](https://github.com/jefferson-william/boilerplate-react/blob/clean-arch-single-spa/presentation/presenter/angularjs-webpack/src/microfrontend-layout.html#L22)
configurado
[aqui](https://github.com/jefferson-william/boilerplate-react/blob/clean-arch-single-spa/presentation/presenter/angularjs-webpack/src/angularjs-root-config.ts#L3).

No [presenter/angularjs-webpack](https://github.com/jefferson-william/boilerplate-react/tree/clean-arch-single-spa/presentation/presenter/angularjs-webpack),
você **não** verá _fast_ ou _hot reload_ nos componentes renderizados via `single-spa-react`.

O [presenter/project](https://github.com/jefferson-william/boilerplate-react/tree/clean-arch-single-spa/presentation/presenter/project)
é só uma sobra do aplicado na branch
[clean-arch-module-shared](https://github.com/jefferson-william/boilerplate-react/tree/clean-arch-module-shared/presentation/presenter/project).

#### Refs

- https://www.npmjs.com/package/craco-plugin-single-spa-application
- https://stephencharlesweiss.com/single-spa-craco-react
- https://github.com/hasanayan/craco-plugin-react-hot-reload
- https://webpack.js.org/guides/code-splitting/#dynamic-imports
- https://webpack.js.org/configuration/externals/#string
- https://pt-br.reactjs.org/docs/optimizing-performance.html#single-file-builds
- https://single-spa.js.org/
- https://stackoverflow.com/a/61353105/4731097
- https://www.npmjs.com/package/react-app-rewired#user-content-extended-configuration-options
- https://gist.github.com/joeldenning/79f2592086ad132fae8ee5aae054c0b6
- https://www.npmjs.com/package/react-app-rewire-build-dev

### Etc

See [master](https://github.com/jefferson-william/boilerplate-react) branch.
