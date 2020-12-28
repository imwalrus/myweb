// string.js
let str = 'Please locate where "locate" occurs!';
let strLeng = str.length;
console.log(strLeng);

// indexOf, lastIndexOf, search
strLeng = str.indexOf('locate', 13);
console.log(strLeng);

strLeng = str.lastIndexOf('locate');
console.log(strLeng);

console.log(str.search('locate'));

// slice, substring, substr
let fruit = 'Apple, Banana, Kiwi';
let result = fruit.slice(0, 5);
console.log(result);

let from = fruit.indexOf('Banana');
result = fruit.substring(from, from + 6);
console.log(result);

result = fruit.substr(from, 12);
console.log(result);

// replace
let newFruit = fruit.replace('Banana', 'Orange');
console.log(newFruit);

// toUpperCase, toLowerCase, trim, padStart, padEnd
console.log('helloworld'.toUpperCase());
console.log('HELLOWORLD'.toLowerCase());
console.log('   good   hello   '.trim());
console.log('5'.padStart(2, '0'));
console.log('55'.padEnd(3, '1'));

// replace, split
let uri = 'http://www.naver.net';
console.log(uri.replace('net', 'com'))
console.log(uri.replace(uri.substring(uri.lastIndexOf('.')), '.com'));

let fruits = fruit.split(','); // Apple, Banana, Kiwi
for (f of fruits) {
    console.log(f.trim());
}

