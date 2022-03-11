module.exports = {
    'Nightwatch page' : function(browser) {
      var nightwatch = browser.page.landingpage();

      browser.windowMaximize();

      nightwatch
      .navigate()
      .useXpath()
      .click('@developerGuide')
      .useCss()
      .searchInBar()
      .assert.visible('@APIReferenceMenu')
      .click('@blogMenu')
      .assert.attributeContains('@githubMenu', 'svgicon', 'logos:github')
      .assert.urlContains('blog')
      .assert.containsText('@footerText', 'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.')
      browser.end();
    }
  }
