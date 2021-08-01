const path = require('path');

module.exports = {
  entry: './src/todo_Main.js',
 devtool: 'inline-source-map',
  output: {
    filename: 'final_todo.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
