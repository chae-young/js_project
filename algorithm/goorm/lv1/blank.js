/*

// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(blank(str));
	rl.close();
}).on("close", function() {
	process.exit();
});


















*/

const blank = str => str.split(' ').join('')


console.log(blank(str))