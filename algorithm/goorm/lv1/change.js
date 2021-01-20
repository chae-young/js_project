/*

// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const change = n =>{
	n = 1000 - n;
	n = n.toString();

	let digit = {
		'500':0,
		'100':0,
		'50':0,
		'10':0,
		//sum:null,
		account(){
			n.split('').forEach( (el,i) => {
				if(i == 0){
					if(parseInt(el) < 5){
						this[100] = parseInt(el)
					}else{
						this[500] += 1;
						this[100] = parseInt(el) - 5
					}
				}else if(i == 1){
					if(parseInt(el) < 5){
						this[10] = parseInt(el)
					}else{
						this[50] += 1;
						this[10] = parseInt(el) - 5
					}
				}
			},this)

			return `${this[500]} ` + `${this[100]} ` + `${this[50]} ` + `${this[10]}`
		}
	};
	
	return digit.account();
}

rl.on("line", function(n) {
	console.log( change(n) );
	rl.close();
}).on("close", function() {
	process.exit();
});









*/

const change = n =>{
	n = 1000 - n;
	const num = n.toString();
	const nArr = num.split('');
	const standard = Math.floor(num/100);

	let digit = {
		'500':0,
		'100':0,
		'50':0,
		'10':0,
		common(el){

		},
		account(){

			nArr.forEach( (el,i) => {
				if(standard >= 1){//백의자리
					if(i == 0){
						if(parseInt(el) < 5){
							this[100] = parseInt(el)
						}else{
							this[500] += 1;
							this[100] = parseInt(el) - 5
						}					
					}else if(i == 1){
						if(parseInt(el) < 5){
							this[10] = parseInt(el)
						}else{
							this[50] += 1;
							this[10] = parseInt(el) - 5
						}
					}
				}else if(standard < 1){//10의자리
					if(i == 0){
						if(parseInt(el) < 5){
							this[10] = parseInt(el)
						}else{
							this[50] += 1;
							this[10] = parseInt(el) - 5
						}
					}

				}
			},this)

			return `${this[500]} ` + `${this[100]} ` + `${this[50]} ` + `${this[10]}`
		}
	};
	
	return digit.account();
}

console.log( change(770) )