'use strict';
const {
    After
} = require('cucumber');

After(function (testcase) {
    return browser.takeScreenshot().then( function (screenshot) {
        let decodedImage = new Buffer.from(screenshot, 'base64');
        return this.attach(decodedImage, 'image/png');
    });
});