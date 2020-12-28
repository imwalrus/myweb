// number.js

// 990101-1234567
// 990102-2345678
// 000201-3456789
// 000201-4567890
// 2000년 이전, 이후 구분 -> 1, 3이면 남자
// 2000년 이전, 이후 구분 -> 2, 4이면 여자
let numbers = '990101-1234567';
numbers += ' 990102-2345678';
numbers += ' 000202-3456789';
numbers += ' 000202-4567890';
numbers += ' 0003014567890';

function getGender(num) {
    if (num.substr(7, 1) == '1') {
        return '남자';
    } else if (num.substr(7, 1) == '3') {
        return '남자';
    } else if (num.substr(7, 1) == '2') {
        return '여자';
    } else if (num.substr(7, 1) == '4') {
        return '여자';
    } else {
        return 'XXXXXX-XXXXXXX 형태로 입력하시오.';
    }

}

let numAry = numbers.split(' ');
for (num of numAry) {
    result = getGender(num);
    console.log('결과: ' + result);
}
