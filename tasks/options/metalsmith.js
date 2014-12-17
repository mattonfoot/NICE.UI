module.exports = function( config ) {

  return {
    generate: {
      options: {
        metadata: {
          title: config.pkg.name,
          description: config.pkg.description,
          version: config.pkg.version
        },

        plugins: {
          'metalsmith-less': {
            pattern: 'styles/*.less',
            parse: {
              paths: [ './src/styles' ]
            }
          },
          'metalsmith-markdown': { },
          'metalsmith-permalinks': {
            pattern: ':section-:title'
          },
          'metalsmith-templates': {
            engine: 'handlebars',
            directory: 'templates',
            partials: loadPartials(  )
          }
        }
      },

      src: './src',
      dest: './build'
    }
  };






  // helper function to load task configs

  function loadPartials( path ) {
    var glob = require( 'glob' )
    , object = {};

    glob.sync('*', { cwd: './templates/includes/' })
    .forEach(function( option ) {
      var key = option.replace( /\.html$/, '' );
      object[ key ] = '/includes/' + key;
    });

    return object;
  }
}
