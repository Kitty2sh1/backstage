const { defineConfig } = require('@vue/cli-service')

module.exports = {
  devServer: {
    proxy: "http://leju.bufan.cloud"
  }
}