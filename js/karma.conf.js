module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    // included: Description of :included. Should the files be included
    // in the browser using <script> tag? Use false if you wanna load them
    // manually, eg. using Require.js.
    files = ["lib/" + component + "/**/" + "\.js"].forEach(function() {
    });
    files: [
      {pattern: 'lib/cell/**/*.js', included: true},
      {pattern: 'spec/cell/**/*([._][Ss]pec).js', included: true},
      // {pattern: 'lib/index.js', included: true},
      // {pattern: 'lib/**/*.js', included: true},
    ],

    // list of files to exclude
    // Important. Use Mocha's --verbose or --debug to see exactly what files are
    // loaded for testing. I.e., you don't want to include third party build-related
    // files used only internally but that package and should not interhere here.
    exclude: [
    ],

    // preprocessor matching files before serving to browser
    // Others include coffee, https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'lib/**/!(*[M]ock|*_spec)\.js': ['coverage'],
    //  'src/form/**/!(*Mock|*_spec).js': ['coverage']
    },

    // repoter values: dots, progress, spec,
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'progress',
      ' spec',
    ],

    // optionally, configure the reporter
    coverageReporter: {
      type : 'text-summary'
    },

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
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
