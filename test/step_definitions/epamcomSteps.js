const {When, Then, setDefaultTimeout} = require('cucumber');
const { browser } = require('protractor');
const {expect} = require('chai');
const {expect} = require('mocha');
setDefaultTimeout(60000);

When(/^I open epam.com$/, function() {
    return browser.get('https://epam.com/');
});

Then(/^Page title should be 'EPAM | Enterprise Software Development, Design & Consulting'$/, async function () {
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.be.equal('EPAM | Enterprise Software Development, Design & Consulting');
});

When(/^I wait for 10 seconds$/, function() {
    return browser.sleep(10000);
});
