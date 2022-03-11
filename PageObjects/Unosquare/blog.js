function getData() {
  return require('../../dataExternal/unosquareBlog'); // Using the correct path is important
};

var validateSearchBlog = {
    searchInBlog : function() {
      this.api.pause(1000);
      const form = getData(); // this is the important part

          this.waitForElementVisible('@searchBar', 1000)
          .click('@searchBar')
          .setValue('@searchBar', form.topic1)
          .click('@searchIcon')
          .waitForElementVisible('@resultsTitle')
          .assert.containsText('@resultsTitle', "RESULTS FOUND FOR THE SEARCH TERM " + '"' + form.topic1 + '"')

          this.waitForElementVisible('@searchBar', 1000)
          .click('@searchBar')
          .setValue('@searchBar', form.topic2)
          .click('@searchIconInResultsPage')
          .waitForElementVisible('@resultsTitle')
          .assert.containsText('@resultsTitle', "RESULTS FOUND FOR THE SEARCH TERM " + '"' + form.topic2 + '"')

          this.waitForElementVisible('@searchBar', 1000)
          .click('@searchBar')
          .setValue('@searchBar', form.topic3)
          .click('@searchIconInResultsPage')
          .waitForElementVisible('@resultsTitle')
          .assert.containsText('@resultsTitle', "RESULTS FOUND FOR THE SEARCH TERM " + '"' + form.topic3 + '"')

          this.waitForElementVisible('@searchBar', 1000)
          .click('@searchBar')
          .setValue('@searchBar', form.topic4)
          .click('@searchIconInResultsPage')
          .waitForElementVisible('@resultsTitle')
          .assert.containsText('@resultsTitle', "RESULTS FOUND FOR THE SEARCH TERM " + '"' + form.topic4 + '"')
    }
};

module.exports = {
    url: 'https://blog.unosquare.com/',
    commands: [validateSearchBlog],
    elements: {
      title: {
        selector: "#wrapper > header > div.breadcrumb-container > h1",
      },
      searchBar: {
        selector: "#search-bar",
      },
      searchIcon: {
        selector: "#side-bar-container > form > button"
      },
      searchIconInResultsPage: {
        selector: "#wrapper > header > div.container-fluid.content-blog > div > div.col-lg-3 > form > button"
      },
      aboutMenu: {
        selector: "li a[href = 'https://www.unosquare.com/About']"
      },
      resultsTitle: {
        selector: "#wrapper > header > div.container-fluid.content-blog > div > div.col-lg-9 > h3"
      },
      recentPost: {
        selector: "#side-bar-container > main > label:nth-child(2)"
      },
      popularPost: {
        selector: "#side-bar-container > main > label:nth-child(4)"
      },
      chairmanName: {
        selector: "#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(1) > div > span.name"
      },
      CEOName: {
        selector: "#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(2) > div > span.name"
      },
      CFOName: {
        selector: "#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(3) > div > span.name"
      },
      COOName: {
        selector: "#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(4) > div > span.name"
      },
      VPName: {
        selector: "#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(5) > div > span.name"
      },
    }
  };
