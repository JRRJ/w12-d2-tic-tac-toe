const readline = require('readline');

var board = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.prompt();

rl.on('line', (line) => {
  console.log(line.trim());
  rl.prompt();
})