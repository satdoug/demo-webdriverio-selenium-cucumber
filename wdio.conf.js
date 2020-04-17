const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
  runner: 'local',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  specs: ['./test/e2e/features/*.feature'],
  // execArgv: ['--inspect-brk=127.0.0.1:5859'],
  debug: false,
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'zal:recordVideo': true,
      'zal:name': 'MP Promotoria Digital',
      'zal:build': 'WebdriverIO',
    },
  ],
  logLevel: 'trace',
  outputDir: './test-report/output',
  bail: 0,
  baseUrl: 'http://demo.automationtesting.in',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: [
    'dot',
    'spec',
    [
      'allure',
      {
        outputDir: './test-report/allure-result/',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
    ['timeline', { outputDir: './test-report/timeline' }],
  ],
  cucumberOpts: {
    require: ['./test/e2e/steps/**.steps.js'],
    backtrace: false,
    compiler: [],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tags: [],
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
  services: [
    [TimelineService],
    // Uncomment to run tests with Selenium Standalone, if you have JDK installed.
    ['selenium-standalone'],
  ],
  before() {
    browser.maximizeWindow();
  },
  beforeSession: function beforeTest() {
    require('@babel/register');
  },
};
