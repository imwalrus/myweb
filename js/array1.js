// array1.js

// let fruits = ['Apple', 'Banana'];
// fruits[2] = 'Melon';
// fruits[fruits.length] = 'Orange';
// fruits[fruits.length] = 'Kiwi';
// fruits[2] = 'New Melon';
// delete fruits[2];

fruits = [];
fruits.push('Apple');
fruits.push('Banana');
fruits.unshift('Orange');
fruits.unshift('Melon');

// fruits.pop();
// fruits.shift();
// Melon, Orange, Apple, Banana
let fruit = fruits.splice(1, 0, 'New Orange', 'New Apple');
console.log(fruit);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

for (fruit of fruits) {
    console.log(fruit);
}

fruits = ['Apple', 'Banana', 'Mango'];
fruit = {
    name: 'Apple',
    price: 2000,
    weight: 50
}

fruit['name']; // = fruit.name; name based
fruits[0]; // index based