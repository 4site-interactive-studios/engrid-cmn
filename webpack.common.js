const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.ts",
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Engaging Networks - Page Type Selection",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "CMN - Engaging Networks Page - Donation",
      filename: "page-donation-cmn.html",
      template: "./src/templates/page-donation-cmn.html",
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Engaging Networks Page - Donation",
      filename: "page-donation.html",
      template: "./src/templates/page-donation.html",
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Ocean Conservancy - Engaging Networks Page - Donation",
      filename: "page-donation-oc.html",
      template: "./src/templates/page-donation-oc.html",
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "RFK HR - Engaging Networks Page - Advocacy",
      filename: "page-advocacy-rfkhr.html",
      template: "./src/templates/page-advocacy-rfkhr.html",
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "RFK HR - Engaging Networks Page - Donation",
      filename: "page-donation-rfkhr.html",
      template: "./src/templates/page-donation-rfkhr.html",
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Ocean Conservancy - Engaging Networks Page - Donation",
      filename: "page-donation-applepay.html",
      template: "./src/templates/page-donation-applepay.html",
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Engaging Networks Page - Sign Up",
      filename: "page-sign-up.html",
      template: "./src/templates/page-sign-up.html",
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Engaging Networks Email - eCard",
      filename: "email-ecard.html",
      template: "./src/templates/email-ecard.html",
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
      { test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/preset-typescript"],
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread",
              "@babel/plugin-transform-runtime",
            ],
          },
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", '.css'],
  },
};
