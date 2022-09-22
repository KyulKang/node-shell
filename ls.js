const fs = require('fs');

module.exports = (callback) => {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            callback('Something went wrong!')
        } else { 
            callback(files.join('\n'))
        }
    })
}
