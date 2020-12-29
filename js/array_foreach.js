// array_foreach.js

let persons = ['Hong', 'Hwang', 'Park', 'Choi'];

// persons.forEach(function (a, b, c) {
//     console.log(a, b, c);
// });

persons.forEach(myCallBack);

function myCallBack(a, b, c) {

}

persons = [];
let person = {
    이름: 'Hong',
    나이: 20,
    점수: 90
}

persons.push(person);

let person1 = {};
person1.name = 'Hwang';
person1.age = 21;
person1.score = 80;
persons.push(person1);

console.log(persons);

function drawTable() {
    let titles = ['이름', '나이', '점수'];

    let table = document.createElement('table');
    table.setAttribute('border', '1');

    let tr = document.createElement('tr');
    for (title of titles) {
        let td1 = document.createElement('td');
        td1.innerHTML = title;
        tr.append(td1);
    }
    table.append(tr); // 타이틀 생성

    persons.forEach(function (item, idx, ary) {
        let tr = document.createElement('tr');
        for (field in item) {
            let td1 = document.createElement('td');
            td1.innerHTML = item[field];
            tr.append(td1);
        }
        table.append(tr);
    }); // 데이터 생성
    document.getElementById('show').append(table);
}