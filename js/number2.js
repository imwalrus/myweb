// number2.js
let a = 11;
let b = '20';

let result = a + parseInt(b);
console.log(result); // 31

let c = 10;
let d = '20.55';

let result1 = c + parseFloat(d);
console.log(result1); // 30.55

let e = -10.45;
let f = '20.45';

let result2 = e / 0;
console.log(result2); // -Infinity

let g = 10;
let h = '5';

let result3 = g / h;
console.log(result3) // 2

function sum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    console.log(parseInt(num1) + parseInt(num2));
}