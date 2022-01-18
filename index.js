const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeDriver = require('chromedriver');
(() => {
    chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriver.path).build());
    let driver = new Builder().forBrowser('chrome').build();
    driver.get('https://www.google.com');
})();

