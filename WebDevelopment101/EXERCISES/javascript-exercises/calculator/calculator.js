function add(deg1, deg2) {
	return deg1 + deg2;
}

function subtract(deg1, deg2) {
	return deg1 - deg2;
}

function sum(array) {
	return array.reduce((total, current) => total + current, 0);
}
function multiply(array) {
	return array.length ?
		array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0 ;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(n) {
if( n == 0) return 1;
let product = 1;
for (let i=n ; i>0 ; i--) {
	product *= i;
}
return product;

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}