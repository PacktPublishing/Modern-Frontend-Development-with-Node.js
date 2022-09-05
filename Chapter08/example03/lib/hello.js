#!/usr/bin/env node

// check that at least one argument has been provided
if (process.argv.length < 3) {
  console.log("No argument provided.");
  return process.exit(1);
}

// take the last argument
const name = process.argv.pop();
console.log(`Hello ${name}!`);
