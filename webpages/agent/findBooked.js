var webdriver = require('selenium-webdriver');

var xpaths = {
    bookField: 'ReservationNumber'
};


module.exports = class {
    constructor(driver) {
        this.driver = driver;
    }

    findBookedTrip(ReservNumber) {
        var self = this;
        this.driver.wait(webdriver.until.elementLocated(webdriver.By.id(xpaths.bookField)), 100000)
            .then(function (element) {
                var input = element;
                element.sendKeys(ReservNumber).then(function(){
                    input.sendKeys(webdriver.Key.ENTER);
                });
            });
    }
};