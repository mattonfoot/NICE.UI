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

        pkg: grunt.file.readJSON('package.json')

      , env: process.env

    };

    grunt.util._.extend(config, loadConfig( './tasks/options/', config ));

    grunt.initConfig(config);

    // load grunt tasks
    require('load-grunt-tasks')(grunt);

    // local tasks
    grunt.loadTasks('tasks');




    // clean
    // metalsmith auto cleans the build directory

    // test
    grunt.registerTask(
          'serve'
        , 'Starts a dev web server on the first available port starting from 8000 with the build folder as the root.'
        , [ 'connect:dev' ]
    );

    // build
    grunt.registerTask(
          'generate'
        , 'generates the documentation site'
        , [ 'metalsmith:generate', 'copy' ]
    );

    grunt.registerTask(
          'default'
        , 'generates the site, starts a connect server and then watches for changes'
        , [ 'generate', 'watch' ]
    );

};
