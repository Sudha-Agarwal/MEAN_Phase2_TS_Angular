let counter;
let name1 = 'John';
let age = 25;
let active = true;
//arrays
let names = ['John', 'Jane', 'Peter', 'David', 'Mary'];
//objects
let person;
person = {
    name: 'John',
    age: 25
}; // valid
//function types
let greeting;
greeting = function (name) {
    return `Hi ${name}`;
};
//union type
let result;
result = 10; // OK
result = 'Hi'; // also OK
//result = false; // a boolean value, not OK
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
let messsage; // same as string type
let input;
input = 100; // valid
input = 'Hi'; // valid
export {};
