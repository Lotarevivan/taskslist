const path= require('path')
const logo= './src/assets/img'
const parts= './src/components'
module.exports= {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.resolve(__dirname, logo),
        '@parts': path.resolve(__dirname, parts)
      },
      extensions: ['.js', '.vue', '.json']
    }
  },
}