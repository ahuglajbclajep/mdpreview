const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); // from webpack
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

/** @type {(env: typeof process.env, argv: { mode?: string }) => import("webpack").Configuration} */
module.exports = (env, { mode }) => {
  const dev = mode !== "production";
  return {
    // see https://github.com/webpack/webpack-dev-server/issues/1327
    mode: "development",
    entry: "./src/index",
    // see https://github.com/webpack-contrib/worker-loader/issues/142
    output: { globalObject: "self" },
    module: {
      rules: [
        {
          test: /\.?worker\.[tj]s$/,
          // comlink-loader also receives worker-loader options
          loader: "comlink-loader?singleton&name=[name].js",
        },
        {
          test: /\.[tj]sx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: process.env.npm_package_name,
        desc: process.env.npm_package_description,
        scriptLoading: "defer",
      }),
      new MiniCssExtractPlugin(),
      new GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        inlineWorkboxRuntime: true,
        sourcemap: dev,
      }),
    ],
    resolve: { extensions: [".ts", ".tsx", ".js"] },
    optimization: {
      minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()],
    },
    devtool: dev ? "inline-source-map" : false,
    devServer: {
      contentBase: "./dist",
      // host: "0.0.0.0", // for debugging on mobile devices
      overlay: true,
      watchContentBase: true,
    },
  };
};
