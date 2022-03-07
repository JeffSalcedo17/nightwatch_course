module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .assert.attributeContains("li a[href = '/Services']", 'class', 'nav')
      .assert.attributeEquals("li a[href = '/Services']", 'class', 'nav-link')
	  .waitForElementVisible("li a[href = '/Services']")
      .assert.containsText("li a[href = '/Services']", "SERVICES") //This is case Sensitive
	  .assert.cssProperty("li a[href = '/About']", 'display', 'block')
      .assert.not.cssProperty("li a[href = '/About']", 'font-size', '12px')
	  .url('https://www.unosquare.com/ContactUs')
	  .useXpath()
	  .sendKeys('//form/div[1]/div/input', 'pepe')
	  .assert.value('//form/div[1]/div/input', "pepe")
	  .useCss()
	  .assert.visible("#name-2a32df81-981f-4329-b943-9f2e76efe5f0")
	  .assert.title("Agile Collaborative Software Development | Contact Unosquare")
	  .assert.not.urlContains("Services")
	  .assert.not.urlEquals("https://www.google.com.co")
	  .end();
    }
  };
