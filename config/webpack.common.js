import { rootResolvePath } from '../scripts/utils.js'

export const getCommonConfig = () => ({
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: []
  },
  plugins: [],
  resolve: {
    extensions: ['.js'],
    alias: {
      Libs: rootResolvePath('src/libs/'),
      MobiusUtils$: rootResolvePath('src/libs/mobius-utils.js'),
      MobiusUI$: rootResolvePath('src/libs/mobius-ui.js'),
      MobiusJS$: rootResolvePath('src/libs/mobius-js.js'),
      Interface: rootResolvePath('src/interface/'),
      Business: rootResolvePath('src/business/')
    },
    symlinks: false
  }
})
