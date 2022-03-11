module.exports = {
    'test pages validation' : function(browser) {
      var unosquare = browser.page.mainpage();

      browser.windowMaximize();

      unosquare
      .navigate()
      .waitForElementVisible('@contactusMenu')
      .click('@contactusMenu')
      .click('@industriesMenu')
      browser.end();
    },

    'test command example' : function(browser) {
      var unosquare = browser.page.mainpage();
      unosquare
      .navigate()
      .contactUnosquare();

      browser.end();
    }
}
