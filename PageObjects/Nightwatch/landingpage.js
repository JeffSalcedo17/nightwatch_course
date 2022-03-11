var FillAndSearchTextInBar = {
    searchInBar: function() {
      this.api.pause(1000);
      return this.waitForElementVisible('@searchBar', 1000)
      .click('@searchBar')
      .sendKeys('@searchBarText', 'Asserts')
      .click('@resultOne')
      .assert.containsText("@pageTitle", 'assert')
    }
  };


module.exports = {
    url: 'https://nightwatchjs.org',
    commands: [FillAndSearchTextInBar],
    elements: {
      developerGuide: {
        selector: "//div[@id='navigation']//a[normalize-space()='Developer Guide']",
        locateStrategy: 'xpath'
      },
      searchBar: {
        selector: ".DocSearch-Button-Placeholder"
      },
      searchBarText: {
        selector: "#docsearch-input"
      },
      resultOne: {
        selector: "#docsearch-item-0"
      },
      pageTitle: {
        selector: "#expect-assertions > span"
      },
      APIReferenceMenu: {
        selector: "#navbartop > ul > li:nth-child(3) > a"
      },
      blogMenu: {
        selector: "#navbartop > ul > li:nth-child(5) > a"
      },
      githubMenu: {
        selector: "#navbartop > ul > li:nth-child(6) > a > mat-icon"
      },
      footer: {
        selector: "body > footer"
      },
      footerText: {
        selector: ".address"
      }
    }
  };
