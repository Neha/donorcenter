#!/usr/bin/env node
const Main = require('./main');
const program = require('commander');

program
  .version('1.0.0')
  .option('-l, --list', 'View list of donors')
  .option('-a, --add', 'Add the donor')
  .parse(process.argv);

let args = null;

if (program.list) {
  args = 'list';
}
if (program.add) {
  args = 'add';
}

// Start CLI application.
Main(args);
