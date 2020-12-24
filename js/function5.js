let name1 = {};
name1.name = window.prompt('이름을 입력하세요.');
name1.age = window.prompt('나이를 입력하세요.');
let name2 = {};
name2.name = window.prompt('이름을 입력하세요.');
name2.age = window.prompt('나이를 입력하세요.');
let name3 = {};
name3.name = window.prompt('이름을 입력하세요.');
name3.age = window.prompt('나이를 입력하세요.');

let nameAry = [];
nameAry[0] = name1;
nameAry[1] = name2;
nameAry[2] = name3;

document.write('<table border="1">')
document.write('<tr><th>' + '이름' + '</th><th>' + '나이' + '</th></tr><tr>')
for (names of nameAry) {
    for (field in names) {
        document.write('<td>' + names[field] + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');

// let friends = [];
// for (let i = 0; i < 3; i++) {
//     let names = window.prompt('이름을 입력하세요.');
//     let age = window.prompt('나이를 입력하세요.');
//     let friend = {}; // object
//     friend.name = names;
//     friend.age = age;
//     friend[i] = friend;
// }
// document.write('<table border="1">');
// for (friend of friends) {
//     document.write('<tr>')
//     for (field in friend) {
//         document.write('<td>' + friend[field] + '</td>');
//     }
//     document.write('</tr>');
// }
// document.write('</table>');
