module.exports = {
  report_file: 'dist/tests/results.xml',
  reporer: 'xunit',
  framework: 'qunit',
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci: [
    'Chrome'
  ],
  launch_in_dev: [
    'Chrome'
  ],
  browser_args: {
    Chrome: ['--headless', '--disable-gpu', '--no-sandbox', '--remote-debugging-port=9222']
  }
};
