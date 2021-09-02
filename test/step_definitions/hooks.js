'use strict';
const {
    After
} = require('cucumber');
const {
    browser
} = require('protractor');

After(function (testcase) {
    return browser.takeScreenshot().then((screenshot) => {
        const decoded = new Buffer.from(screenshot, 'base64');
        return this.attach(decoded, 'image/png');
    });

});