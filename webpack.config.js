const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkerPlugin = require("worker-plugin");

module.exports = (env, { mode }) => ({
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new WorkerPlugin({ globalObject: false })
  ],
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  devtool: mode === "development" ? "inline-source-map" : "none",
  devServer: {
    contentBase: "./dist",
    overlay: true,
    watchContentBase: true
  }
});