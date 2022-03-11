function getData() {
  return require('../../dataExternal/unosquareForm'); // Using the correct path is important
  };

var validateContactUs = {
    contactUnosquare: function() {
      this.api.pause(1000);
      const form = getData(); // this is the important part
      return this.waitForElementVisible('@contactusMenu', 1000)
        .click('@contactusMenu')
        .setValue('@companyTextField', form.company)
        .setValue('@phoneTextField', form.phone)
        .setValue('@messageTextArea', form.message)
        .click('@submitBtn')
        .waitForElementVisible('@nameWarningMsg')
    }
  };

module.exports = {
    url: 'https://www.unosquare.com',
    commands: [validateContactUs],
    elements: {
      contactusMenu: {
        selector: "li a[href = '/ContactUs']"
      },
      industriesMenu: {
        selector: "li a[href = '/Industries']"
      },
      aboutMenu: {
        selector: "li a[href = '/About']"
      },
      servicesMenu: {
        selector: "li a[href = '/Services']"
      },
      blogMenu: {
        selector: "li a[href = 'https://blog.unosquare.com']"
      },
      companyTextField: {
        selector: "input.hs-input[name = 'company']"
      },
      phoneTextField: {
        selector: "input.hs-input[name = 'phone']"
      },
      messageTextArea: {
        selector: "textarea.hs-input[name = 'message']"
      },
      submitBtn: {
        selector: "input[value = 'Submit']"
      },
      nameWarningMsg: {
        selector: "//div[contains(@class, 'hs_name')]//label[contains(., 'Please complete this required field.')]",
        locateStrategy: 'xpath'
      },
      body: {
        selector: "body"
      }
    }
  }
