import { emptyDirSync, rootResolvePath } from './utils.js'

import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import { getWebpackConfig } from '../webpack.config.js'

const BUILD_TARGET_DES = 'build'
emptyDirSync(rootResolvePath(BUILD_TARGET_DES))

// ref: https://github.com/webpack/webpack-dev-server/blob/master/examples/api/simple/server.js
// ref: https://webpack.js.org/configuration/dev-server/
const webpackConfig = getWebpackConfig({ mode: 'development' })
const compiler = webpack(webpackConfig)
const devServerOptions = Object.assign({}, webpackConfig.devServer)
console.info('【devServerOptions】')
console.info(devServerOptions)
const server = new WebpackDevServer(compiler, devServerOptions)

server.listen(devServerOptions.port, '127.0.0.1', () => {
  console.info(`Starting server on http://localhost:${devServerOptions.port}`)
})
