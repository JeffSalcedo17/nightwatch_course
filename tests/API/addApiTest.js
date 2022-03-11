module.exports = {
    before: function (browser) {

        //Declaring Global Timeout
        browser.globals.waitForConditionTimeout = 7000
    },

'API Testing - POST - Register': function (browser) {
        var apiUrl = 'https://reqres.in/api/register'
        var postData = {'email':'eve.holt@reqres.in', 'password':'pistol'}
        browser.apiPost(apiUrl, postData, null, null, function (response) {

            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.id, '4')
            browser.assert.equal(response.body.token, 'QpwL5tke4Pnpja7X4')
        })
    },

  'API Techport - GET Positive': function (browser) {
        var apiUrl = 'http://tle.ivanstanojevic.me/api/tle'
            browser.apiGet(apiUrl, function (response) {
            var data = JSON.parse(response.body)
            browser.assert.equal(response.totalItems, '13177')
        })
    }
};
