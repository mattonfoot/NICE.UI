module.exports = function( config ) {

    return {

        dev: {

            options: {
                port: 9001,
                useAvailablePort: true,
                keepalive: true,
                base: [ './build' ],
                open: 'http://remotehost:9001'
            }

        }

    };

};
