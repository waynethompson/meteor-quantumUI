Package.describe({
  name: 'waynethompson:quantum-ui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A package for the QuantumUI component library',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/waynethompson/meteor-quantumUI.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  //api.use('ecmascript');
  //api.use('angular');
  //api.use('angular-animate');
  api.addFiles([
    './js/quantumui-all.js'
        ],
        ['client']);

  api.addAssets([
    'css/quantumui.css',
    'css/addon/effect-light.min.css',
    'css/bootstrap-quantumui.css'
  ], ['client']);

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('waynethompson:quantum-ui');
  api.addFiles('quantum-ui-tests.js');
});
