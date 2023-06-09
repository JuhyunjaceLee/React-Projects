const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "https://my-json-server.typicode.com/JuhyunjaceLee/React-Projects",
      changeOrigin: true,
    })
  );
};
