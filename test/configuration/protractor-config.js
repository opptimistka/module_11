const path = require('path');
const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');

const reportOtions = {
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, '../reports/report.json'),
    output: path.join(__dirname, '../reports/cucumber-report.html'),
    reportSuitsAsSCenarios: true
};

exports.config = {
    allScriptsTimeout: 10000,
    getPageTimeout: 10000,
    specs: [path.resolve('./test/features/**/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox']
        },
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts: {
        require: [path.resolve('./test/step_definitions/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: ['json:./test/reports/report.json', './node_modules/cucumber-pretty'],
        tags: yargs.tags || '@smoke'
    },
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    },
    afterLaunch: () => {
        return reporter.generate(reportOtions);
    }
};