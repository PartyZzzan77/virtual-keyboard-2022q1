const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const ESLintPlugin = require("eslint-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const babelOptions = (preset) => {
  const opts = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

// const jsLoaders = () => {
//   const loaders = [{
//     loader: 'babel-loader',
//     options: babelOptions()
//   }]

//   if (isDev) {
//     loaders.push('eslint-loader')
//   }

//   return loaders
// };
const plugins = () => {
  const base = [
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "Virtual Keyboard",

      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/favicon.png"),
          to: path.resolve(__dirname, "./dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
    new ESLintPlugin(),
  ];
  if (isProd) {
    base.push(new BundleAnalyzerPlugin());
  }
  return base;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",

  entry: {
    main: ["@babel/polyfill", "./index.js"],
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".html", ".js", ".css", ".json", ".png"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@models": path.resolve(__dirname, "src/assets/models"),
      "@images": path.resolve(__dirname, "src/assets/images"),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      { test: /\.(png|jpg|gif)$/i, type: "asset/resource" },
      { test: /\.xml$/, use: ["xml-loader"] },
      { test: /\.csv$/, use: ["csv-loader"] },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: babelOptions(),
          },
        ],
      },
    ],
  },
  devtool: isDev ? "source-map" : false,
  plugins: plugins(),
};
