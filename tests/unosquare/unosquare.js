module.exports = {
    'Demo test unosquare' : function(browser) {
      var unosquareMain = browser.page.mainpage();

      browser.windowMaximize();

      unosquareMain
      .navigate()
      .waitForElementVisible('@body')
      .assert.attributeContains('@servicesMenu', 'class', 'nav')
      .assert.attributeEquals('@servicesMenu', 'class', 'nav-link')
      .waitForElementVisible('@servicesMenu')
      .assert.containsText('@servicesMenu', "SERVICES") //This is case Sensitive
      .assert.cssProperty('@aboutMenu', 'display', 'block')
      .assert.not.cssProperty('@aboutMenu', 'font-size', '12px')

      var unosquareContact = browser.page.contactUs();
      unosquareContact
      .navigate()
      .useXpath()
      .sendKeys('@nameField', 'pepe')
      .assert.value('@nameField', "pepe")
      .useCss()
      .assert.visible('@emailField')
      .assert.title("Agile Collaborative Software Development | Contact Unosquare")
      .assert.not.urlContains("Services")
      .assert.not.urlEquals("https://www.google.com.co")
      browser.end();
    }
  };
