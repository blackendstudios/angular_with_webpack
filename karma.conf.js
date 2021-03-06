var path = require('path');

module.exports = function (config) {
   config.set({

      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',

      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['jasmine'],

      // list of files / patterns to load in the browser
      files: [{ pattern: 'spec.bundle.js', watched: false }],

      // list of files to exclude
      exclude: [],

      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
         'spec.bundle.js': ['webpack', 'sourcemap']
      },

      webpack: {
         // karma watches the test entry points
         // (you don't need to specify the entry option)
         // webpack watches dependencies

         // webpack configuration
         module: {
            devtool: 'inline-source-map',
            loaders: [
               {
                  loader: "babel",

                  exclude: [
                     path.resolve(__dirname, "node_modules")
                  ],
                  test: /\.jsx?$/
               },
               {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
               {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
               {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/}
            ]
         }
      },

      webpackMiddleware: {
         // webpack-dev-middleware configuration
         noInfo: true // prevent console spamming when running in Karma!
      },

      plugins: [
         require('karma-jasmine'),
         require('karma-chrome-launcher'),
         require('karma-sourcemap-loader'),
         require('karma-webpack')
      ],

      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['progress'],

      // web server port
      port: 9876,

      // enable / disable colors in the output (reporters and logs)
      colors: true,

      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,

      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,

      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['Chrome'],

      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false,

      // Concurrency level
      // how many browser should be started simultaneous
      concurrency: Infinity
   })
};
