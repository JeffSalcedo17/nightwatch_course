module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://nightwatchjs.org/')
      .useXpath()
      .click("//div[@id='navigation']//a[normalize-space()='Developer Guide']")
      .useCss()
      .click('.DocSearch-Button-Placeholder')
      .sendKeys('#docsearch-input', 'Asserts')
      .click('#docsearch-item-0')
      .assert.containsText("#expect-assertions > span", 'assert')
      .assert.visible('#navbartop > ul > li:nth-child(3) > a')
      .click('#navbartop > ul > li:nth-child(5) > a')
      .assert.attributeContains('#navbartop > ul > li:nth-child(6) > a > mat-icon', 'svgicon', 'logos:github')
      .moveTo('body > footer')
      .assert.urlContains('blog')
      .assert.containsText('.address', 'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.')
      .end();
    }
  };
