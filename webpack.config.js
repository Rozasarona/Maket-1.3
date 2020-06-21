const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Входной файл
  entry: [
    './src/js/index.js'
  ],

  // Выходной файл
  output: {
    filename: './js/bundle.js'
  },

  // Source maps для удобства отладки
  devtool: "source-map",

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]'
          },
        ]
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./static/[name].[ext]'
          },
        ]
      },
    ],
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: 'Услуги и сервисы',
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),

    new HtmlWebpackPlugin({
      title: 'Side-bar',
      filename: 'side-bar.html',
      template: './src/side-bar.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),

    new HtmlWebpackPlugin({
      title: 'Бренды. Ремонт',
      filename: 'gallery.html',
      template: './src/gallery.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),

    new HtmlWebpackPlugin({
      title: 'Виды техники. Ремонт',
      filename: 'gadgets.html',
      template: './src/gadgets.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),

    new HtmlWebpackPlugin({
      title: 'Цены на услуги',
      filename: 'costs.html',
      template: './src/costs.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),

    new HtmlWebpackPlugin({
      title: 'Обратная связь',
      filename: 'feedback.html',
      template: './src/feedback.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),

    new HtmlWebpackPlugin({
      title: 'Заказать звонок',
      filename: 'request-call.html',
      template: './src/request-call.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),

    new HtmlWebpackPlugin({
      title: 'Добро пожаловать',
      filename: 'final.html',
      template: './src/final.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    // Копируем картинки
    new CopyWebpackPlugin([
      {
        from: './src/img',
        to: 'img',
      },
    ])
  ],
};
