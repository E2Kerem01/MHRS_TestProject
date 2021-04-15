const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'test/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      windowSize : 'maximize'
    }
  },
  include: {
    I: './steps_file.js',
    girisPagePage: './pages/girisPage.js',
    randevuuAlmaPage: './pages/randevuuAlma.js',
    randeAlmaFragment: './fragments/randeAlma.js'
    
  },
  bootstrap: null,
  mocha: {},
  name: 'DemoTest',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}