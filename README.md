# Boilerplate React

- [Basic commands](#basic-commands)
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
cp presentation/project/.env.example presentation/project/.env
cp presentation/project/.env.production.local.example presentation/project/.env.production.local
cp presentation/ui/react/.env.example presentation/ui/react/.env
nvm use
yarn dev
yarn test
yarn build
yarn start
```

### Single SPA

Tudo começa em como expor o componente.

A a estrutura do [boilerplate-react](https://github.com/jefferson-william/boilerplate-react) em especial por ter o `config-overrides.js`, conseguimos configurar o `webpack` para nos ajudar.

É necessário criar um arquivo como `export-out.ts` para adicionar importações dinâmicas do `webpack` dos componentes a serem usados em outro _framework_ via **Single SPA**, tal como o `presentation/presenter/angularjs-webpack`.

Veja o [vídeo](https://drive.google.com/file/d/1Aoakrt8SglcHeODOntsnpDtyfKV20emc/view?usp=sharing).

Essas configurações adicionais no webpack via `config-overrides.js` fazem parte da solução conforme vídeo.

```
configuration.output.jsonpFunction = '@app/react'
  configuration.output.libraryTarget = 'umd'
  configuration.externals = {
    rxjs: 'rxjs',
    'single-spa-react': 'single-spa-react',
  }
```

#### Refs

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
