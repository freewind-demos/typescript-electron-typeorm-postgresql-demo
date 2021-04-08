import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const rendererProcessConfig: Configuration = {
  mode: 'development',
  target: 'electron-renderer',
  entry: path.resolve(__dirname, '../src/renderer/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist/renderer'),
    filename: 'index.bundle.js',
  },
  resolve: {
    mainFields: ['main'],
    extensions: ['.ts', '.tsx', '.js'],
    // !!! The default value is `browser`, we have to override it to let webpack ignore
    // the `browser` fields in typeorm package.json
    aliasFields: ['main']
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
      ],
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      resolve: {
        mainFields: ["main"]
      }
    }],
  },
  plugins: [
    new HtmlWebpackPlugin() as any,
  ],
};

export default rendererProcessConfig;
