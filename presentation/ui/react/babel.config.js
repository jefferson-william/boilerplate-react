module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-transform-modules-systemjs',
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
        displayName: true,
        filename: true,
      },
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@material-ui/core',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'core',
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~': './src',
          '@': './public',
        },
      },
    ],
  ],
}
