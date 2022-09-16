const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// 跨域
module.exports={
  devServer:{
    proxy:"http://leju.bufan.cloud"
  }
}