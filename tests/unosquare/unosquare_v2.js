module.exports = {
    'test unosquare contactUs' : function(browser) {
      var unosquareCU = browser.page.mainpage();

      browser.windowMaximize();

      unosquareCU
      .navigate()
      .waitForElementVisible('@body')
      .click('@contactusMenu')
      .click('@industriesMenu')
      browser.end();
    },

    'test unosquare V2' : function(browser) {
      var unosquareCU = browser.page.mainpage();

      browser.windowMaximize();

      unosquareCU
      .navigate()
      .waitForElementVisible('@body')
      .click('@contactusMenu')
      .click('@industriesMenu')
      .assert.cssProperty('@aboutMenu', 'font-size', '12px') // This assert is going to fail
      browser.end();
    }
  };
