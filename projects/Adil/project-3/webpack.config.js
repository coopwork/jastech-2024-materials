const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  // Плагин для генерации HTML-файла с подключёнными бандлами

module.exports = {
  mode: 'development',  // Определяет режим сборки (development/production)
  
  entry: './src/index.tsx',  // Входной файл приложения
  
  output: {
    path: path.resolve(__dirname, 'dist'),  // Папка, в которую будет собираться проект
    filename: '[name].[contenthash].bundle.js',  // Формат имени бандла с хешем (для кэширования)
    assetModuleFilename: 'assets/[name][hash][ext]'  // Формат имени для ассетов (например, изображений)
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,  // Обрабатывает файлы .ts и .tsx
        exclude: /node_modules/,  // Исключает папку node_modules
        use: [
          'babel-loader',  // Преобразует TypeScript и современный JS в старый JS
        ],
      },
      {
        test: /\.svg/,  // Обрабатывает SVG-файлы
        type: 'asset/resource'  // Загружает их как отдельные файлы в папку assets
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'  // Использует шаблон HTML, в который автоматически добавит бандлы
    })
  ],

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],  // Позволяет использовать `import` без указания полного пути
    extensions: ['.js', '.jsx', '.ts', '.tsx'],  // Позволяет не указывать расширения при импортах
  },

  devtool: 'inline-cheap-source-map',  // Карты исходного кода (удобно для отладки)

  context: __dirname,  // Контекст выполнения
  target: 'web',  // Указывает, что сборка предназначена для браузера

  devServer: {
    contentBase: path.join(__dirname, 'dist'),  // Папка, из которой раздаётся содержимое
    port: 3000,  // Сервер запустится на порту 3000
    compress: true,  // Включает gzip-сжатие
    hot: true  // Включает hot reload (автообновление при изменениях в коде)
  }
};