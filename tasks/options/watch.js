module.exports = function( config ) {

    return {

        src: {
            files: [ './src/**/*.*', './templates/**/*.*'],
            tasks: [ 'generate' ]
        }

    };

};
