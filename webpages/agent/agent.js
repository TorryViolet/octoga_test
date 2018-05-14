var loginForm = require('.//login');
var bookFind = require('.//findBooked');


module.exports = class {
    constructor(driver) {
        this.loginF = new loginForm(driver);
        this.bookFind = new bookFind(driver);
    }
};

