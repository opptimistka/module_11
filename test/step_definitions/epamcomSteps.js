const {When, Then, setDefaultTimeout} = require('cucumber');
const { browser } = require('protractor');
const {expect} = require('chai');
//const {expect} = require('mocha');
setDefaultTimeout(50000);

When('I open {string} url', async function(url) {
    return await browser.get(url);
  });

// Then(/^Page title should be "([^"]*)"$/, async function(title) {
//     const pageTitle = await browser.getTitle();
//     expect(pageTitle).to.be.equal(title);
//   });

// When('I wait "{int}" seconds', function(timeInSeconds) {
//     return browser.sleep(timeInSeconds * 1000);
//   });
  
