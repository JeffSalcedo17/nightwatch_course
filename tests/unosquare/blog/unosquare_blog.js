module.exports = {
    'Unosquare blog page validation' : function(browser) {
      var unosquare = browser.page.mainpage();
      var unosquareBlog = browser.page.blog();
      browser.windowMaximize();

      unosquare
      .navigate()
      .click('@blogMenu')

      unosquareBlog
      .assert.elementPresent('@title')
      .assert.urlEquals("https://blog.unosquare.com/")
      .assert.visible('@recentPost')
      .assert.visible('@popularPost')
      .searchInBlog();
      unosquareBlog
      .click('@aboutMenu')
      browser.moveTo('@chairmanName')
      unosquareBlog
      .assert.containsText('@chairmanName', 'Mario Di Vece'.toUpperCase())
      .assert.containsText('@CEOName', 'Giancarlo Di Vece'.toUpperCase())
      .assert.containsText('@CFOName', 'Eduardo Arias'.toUpperCase())
      .assert.containsText('@COOName', 'Ignacio Miranda'.toUpperCase())
      .assert.containsText('@VPName', 'Diego Huerta'.toUpperCase())
      browser.end();
    }
}
