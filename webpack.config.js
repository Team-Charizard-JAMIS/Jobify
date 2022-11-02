const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('NODE_ENV: ', process.env.NODE_ENV)

module.exports = {
  entry: './client/index.tsx',

  output: {
    path: path.resolve(__dirname, './build/'),
    filename: 'bundle.js',
    publicPath: '/build',
  },

  mode: process.env.NODE_ENV,

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname, './public/index.html'),
      inject: false,
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, './public/'),
    },
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
        changeOrigin: true
      }
    },
  },

  module: {
    rules: [
      // {
      //   test: /\.ts$|tsx/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env', '@babel/preset-react'],
      //     },
      //   },
      // },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     // Compiles Sass to CSS
      //     'ts-loader',
      //     'css-loader',
      //     'sass-loader',
      //   ],
      // },
      {
        test: /\.css$/,
        use: [
          // Compiles Sass to CSS
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader'
          },
        ],
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json']
  }
};