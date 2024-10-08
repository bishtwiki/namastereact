const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: './src/index.html'
     }),
   ],
   output: {
     filename: 'index.bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };
