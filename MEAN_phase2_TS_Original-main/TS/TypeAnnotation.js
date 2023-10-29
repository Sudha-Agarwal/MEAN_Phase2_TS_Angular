"use strict";
exports.__esModule = true;
var counter;
var name1 = 'John';
var age = 25;
var active = true;
//arrays
var names = ['John', 'Jane', 'Peter', 'David', 'Mary'];
//objects
var person;
person = {
    name: 'John',
    age: 25
}; // valid
//function types
var greeting;
greeting = function (name) {
    return "Hi ".concat(name);
};
//union type
var result;
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
var messsage; // same as string type
var input;
input = 100; // valid
input = 'Hi'; // valid
