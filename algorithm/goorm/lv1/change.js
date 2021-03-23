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
[0,2,3,0]
const num = [0,0,0,0]
const data = [0,0,0,0]
const cut = num.slice(0,n.length)
n.toStrong();

첫번째 자리 500
/100
/50
/10

230


*/

const change = n =>{
	n = 1000 - n;
	n = n.toString();
	
	const nArr = n.split('');
	const num = [0,0,0,0];
	const data = [0,0,0,0];
	num.splice(0,n.length);
	
	nArr.forEach((el) => {num.push(el)})
	num.forEach((el,i,arr) => {
		el = parseInt(el)
		if(i === 1){
			if(Math.sign(el - 5) == -1){
				data[1] = el
			}else{
				data[0] += 1
				data[1] = el - 5
			}
		}else if(i === 2){
			if(Math.sign(el - 5) == -1){
				data[3] = el
			}else{
				data[2] += 1
				data[3] = el - 5
			}	

		}
	})
	
	return data
}


const [a,b,c,d] = change('770')

console.log( change('770'),a,b,c,d )

