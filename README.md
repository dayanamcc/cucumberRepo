# Cucumber
  This document refers to a run-up, for working with cucumberJS framework on MS-DOS.  
  [webside cucumber](https://cucumber.io/)   
  [nodeJS_example](https://github.com/cucumber/cucumber-js/blob/master/docs/nodejs_example.md)   
  [on-line_example](http://cucumber.github.io/cucumber-js/)      
  [Project TuteCumber](https://github.com/denford/tutecumber)
## Preparing environment
#### For Windows
* Donwload [node](https://nodejs.org/en/) and install it
  (normally you will find Node under: C:\Program Files\nodejs)


* Download/install some usefull code-editor like [atom](https://atom.io/)

    Usefulls Add-ons for Atom: seti-icons,minimap, highlight selected, linter, atom-beautif, open-recent.    
    Go to File > Settings tab then search for a package by name, or install from the command line using:
          apm install "package-name":


* Install [github desktop](https://desktop.github.com/) (not mandatory)

* To initialize a project using npm. Create a project-name folder, open console go inside and run:
      npm init -y
* install as a development dependency of your application with:       
      npm install --save-dev cucumber
* OR install cucumber globally :
      npm install -g cucumber
      (C:\Users\"NameUser"\AppData\Roaming\npm)

Cucumber.js includes a executable file to run the FEATURES. If you installed Cucumber.js globally, you may run it with: (for Windows)

    $ cucumber-js    <---(windows)


If you installed Cucumber locally, you may need to specify the path to the executable:

``` shell
$ ./node_modules/.bin/cucumber-js
```
For Windows users: Use cucumber-js or cucumberjs instead of cucumber.js. The latter is causing the operating system to invoke JScript instead of Node.js, because of the file extension.

* install selenium-webdriver and chromedriver
      npm install --save-dev selenium-webdriver@3.0.1 chromedriver@2.25.1

## Example Code

This example refers to an example code documented on [cucumber-js](https://github.com/cucumber/cucumber-js/blob/master/docs/nodejs_example.md) but addapted to MS-DOS environment.

  Add the following files into project:

        features/documentation.feature
        features/support/world.js
        features/step_definitions/hooks.js
        features/step_definitions/browser_steps.js
Detailed code

```gherkin
    # features/documentation.feature
    Feature: Example feature
      As a user of Cucumber.js
      I want to have documentation on Cucumber
      So that I can concentrate on building awesome applications

      Scenario: Reading documentation
        Given I am on the Cucumber.js GitHub repository
        When I click on "CLI"
        Then I should see "Running specific features"
```

```javascript
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
```

```javascript
    // features/step_definitions/hooks.js
    module.exports = function () {
      this.After(function() {
        return this.driver.quit();
      });
    };
```

```javascript
    // features/step_definitions/browser_steps.js
    var seleniumWebdriver = require('selenium-webdriver');

    module.exports = function () {
      this.setDefaultTimeout(60000);
      this.Given('I am on the Cucumber.js GitHub repository', function() {
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
        return this.driver.wait(condition, 5000);
      });
    };
```
  Run command:

      cucumber-js
Results:

```gherkin
Feature: Example feature

As a user of Cucumber.js
I want to have documentation on Cucumber
So that I can concentrate on building awesome applications

Scenario: Reading documentation
√ Given I am on the Cucumber.js GitHub repository
√ When I click on "CLI"
√ Then I should see "Running specific features"

1 scenario (1 passed)
3 steps (3 passed)
0m07.641s
```
