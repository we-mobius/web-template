module.exports = {
  presets: [['@babel/preset-env', {
    targets: {
      browsers: ['> 1%']
    },
    modules: false
  }]],
  plugins: [['@babel/plugin-transform-runtime', {
    absoluteRuntime: false,
    corejs: false,
    helpers: true,
    regenerator: true,
    useESModules: true,
    version: '7.0.0-beta.0'
  }]]
}
