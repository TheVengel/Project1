let name = 'Adam';
let age = 20;
let isMarried = false;
let lastName = undefined;
let userColor = null;

let person = {
    name: 'Adam',
    age: 28,
}

console.log(person.name);


person['age'] = 25;
console.log(person['age']);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';


console.log(selectedColors.length);

function sayHi(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

sayHi('Valery', 'Lebedev');


function square(number) {
    return number * number;
}

console.log(square(2));