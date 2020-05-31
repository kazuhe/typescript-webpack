const path = require('path'); // node.jsの組込メソッド

module.exports = {

  // 読込root
  entry: './src/index.ts',

  // Source Map の種類
  devtool: 'inline-source-map',

  // production or development
  mode: 'development',

  // ファイルの扱いを指定
  module: {
    rules: [{
      test: /\.ts$/, // 対象ファイル
      use: 'ts-loader',
      exclude: /node_modules/, // 対象外ファイル
    }],
  },

  // importする時に拡張子を左から順に補完
  resolve: {
    extensions: [ '.ts', '.js' ],
  },

  // 出力先
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist', 'js')
  }

}