module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  custom_commands_path: "./commands",
  page_objects_path:[ 'PageObjects/Unosquare','PageObjects/Nightwatch'],
  src_folders: ['tests'],

  webdriver: {
    start_process: true,
    server_path: '',
    port: 4444,
    cli_args: [
        ]
  },

  test_settings: {
        default: {
            launch_url: 'https://nightwatchjs.org',
            desiredCapabilities: {
                browserName: 'chrome',
                loggingPrefs: { 'browser': 'ALL' },
                chromeOptions : {
                    "args" : ["start-maximized"]
                }
            }
    }
  }
};
