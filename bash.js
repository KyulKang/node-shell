const pwd = require('./pwd')
const ls = require('./ls')
const cat  = require('./cat')
const curl  = require('./curl')
const date = require('./date')
const echo = require('./echo')

function prompt(data) {
    console.log(data);
    process.stdout.write('prompt > ');
}

const done = (output) => {
    process.stdout.write(output)
    process.stdout.write('\nprompt > ')
}

function main(data) {
    const [cmd, arg] = data.toString().trim().split(' ');
    switch(cmd) {
        case 'pwd': pwd(done); break;
        case 'ls': ls(done); break;
        case 'cat': cat(arg, done); break;
        case 'curl': curl(arg, done); break;
        case 'date': date(done); break;
        case 'echo': echo(arg, done); break;
        default: console.log('not found');
    }
}

prompt('Welcome to Node Shell!')
process.stdin.on('data', main)