const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeDriver = require('chromedriver');
(async () => {
    chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriver.path).build());
    let driver = new Builder().forBrowser('chrome').build();
    await driver.get('https://www.google.com');
    const title = await driver.getTitle(); // => "Google"
    console.log({title});

    // timeout is in milliseconds
    driver.manage().setTimeouts({implicit: 500 });
    driver.manage().window().maximize();

    let searchBox = await driver.findElement(By.name('q'));
    let searchButton = await driver.findElement(By.name('btnK'));
    await searchBox.sendKeys('Selenium');
    // click action may need extra time to wait for sendKeys action
    await searchButton.click();

    const value = await driver.findElement(By.name('q')).getAttribute("value");
    console.log({value});

    await driver.quit();
})();

