Package.describe({
  name: 'cherbst:bidiweb',
  summary: 'Bidiweb packaged for Meteor',
  version: '1.0.0',
  git: 'https://github.com/cherbst/meteor-bidiweb.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles([
      'bidiweb/bidi_helpers.js',
      'bidiweb/bidiweb.js'], 'client');
});
