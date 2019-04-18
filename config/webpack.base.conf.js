const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { root, rootTo, dist, distTo } = require('./util.js');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: dist,
    filename: '[name].bundle.js'
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json'],   // 引入 xxx.vue 时就不需要写 .vue 后缀了
    alias: {
      '@': rootTo('src')                    // 就可以这样写: import Home from "@/page/Home"
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        include: [rootTo('src')],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        include: [rootTo('src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 4096,
            // outputPath: utils.staticPathTo('images/'),
            name: '[name].[hash:10].[ext]',
          },
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 4096,
          // outputPath: utils.staticPathTo('media/'),
          name: '[name].[hash:10].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 4096,
            // outputPath: utils.staticPathTo('fonts/'),
            name: '[name].[hash:10].[ext]',
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: rootTo('src/index.html'),
        minify: {
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          removeComments: true
        }
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
