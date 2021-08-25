const path = require('path');
const {
    browser
} = require('protractor');
exports.config = {
    allScriptsTimeout: 10000,
    getPageTimeout: 10000,
    specs: [path.resolve('./test/features/**/*.feature')],
    // specs: ['../features/epamcom.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox', '--start-fullscreen']
        },
        'goog:chromeOptions': {
            w3c: false
        },
        edgeOptions: {
            w3c: false
        },
        disableChecks: true,
        directConnect: true,
        cucumberOpts: {
            require: [path.resolve('./test/step_definitions/**/*.js')],
            //            ignoreUncaughtExceptions: true,
            //            format: ['json:./test/reports/report.json'],
            tags: '@epam'
        },
        onPrepare: () => {
            browser.waitForAngularEnabled(false);
        },
        onPrepare: () => {
            //            browser.manage().window().maximize()
            browser.manage().window().setSize(1920, 1080);
        }
    }
}