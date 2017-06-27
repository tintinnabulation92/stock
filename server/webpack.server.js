const path = require("path");
const express = require("express");
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");
const config = require("../webpack/webpack.local.config");

const app = express();
const compiler = webpack(config);

const customHost = process.env.HOST || process.env.OPENSHIFT_NODEJS_IP;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

const middleware = devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: "dist",
  stats: { colors: true },
  historyApiFallback: true,
});

app.use(middleware);
app.use(hotMiddleware(compiler));

app.get("*", (req, res) => {
  res.write(middleware.fileSystem.readFileSync(path.resolve("dist/index.html")));
  res.end();
});

const listener = app.listen(port, host, () => {
  console.log('Express started at ' + prettyHost + ':' + port, listener.address().port);
});
