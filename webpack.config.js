const path = require("path");

module.exports = {
  entry: "./frontend/better_help.jsx",
  output: {
    path: path.join(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        exclude: /node_modules/
      }
    ]
  }
};
