module.exports = function( grunt )
{
    "use strict";

    // helper function to load task configs

    function loadConfig( path, config ) {
        var glob = require( 'glob' )
          , object = {}
          , key;

        glob.sync('*', { cwd: path })
            .forEach(function( option ) {
                key = option.replace( /\.js$/, '' );
                object[key] = require( path + option )( config );
            });

        return object;
    }

    // actual config

    var config = {
      pkg: grunt.file.readJSON('package.json'),
      env: process.env
    };

    grunt.util._.extend(config, loadConfig( './tasks/options/', config ));

    grunt.initConfig(config);

    // load grunt tasks
    require('load-grunt-tasks')(grunt);

    // local tasks
    grunt.loadTasks('tasks');




    // clean
    // cleans the build directory

    grunt.registerTask(
          'serve'
        , 'Starts a dev web server on the first available port starting from 8000 with the build folder as the root.'
        , [ 'connect:dev' ]
    );

    grunt.registerTask(
        'distribute'
      , 'Builds and collates the distributable parts of the package'
      , [ 'clean:distribute', 'less:distribute', 'copy:collect', 'copy:distribute' ]
    );

    grunt.registerTask(
        'generate'
      , 'Generates the documentation site'
      , [ 'clean:development', 'metalsmith:generate', 'less:development', 'copy:collect', 'copy:development' ]
    );

    grunt.registerTask(
          'publish'
        , 'Publishes the generated documentation website to github.io'
        , [ 'clean:publish', 'metalsmith:publish', 'less:publish', 'copy:collect', 'copy:publish', 'gh-pages' ]
    );

    grunt.registerTask(
          'default'
        , 'generates the site, starts a connect server and then watches for changes'
        , [ 'metalsmith:generate', 'less:development', 'copy:collect', 'copy:development', 'watch' ]
    );

};
