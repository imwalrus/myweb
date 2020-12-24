let num1 = window.prompt('숫자를 입력하세요.');
let num2 = window.prompt('숫자를 입력하세요.');
let num3 = window.prompt('숫자를 입력하세요.');
let num4 = window.prompt('숫자를 입력하세요.');
let num5 = window.prompt('숫자를 입력하세요.');

let numbers = [num1, num2, num3, num4, num5];

function findMax(numbers) {
    return Math.max.apply(null, numbers);
}
let max = findMax(numbers);
console.log(max);
document.write('최대값: ' + max);