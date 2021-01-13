/*

// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const threesixnine = (n) =>{
	const arr = ['3','6','9'];
	let num = 0;

	for(let i = 1;i <= n-1; i++){
		`${i}`.split('').forEach(function(el){
			if(arr.includes(el)) num++
		})
	}
	return num
}
rl.on("line", function(n) {
	console.log(threesixnine(n));
	rl.close();
}).on("close", function() {
	process.exit();
});













*/
const threesixnine = (n) =>{
	const arr = ['3','6','9'];
	let num = 0;

	for(let i = 1;i <= n-1; i++){
		`${i}`.split('').forEach(function(el){
			if(arr.includes(el)) num++
		})
	}
	return num
}
console.log( threesixnine(35) )