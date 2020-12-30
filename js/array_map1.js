// array_map1.js
let students = [];
for (let i = 1; i <= 5; i++) {
    let std = {};
    std.no = i;
    std.name = 'Hong' + i;
    std.gen = i % 2 == 0 ? 'M' : 'F';
    std.score = 80 + i;
    students.push(std);
}
console.log(students);

let female = students.filter(function (a, b, c) {
    return a.gen == 'F';
}).map(function (a, b, c) {
    return a;
});

female.forEach(function (a, b, c) {
    document.write('<h2> 이름: ' + a.name + ' / 합계: ' + a.score + '</h2>');
});

console.log(female);