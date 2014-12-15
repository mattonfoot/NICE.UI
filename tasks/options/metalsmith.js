module.exports = function( config ) {

  return {
    generate: {
      options: {
        metadata: {
          title: 'NICE UI framework',
          description: config.pkg.description
        },

        plugins: {
          'metalsmith-markdown': {},
          'metalsmith-permalinks': {
            pattern: ':title'
          },
          'metalsmith-templates': {
            engine: 'handlebars',
            directory: 'templates'
          }
        }
      },

      src: './src',
      dest: './build'
    }
  };
}
