var webdriver = require('selenium-webdriver');

var creds = {
    login: 'agency-admin',
    pass: 'travel',
};

var xpaths = {
    logInput: 'Login',
    passInput: 'Password',
    submit: 'btnLogin',
};


module.exports = class {
    constructor(driver) {
        this.driver = driver;
    }

    autorization() {
        this.driver.wait(webdriver.until.elementLocated(webdriver.By.id(xpaths.logInput)), 3000)
            .then(function (element) {
                element.sendKeys(creds.login);
            });
        this.driver.wait(webdriver.until.elementLocated(webdriver.By.id(xpaths.passInput)), 3000)
            .then(function (element) {
                element.sendKeys(creds.pass);
            });
        this.driver.wait(webdriver.until.elementLocated(webdriver.By.id(xpaths.submit)), 3000)
            .then(function (element) {
                element.click();
            });
    }

};
