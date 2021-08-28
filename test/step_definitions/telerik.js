const {
  When,
  Then,
  setDefaultTimeout
} = require('cucumber');
const {
  expect
} = require('chai');
setDefaultTimeout(60000);

/// menu feature steps

When('I open {string} url', function (url) {
  return browser.get(url);
});

Then('Page title should be {string}', async function (title) {
  const pageTitle = await browser.getTitle();
  expect(pageTitle).to.be.equal(title);
});

Then('I highlight {string} by xpath {string}', async function (element_name, xpath) {
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


/// search feature steps

Then('I highlight Search field by xpath {string}', async function (xpath) {
  return browser.executeScript('arguments[0].style.backgroundColor = "' + 'yellow' + '"', await browser.element(by.xpath(xpath)));
});

Then('I click search field by xpath {string}', async function (xpath) {
  return await browser.element(by.xpath(xpath)).click();
});

When('I put mouse cursor to search field by xpath {string}', async function (xpath) {
  return await browser.element(by.xpath(xpath)).click();
});

Then('I put the keyword {string} to the field', async function (keyword) {
  return await browser.actions().sendKeys(keyword).perform();
});

Then('I hit Enter', function () {
  return browser.actions().sendKeys(protractor.Key.ENTER).perform();
});

Then('I verify search results are non-zero by xpath {string}', function (xpath) {
  expect(element(by.xpath('xpath')).isPresent()).to.be.false();
});