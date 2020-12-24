let num1 = window.prompt('숫자를 입력하세요.');
let num2 = window.prompt('숫자를 입력하세요.');

diffSum(num1, num2);
function diffSum(num1, num2) {
    let result = 0;
    for (var i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        result += parseInt(i);
    }
    return result;
}
let result = diffSum(num1, num2);
document.write('두 수 사이의 합: ' + result);