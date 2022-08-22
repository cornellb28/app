const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

rules.push(
  {
    test: /\.s[ac]ss$/i,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      { loader: "sass-loader" },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: function () {
              return [require("autoprefixer")];
            },
          },
        },
      },
    ],
  },
  {
    test: /\.(png|jpe?g|gif|ico|svg)$/, // We will handle of these file extensions
    use: [
      {
        loader: "file-loader",
      },
    ],
  },
  {
    test: /\.(woff|woff2|ttf|otf|eot)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          publicPath: "./../",
          name: "./fonts/[hash].[ext]",
          //outputPath: ''
        },
      },
    ],
  }
);

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".scss"],
  },
};
