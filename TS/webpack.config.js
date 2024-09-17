const path = require('path');

module.exports = {
  entry: './src/index.ts',  // Ponto de entrada
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Extensões a resolver
  },
  output: {
    filename: 'bundle.js',  // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'),  // Diretório de saída
  },
  mode: 'development'  // Modo de build (pode ser 'production' ou 'development')
};
