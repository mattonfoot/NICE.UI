module.exports = function( config ) {

  return {

    options: {
      paths       : [ './src/styles' ],
      compress : true,
      cleancss : true,
      ieCompat : false,
      optimization: 2
    },

    distribute: {
      files: [{
        expand: true,                     // Enable dynamic expansion.
        cwd: './src/styles/',             // Src matches are relative to this path.
        src: [ '*.less' ],                   // Actual pattern(s) to match.
        dest: './dist/styles/',            // Destination path prefix.,
        ext: '.css'
      }]
    },

    development: {
      options: {
        compress : false,
        yuicompress: false,
        cleancss : false
      },

      files: [{
        expand: true,                     // Enable dynamic expansion.
        cwd: './src/styles/',              // Src matches are relative to this path.
        src: [ '*.less' ],                   // Actual pattern(s) to match.
        dest: './build/styles/',            // Destination path prefix.,
        ext: '.css'
      }]
    }

  };

};
