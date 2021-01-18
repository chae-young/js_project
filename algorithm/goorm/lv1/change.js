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









let array = [1, 2, 3];
let object = {};

for (let num of array) {
  object[num] = String(num);
}

console.log(object);
console.log(Object.keys(object));






*/

function change(n){
	n = n.toString();
	
	let array = [500,100,50,10];
	let digit = {};

	for (let num of array) {
	  digit[num] = 0;
	}


	n.split('').forEach(function(el,i) {
		console.log(el)
		if(i == 0){
			parseInt(el) <= 5 ? digit[500] += 1 : digit[100] = el - 5
		}
	})
	console.log(digit)
}
console.log( change(450) )