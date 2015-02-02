module.exports = function( config ) {

  return {
    development: [
      'build',
      'temp',
      'validation-report.json',
      'validation-status.json'
    ],

    distribute: [
      'dist',
      'temp',
      'validation-report.json',
      'validation-status.json'
    ],

    publish: [
      '.grunt',
      'publish',
      'temp',
      'validation-report.json',
      'validation-status.json'
    ]
  };

};
