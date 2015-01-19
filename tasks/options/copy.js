module.exports = function( config ) {

  return {

    fonts: {
      expand: true,                     // Enable dynamic expansion.
      cwd: './src/fonts/',              // Src matches are relative to this path.
      src: [ '*.*' ],                   // Actual pattern(s) to match.
      dest: './build/fonts/'            // Destination path prefix.
    },

    modules: {
      files: [
        { './build/scripts/vendor/color.js': './node_modules/color/color-0.4.1.js' },
        { './build/scripts/vendor/jquery.dotdotdot.js': './node_modules/dotdotdot/src/js/jquery.dotdotdot.js' }
      ]
    }
  };

};
