// array_map2.js
let students = [];

for (let i = 1; i <= 5; i++) {
    let std = {};
    std.no = i;
    std.name = 'Hong' + i;
    std.gen = i % 2 == 0 ? 'M' : 'F';
    std.score = 80 + i;
    students.push(std);
}

let result = students.every(function (a, b, c) {
    return a.score > 81;
});
console.log(result); // 모두 81점 이상이어야 true

result = students.some(function (a, b, c) {
    return a.score > 81;
});
console.log(result); // 하나라도 81점 이상이면 true

result = students.map(function (a) {
    return a.name;
}).indexOf('Hong2');
console.log(result); // Hong2의 위치