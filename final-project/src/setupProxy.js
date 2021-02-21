const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/login", { target: "http://localhost:3004/" })
  );
  app.use(
    createProxyMiddleware("/register", { target: "http://localhost:3004/" })
  );
  app.use(
    createProxyMiddleware("/attempts", { target: "http://localhost:3004/" })
  );
  app.use(
    createProxyMiddleware("/contents", { target: "http://localhost:3004/" })
  );
};