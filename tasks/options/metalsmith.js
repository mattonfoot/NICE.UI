module.exports = function( config ) {

  var path        = require('path');
  var Handlebars  = require('handlebars');

  Handlebars.registerHelper('relative_path', relativePathHelper);

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
          //'metalsmith-permalinks': {},
          'metalsmith-navigation': {
            primary:{
              sortBy: 'nav_sort',
              filterProperty: 'nav_groups',
              mergeMatchingFilesAndDirs: true
            },
            footer: {
              sortBy: 'nav_sort',
              filterProperty: 'nav_groups',
              mergeMatchingFilesAndDirs: true
            }
          },
          'metalsmith-templates': {
            engine: 'handlebars',
            directory: 'templates',
            partials: loadPartials()
          }
        }
      },

      src: './src',
      dest: './build'
    }
  };




  function relativePathHelper( current, target ) {
    // normalize and remove starting slash from path
    if(!current || !target){
      return '';
    }
    current = path.normalize(current).slice(0);
    target = path.normalize(target).slice(0);
    current = path.dirname(current);
    return path.relative(current, target);
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
