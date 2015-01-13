module.exports = function( config ) {

  return {

    fonts: {
      expand: true,                 // Enable dynamic expansion.
      cwd: './src',                 // Src matches are relative to this path.
      src: [ 'fonts/*.*' ],         // Actual pattern(s) to match.
      dest: './build'               // Destination path prefix.
    },

    modules: {
      expand: true,                           // Enable dynamic expansion.
      cwd: './node_modules/',                 // Src matches are relative to this path.
      src: [ 'color/color-0.4.1.js' ],        // Actual pattern(s) to match.
      dest: './build/scripts/'                // Destination path prefix.
    }
  };

};
