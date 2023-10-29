/*function function_name(parameter: type, parameter:type,...): returnType {
    // do something
 }*/
function add(a, b) {
    return a + b;
}
//function type
let add1;
add1 = function (x, y) {
    return x + y;
};
let add2 = function (x, y) {
    return x + y;
};
//optional parameters
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
//default parameters
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95
function overloaded_add(a, b) {
    return a + b;
}
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
function sum1(a, b, c) {
    if (c) {
        return a + c;
    }
    if (typeof a === 'string') {
        return `a is ${a}, b is ${b}`;
    }
    else {
        return a + b;
    }
}
//method overloading
class MyClass {
    add(a, b) {
        return a + b;
    }
}
const myClass = new MyClass();
console.log(myClass.add(1, 2)); // Output: 3
console.log(myClass.add('Hello, ', 'world!')); // Output: 'Hello, world!'
export {};
