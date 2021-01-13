/*

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const a = ( ...num ) => {
	const b = num.reduce((acc,va) => acc * va)
	return b
}

rl.on("line", function(g,b,c,d) {
	console.log(a(g,b,c,d));
	rl.close();
}).on("close", function() {
	process.exit();
});

*/






const a = ( ...num ) => {
	const b = num.reduce((acc,va) => acc * va)
	//console.log(b)
}

console.log( a(10,20,30) )