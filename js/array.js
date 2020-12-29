let numbers = [3, 4, 5, 8, 11, 14, 16, 55, 88];
let sum = 0;
let max = 0;

for (num of numbers) {
    if (num % 2 == 0) {
        sum += num;
    }
}
for (num of numbers) {
    if (num > max) {
        max = num;
    }
}
console.log("짝수 합계: " + sum);
console.log("가장 큰 수: " + max);

let friend1 = {
    name: 'Hwang',
    age: 20,
    hobby: '코딩',
    grade: 'A'
}
let friend2 = {
    name: 'Hong',
    age: 22,
    hobby: '자바',
    grade: 'B'
}
let friend3 = {
    name: 'Park',
    age: 24,
    hobby: '자바스크립트',
    grade: 'C'
}

let friends = [friend1, friend2, friend3];

document.write('<table border="1"><tr>');
for (field in friend1) {
    document.write('<th>' + field + '</th>');
}
document.write('</tr>');
for (friend of friends) {
    document.write('<tr>');
    for (field in friend) {
        document.write('<td>' + friend[field] + '</td>');
    }
    document.write('</tr>');
}
document.write('</table');
