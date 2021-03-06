// Karma configuration

var webpack = require("webpack");
var RewirePlugin = require("rewire-webpack");

var configSettings = {
	"normal": {},
	"uglified": {
		// plugins: [
		// 	new webpack.optimize.UglifyJsPlugin()
		// ]
	}
};

module.exports = function(config) {
  config.set({

	// base path, that will be used to resolve files and exclude
	basePath: '',


	// frameworks to use
	frameworks: ['jasmine'],


	// list of files / patterns to load in the browser
	files: [
	  // {pattern: '.test/tests.webpack.js', watched: false },
	  {pattern: 'test/tests.bundle.js', watched: false },
	],


	// list of preprocessors
	preprocessors: {
	  'test/tests.bundle.js': ['webpack','coverage']
	},

	coverageReporter: {
      type : 'html',
      dir : 'test/coverage/'
    },


	webpack: {
		resolve: {
			extensions: ["", ".js", ".jsx"]
		},
		module: {
			loaders: [
				{
		            test: /\.js$/,
		            exclude: /node_modules/,
		            loaders: ['babel-loader'],
	        	}, {
		            test: /\.scss$/,
		            // loader: ExtractTextPlugin.extract('css!sass')
		            loaders: ['style', 'css','sass']
		        }
        	]
		},
		plugins: [
    	    new RewirePlugin()
	    ],
		watch: true,
	},


	webpackMiddleware: {
		noInfo: true,
		stats: {
			colors: true
		}
	},


	// test results reporter to use
	// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
	reporters: ['spec','coverage'],


	// web server port
	port: 9876,


	// enable / disable colors in the output (reporters and logs)
	colors: true,


	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: true,


	// Start these browsers, currently available:
	// - Chrome
	// - ChromeCanary
	// - Firefox
	// - Opera (has to be installed with `npm install karma-opera-launcher`)
	// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
	// - PhantomJS
	// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
	browsers: ['PhantomJS'],


	// If browser does not capture in given timeout [ms], kill it
	captureTimeout: 60000,


	// Continuous Integration mode
	// if true, it capture browsers, run tests and exit
	singleRun: true,


	// List plugins explicitly, since autoloading karma-webpack
	// won't work here
	plugins: [
		require("karma-webpack"),
		require("karma-jasmine"),
		require("karma-spec-reporter"),
		require("karma-coverage"),
		// require("karma-chrome-launcher"),
		require("karma-phantomjs-launcher"),
	]
  });
};