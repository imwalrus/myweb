var num1 = window.prompt('숫자를 입력하세요.');
var num2 = window.prompt('숫자를 입력하세요.');
var num3 = window.prompt('숫자를 입력하세요.');
var num4 = window.prompt('숫자를 입력하세요.');
var num5 = window.prompt('숫자를 입력하세요.');

var numbers = [num1, num2, num3, num4, num5];

function findMax(numbers) {
    var i = 1;
    var max = numbers[i];
    for (var i = 1; i < 5; i++) {
        if (numbers[i] > max) {
            max = parseInt(numbers[i]);
        }
    }
    return max;
}
var max = findMax(numbers);
document.write(max);