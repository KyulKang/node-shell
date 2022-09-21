const fs = require('fs');

module.exports = (arg) => {
    if (arg === undefined) {return}
    fs.readFile(arg, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
} 