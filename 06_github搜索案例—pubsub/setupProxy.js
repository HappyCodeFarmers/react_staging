const {createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware ('/api', { //遇见api前缀的请求，会触发此代理
      target: 'http://localhost:5000',
      changeOrigin: true, //控制服务器收到的响应头中Host字段的值
      pathRewrite: {'^/api': ''} //重写请求路径
    })
  )
};