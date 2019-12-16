var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  watchOptions: { poll: 8000 },
  mode: 'development',
  entry: {
      'app': path.resolve(__dirname, 'src') + '/typescript/index.ts',
      'theme': path.resolve(__dirname, 'src') +  '/styles/theme.scss'
    },
  output: {
    path: path.resolve(__dirname, 'dist') + '/assets',
    filename: '[name].js',
    library: 'app_[name]',
    libraryTarget: 'window'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-async-to-generator']
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts','.scss','.js' ]
  },
};
