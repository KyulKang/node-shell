const pwd = require('./pwd')
const ls = require('./ls')
const cat  = require('./cat')

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' ');
    switch(cmd[0]) {
        case 'pwd': pwd();
        case 'ls': ls();
        case 'cat': cat(cmd[1]);
    }
    process.stdout.write('You typed: ');
    process.stdout.write('\nprompt > ');
})