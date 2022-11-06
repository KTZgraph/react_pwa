const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const { InjectManifest } = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const webpackPlugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public/index.html"),
    filename: "index.html",
  }),
  new Dotenv({
    path: "./.env",
    systemvars: true,
  }),

  new CopyPlugin({
    patterns: [
      { from: "./src/favicon.ico", to: "" },
      { from: "./src/manifest.json", to: "" },
      { from: "./src/logo192.png", to: "" },
      { from: "./src/logo512.png", to: "" },
    ],
  }),
];

if ("production" === process.env.NODE_ENV) {
  webpackPlugins.push(
    new InjectManifest({
      // These are some common options, and not all are required.
      // Consult the docs for more info.
      swSrc: "./src/src-sw.js",
      // output
      swDest: "sw.js",
    })
  );
}

module.exports = {
  context: __dirname,
  //   entry: "index.js",
  entry: "./src/index.js",
  output: {
    // path: path.resolve(__dirname, "./dist"),
    // dis tfolder i tak będzie w roocie
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_module/,
        use: "babel-loader",
      },
      {
        // WARNING: ttuaj też można ustawić pod Sass
        test: /\.css?$/,
        // potrzebujemy kilku loaderów
        use: ["style-loader", "css-loader"],
      },
      {
        // reguły dla obrazka, trzeba dac jeszcze folder gdzie robimy output
        test: /\.(png|j?g|svg|gif)?$/,
        // ostantie dwa kwadaratowe nawiasy do dynamicznej nazwy pliku i jego rozszerzenia
        use: "file-loader?name=./images/[name].[ext]",
      },
    ],
  },
  //   https://github.com/jantimon/html-webpack-plugin#options
  plugins: webpackPlugins,
};
