/*

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const a = ( ...num ) => {
	console.log(num)
	const b = num.reduce((acc,va) => acc * va)
	return b
}

rl.on("line", function(g) {
	console.log(a(g));
	rl.close();
}).on("close", function() {
	process.exit();
});

*/






const a = ( num ) => {
	const b = num.split(' ').reduce((acc,va) => acc * va)
	return b
}

console.log( a(10 20 30 40) )