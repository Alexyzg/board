const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// TODO: can be usefull for rewriting
// https://www.carlrippon.com/creating-react-and-typescript-apps-with-webpack/

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      interfaces: path.resolve(__dirname, 'src/interfaces'),
      services: path.resolve(__dirname, 'src/services'),
      store: path.resolve(__dirname, 'src/store'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
};