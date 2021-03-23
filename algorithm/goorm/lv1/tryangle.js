/*

// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const area = (num) => {
	num = num.split(' ').map(el => parseInt(el));
	const sum = num[0] * num[1] / 2;

	return sum.toFixed(1)
}

rl.on("line", function(num) {
	console.log( area(num) );
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

	return sum.toFixed(1)
}
console.log(area('38 92'))