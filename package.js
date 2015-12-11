Package.describe({
  name: 'rickerbh:bootstrap-combobox',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['jquery'], 'client');
  api.addFiles([
    'js/bootstrap-combobox.js',
    'css/bootstrap-combobox.css',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('rickerbh:bootstrap-combobox');
  api.addFiles('js/tests/unit/bootstrap-combobox.js');
});
