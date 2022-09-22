const request = require('request')

module.exports = (link, callback) => {
    if (link === undefined) {return}
    request(link, function (error, response, body) {
        if (error) throw error;
        callback(body)
    })
}