var Driver = require('../../tools/Tools');
var test = require('selenium-webdriver/testing');
var agent = require('../../webpages/agent/agent');

var browser = Driver.runDriver();

test.describe('Похуй', function () {
    this.timeout(90000);
    this.bail(true);

    var agentSite = new agent(browser);

    //var env = process.env.reservID;
    

    test.describe('Форма поиска', function () {
        test.it('Go to the site', function () {
            browser.get("http://htl-agent-rc.avia-centr.ru");
            //console.log(reservID);
        });

        test.it('Заполняем логин', function () {
            agentSite.loginF.autorization();
        });

        test.it('findBookedTrip', function () {
            agentSite.bookFind.findBookedTrip('665896284');
        });
    });



});
