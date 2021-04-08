import {Configuration} from 'webpack';
import path from 'path';

const mainProcessConfig: Configuration = {
  mode: 'development',
  target: 'electron-main',
  entry: path.resolve(__dirname, '../src/main/index.ts'),
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'main.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  node: {
    __dirname: false,
    __filename: false
  },
};

export default mainProcessConfig;
