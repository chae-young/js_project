/*

// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const area = (a,b) => {
	console.log(a,b)
	const num = a * b / 2;
	return num
}

rl.on("line", function(a,b) {
	console.log( area(a,b) );
	rl.close();
}).on("close", function() {
	process.exit();
});











function area(a,b){
	const num = a * b / 2;
	return num
}






*/
const area = (num) => {
	num = num.split(' ').map(el => parseInt(el));
	const sum = num[0] * num[1] / 2;

	console.log( Number(sum.toFixed(1)) )
	//return num
}
console.log(area('38 92'))