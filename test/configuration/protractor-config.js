const path = require('path');
const yargs = require('yargs').argv;
const reporter = require('multiple-cucumber-html-reporter');
const junitReporter = require('cucumber-junit-convert');
const junitConvertOptions = {
    inputJsonFile: path.join(__dirname, '../reports/report.json'),
    outputXmlFile: path.join(__dirname, '../reports/junit_xml_report.xml')
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
        metadata: {
            browser: {
                name: 'chrome',
                version: '92'
            },
            device: 'Win10 laptop',
            platform: {
                name: 'Windows',
                version: 'Win10'
            }
        }
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts: {
        require: [path.resolve('./test/step_definitions/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: ['json:./test/reports/report.json', './node_modules/cucumber-pretty'],
        tags: yargs.tags || '@all'
    },

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            displayDuration: true,
            durationInMS: true,
            reportName: 'telerik-test.html',
            pageTitle: 'Telerik test'
        }
    }],

    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    },

    afterLaunch: function () {
        return junitReporter.convert(junitConvertOptions);
    }
};