const fs = require('fs');

module.exports = (arg, callback) => {
    if (arg === undefined) return
    fs.readFile(arg, 'utf8', (err, data) => {
        if (err) {
            callback('Something went wrong!');
        } else {
            callback(data);
        }
    })
} 