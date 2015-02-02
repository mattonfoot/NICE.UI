module.exports = function( config ) {

  return {

    collect: {
      files: [
        {
          expand: true,
          cwd: './src/',
          src: [ 'fonts/**/*.*' ],
          dest: './temp/'
        },
        {
          expand: true,
          cwd: './src/',
          src: [ 'scripts/**/*.js' ],
          dest: './temp/'
        },
        { './temp/scripts/vendor/color.js': './node_modules/color/color-0.4.1.js' },
        { './temp/scripts/vendor/jquery.dotdotdot.js': './node_modules/dotdotdot/src/js/jquery.dotdotdot.js' },
        { './temp/scripts/vendor/jquery.js': './node_modules/jquery/dist/jquery.js' },
        { './temp/scripts/vendor/html5shiv.js': './node_modules/html5shiv/dist/html5shiv.js' }
      ]
    },


    development: {
      files: [
      {
        expand: true,
        cwd: './temp/',
        src: [ '**/*.*' ],
        dest: './build/'
      }
      ]
    },


    distribute: {
      files: [
      {
        expand: true,
        cwd: './temp/',
        src: [ '**/*.*' ],
        dest: './dist/'
      }
      ]
    },


    publish: {
      files: [
      {
        expand: true,
        cwd: './temp/',
        src: [ '**/*.*' ],
        dest: './publish/'
      }
      ]
    }

  };

};
