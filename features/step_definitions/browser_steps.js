// features/step_definitions/browser_steps.js
var seleniumWebdriver = require('selenium-webdriver');

module.exports = function () {

  this.setDefaultTimeout(60000);

  this.Given('I am on the Cucumber.js GitHub repository', function() {
      console.log("HELLO");
      return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master');
  });

  this.When('I click on {stringInDoubleQuotes}', function (text) {
    return this.driver.findElement({linkText: text}).then(function(element) {
      return element.click();
    });
  });

  this.Then('I should see {stringInDoubleQuotes}', function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 7000);
  });
};
