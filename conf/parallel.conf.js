exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',
  updateJob: false,
  specs: ['./test/e2e/features/*.feature'],

  maxInstances: 10,
  commonCapabilities: {
    name: 'parallel test',
    build: 'webdriver-browserstack'
  },

 capabilities: [{
    browser: 'chrome'
  },{
    browser: 'firefox'
  },{
    browser: 'internet explorer'
  }],

  logLevel: 'trace',
  coloredLogs: true,
  bail: 0,
  baseUrl: 'http://demo.automationtesting.in',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',
 
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
  before() {
    browser.maximizeWindow();
  },
  beforeSession: function beforeTest() {
    require('@babel/register');
  },
};
