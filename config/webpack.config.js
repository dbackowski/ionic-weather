var dotenvConfig = require('dotenv').config();
var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var ionicWebpackFactory = require(process.env.IONIC_WEBPACK_FACTORY);
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');
var env = process.env.IONIC_ENV;

function getPlugins() {
  var plugins = [
    new webpack.DefinePlugin({
      'process.env': _(process.env)
                    .pick(_.keys(dotenvConfig.parsed))
                    .mapValues((v) => (JSON.stringify(v)))
                    .value(),
      'isProd': env === 'prod'
    })
  ];
  // for dev builds, use our custom environment
  return [
    ...plugins,
    ionicWebpackFactory.getIonicEnvironmentPlugin()
  ];
}

useDefaultConfig[env].plugins = getPlugins();

module.exports = function () {
  return useDefaultConfig;
};