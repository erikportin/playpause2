/* jshint node: true */
module.exports = (environment) => {
    let ENV = {
        mockackend: 'mock',
        modulePrefix: 'play-pause',
        environment: environment,
        rootURL: null,
        emberPouch: {
            localDb: 'playpause-local'
        },
        locationType: process.env.EMBER_CLI_ELECTRON ? 'hash' : 'auto',
        EmberENV: {
            FEATURES: {}
        },
        APP: {}
    };
    if (environment === 'development') {
    }
    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';
        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;
        ENV.APP.rootElement = '#ember-testing';
        ENV['ember-cli-mirage'] = {
            enabled: true
        };
    }
    if (environment === 'production') {
    }
    if (environment === 'development') {
        ENV['ember-cli-mirage'] = {
            enabled: false
        };
    }
    return ENV;
};
