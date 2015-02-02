module.exports = function( config ) {

  var path        = require('path');
  var Handlebars  = require('handlebars');

  Handlebars.registerHelper('relative_path', relativePathHelper);

  var options = {};

  options.development = {
    options: {
      metadata: {
        title: config.pkg.name,
        description: config.pkg.description,
        version: config.pkg.version,
        root: '/'
      },

      plugins: {
        'metalsmith-markdown': { },
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
        //'metalsmith-permalinks': {},
        'metalsmith-templates': {
          engine: 'handlebars',
          directory: './src/templates',
          partials: loadPartials( './src/templates' )
        }
      }
    },

    src: './src/docs',
    dest: './build'

  };

  options.publish = {
    options: {
      metadata: {
        title: config.pkg.name,
        description: config.pkg.description,
        version: config.pkg.version,
        root: '/NICE.UI/'
      },

      plugins: {
        'metalsmith-markdown': { },
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
        //'metalsmith-permalinks': {},
        'metalsmith-templates': {
          engine: 'handlebars',
          directory: './src/templates',
          partials: loadPartials( './src/templates' )
        }
      }
    },

    src: './src/docs',
    dest: './publish'
  };

  return options;


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
    , object = {}
    , includes = '/includes/';

    glob.sync('*', { cwd: path + includes })
    .forEach(function( option ) {
      var key = option.replace( /\.html$/, '' );
      object[ key ] = includes + key;
    });

    return object;
  }
}
