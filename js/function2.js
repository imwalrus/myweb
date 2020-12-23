var num1 = window.prompt('숫자를 입력하세요.');
var num2 = window.prompt('숫자를 입력하세요.');

diffSum(num1, num2);
function diffSum(num1, num2) {
    var result = 0;
    for (var i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        result += parseInt(i);
    }
    return result;
}
var result = diffSum(num1, num2);
document.write(result);
document.write('</br>');

checkGrade(num1);
function checkGrade(grade) {
    if (num1 >= 90) {
        document.write('A');
    } else if (num1 >= 80) {
        document.write('B');
    } else if (num1 >= 70) {
        document.write('C');
    } else {
        document.write('D');
    }
}


// sum(num1, num2);

function sum(a, b) {
    let n1 = parseInt(a);
    let n2 = parseInt(b);
    console.log(n1 + n2);
}