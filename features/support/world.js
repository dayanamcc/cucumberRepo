// features/support/world.js
require('chromedriver')
var seleniumWebdriver = require('selenium-webdriver');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();
}

module.exports = function() {
  this.World = CustomWorld;
};
