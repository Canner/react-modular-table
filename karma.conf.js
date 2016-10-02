var path = require('path');

module.exports = function(config) {
  config.set({
    autoWatch: true,
    browsers: ['Chrome'],
    // singleRun: true,
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    customLaunchers: {
      Chrome_travis_ci: { // eslint-disable-line
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    reporters: ['dots'],
    webpack: {
      externals: {
        'react/lib/ReactContext': 'window',
        'jsdom': 'window',
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loaders: ['babel'],
            exclude: path.resolve(__dirname, "node_modules")
          }
        ]
      },
      resolve: {
        alias: {
          ModularTable: path.join(__dirname, './src/')
        }
      }
    },
    webpackServer: {
      noInfo: true
    }
  });

  if (process.env.TRAVIS) {
    config.browsers = ['Chrome_travis_ci'];
  }
};
