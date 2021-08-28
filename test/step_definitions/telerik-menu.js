const {
  When,
  Then,
  setDefaultTimeout
} = require('cucumber');
const {
  expect
} = require('chai');
setDefaultTimeout(60000);

When('I open {string} url', function (url) {
  return browser.get(url);
});

Then('Page title should be {string}', async function (title) {
  const pageTitle = await browser.getTitle();
  expect(pageTitle).to.be.equal(title);
});

Then('I highlight {string}', async function (xpath) {
  return browser.executeScript('arguments[0].style.backgroundColor = "' + 'yellow' + '"', await browser.element(by.xpath(xpath)));
});

Then('I click {string} by xpath {string}', async function (element_name, xpath) {
  return await browser.element(by.xpath(xpath)).click();
});

When('I wait for {int} seconds', async function (time) {
  return browser.sleep(time * 1000);
});

Then('I check current landing page is matching the {string}', async function (expectedUrl) {
  const currentUrl = await browser.getCurrentUrl();
  expect(currentUrl).to.be.equal(expectedUrl);
});