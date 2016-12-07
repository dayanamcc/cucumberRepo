# Cucumber
  this document refers to run-up, for working with cucumber framework.   
  [cucumber](https://cucumber.io/)   
  [information](https://github.com/cucumber/cucumber-js/blob/master/docs/nodejs_example.md)   
  [on-line example](http://cucumber.github.io/cucumber-js/)
## Preparing environment
#### For Windows
* install [node](https://nodejs.org/en/)
  (C:\Program Files\nodejs)


* install code-editor [atom](https://atom.io/)

    Add-ons for Atom     
    Open the + Install panel in the Settings tab then search for a package by name, or install from the command line using apm install "package-name":
    seti-icons,minimap, highlight selected, linter, atom-beautif, open-recent.

* install [github desktop](https://desktop.github.com/).

* create the folder project, go inside and run:
      npm init -y



* install as a development dependency of your application with:       
      npm install --save-dev cucumber

Cucumber.js includes a executable file to run the features. If you installed Cucumber.js globally, you may run it with:

```shell
$ cucumber.js
```

If you installed Cucumber locally, you may need to specify the path to the executable:

``` shell
$ ./node_modules/.bin/cucumber.js
```
Note to Windows users: Use cucumber-js or cucumberjs instead of cucumber.js. The latter is causing the operating system to invoke JScript instead of Node.js, because of the file extension.

* install selenium-webdriver and chromedriver
      npm install --save-dev selenium-webdriver@3.0.1 chromedriver@2.25.1

## Example Code
  Add the following files into project:

        features/documentation.feature
        features/support/world.js
        features/step_definitions/hooks.js
        features/step_definitions/browser_steps.js

  Run command: (linux)

      ./node_modules/.bin/cucumber-js
