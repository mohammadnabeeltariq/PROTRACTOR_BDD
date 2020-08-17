exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',

      // Capabilities to be passed to the webdriver instance.
 
multiCapabilities: [
  {'browserName': 'chrome'},
  {'browserName': 'firefox'},
  
],
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // require feature files
    specs: [
        './MyTest.feature' // accepts a glob
    ],

    cucumberOpts: {
        // require step definitions
        require: [
            './MyTest_Steps.js', './env.js' // accepts a glob
        ]
        //, format: 'json:.tmp/results.json'
        
    }
    // ,
 
    // plugins: [{
    //     package: 'protractor-multiple-cucumber-html-reporter-plugin',
    //     options:{
    //         // read the options part for more options
    //         automaticallyGenerateReport: true,
    //         removeExistingJsonReportFile: true
    //     }
    // }]
};