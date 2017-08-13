/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });

  app.import('bower_components/fullpage.js/dist/jquery.fullpage.min.js');
  app.import('bower_components/fullpage.js/dist/jquery.fullpage.min.css');

  return app.toTree();
};
