const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

// Using html-bundler-webpack-plugin instead of standard html-webpack-plugin
// Big reason is easy handlebars template support + ability to resolve assets within templates
// https://github.com/webdiscus/html-bundler-webpack-plugin

module.exports = (env, argv) => {
  const IS_PRODUCTION = argv.mode === 'production';

  const config = {
    mode: IS_PRODUCTION ? 'production' : 'development',
    devtool: IS_PRODUCTION ? false : 'inline-source-map',

    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },

    plugins: [
      new Dotenv(),
      new HtmlBundlerPlugin({
        entry: {
          index: './src/index.hbs',
        },
        js: {
          filename: '[name].[contenthash:8].js',
        },
        css: {
          filename: '[name].[contenthash:8].css',
        },
        loaderOptions: {
          preprocessor: 'handlebars',
          preprocessorOptions: {
            partials: [
              'src/partials',
              path.join(__dirname, 'src/partials')
            ],
          },
        },
        preload: [
          {
            // I only use woff2 nowadays... https://caniuse.com/?search=woff2
            test: /\.woff2?$/,
            attributes: {
              as: 'font',
              crossorigin: true,
            },
          },
        ],
        minify: IS_PRODUCTION,
        minifyOptions: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        },
      }),
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(css|scss|sass)$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: false,
              },
            },
            {
              loader: 'postcss-loader',
              options:
              {
                sourceMap: false,
                postcssOptions: {
                  plugins: [
                    postcssPresetEnv(),
                    autoprefixer(),
                  ],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext][query]',
          },
        },
        {
          test: /\.(ico|svg|png|webp|avif|jpg|pdf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[hash:8][ext][query]',
          },
        },
      ],
    },
  };

  if (!IS_PRODUCTION) {
    config.devServer = {
      static: {
        directory: path.join(__dirname, '/dist'),
      },
      watchFiles: {
        paths: ['src/**/*.*'],
        options: {
          usePolling: true,
        },
      },
      compress: true,
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    };
  } else {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          minify: TerserPlugin.esbuildMinify,
          extractComments: false,
        }),
        new CssMinimizerPlugin({
          minimizerOptions: [
            {
              preset: require.resolve('cssnano-preset-advanced'),
            },
          ],
          minify: [
            CssMinimizerPlugin.cssnanoMinify,
            CssMinimizerPlugin.cleanCssMinify,
          ],
        }),
      ],
      splitChunks: {
        cacheGroups: {
          scripts: {
            test: /\.js$/,
            chunks: 'all'
          }
        }
      },
    };
  }

  return config;
};
