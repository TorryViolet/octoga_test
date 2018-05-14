var webdriver = require('selenium-webdriver');

class Tools {
    /**
     * Метод возвращает экземпляр вебдрайвера
     * 
     * @param {string} browser - название браузера (firefox, chrome...)
     */
    static runDriver(browser) {
        browser = browser || 'chrome';

        switch (browser) {
            case 'firefox':
                // var driver = new webdriver.Builder()
                //     .forBrowser('firefox')
                //     .build();
                // break;

                var capabilities = webdriver.Capabilities.firefox();
                var firefoxOptions = {
                    'args': ['--disable-fill-on-account-select', '--no-sandbox']
                };
                capabilities.set('firefoxOptions', firefoxOptions);
                var driver = new webdriver.Builder()
                    .forBrowser('firefox')
                    .withCapabilities(capabilities)
                    .build();
                break;

            default:
                var chromeCapabilities = webdriver.Capabilities.chrome();
                var chromeOptions = {
                    'args': ['--disable-fill-on-account-select', '--no-sandbox']
                };
                chromeCapabilities.set('chromeOptions', chromeOptions);
                driver = new webdriver.Builder()
                    .forBrowser(browser)
                    .withCapabilities(chromeCapabilities)
                    .build();
                break;
        }
        return driver;
    }
}


module.exports = Tools;