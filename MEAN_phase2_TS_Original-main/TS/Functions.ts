/*function function_name(parameter: type, parameter:type,...): returnType {
    // do something
 }*/

 function add(a: number, b: number): number {
    return a + b;
}


//function type
let add1: (x: number, y: number) => number;

add1 = function (x: number, y: number) {
    return x + y;
};

let add2: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };


//optional parameters

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

//default parameters
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95

//Notice that you cannot include default parameters in 
//function type definitions. The following code will 
//result in an error:

//let promotion: (price: number, discount: number = 0.05) => number;

//function overloading
function overloaded_add(a: number, b: number): number;
function overloaded_add(a: string, b: string): string;
function overloaded_add(a: any, b: any): any {
   return a + b;
}

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

function sum1(a: number, b: number, c: number): number;
function sum1(a: number, b: number): any;
function sum1(a: string, b: string): any;

function sum1(a: any, b: any, c?: any): any {
  if (c) {
    return a + c;
  }
  if (typeof a === 'string') {
    return `a is ${a}, b is ${b}`;
  } else {
    return a + b;
  }
}

//method overloading
class MyClass {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
      return a + b;
    }
  }
  
  const myClass = new MyClass();
  console.log(myClass.add(1, 2)); // Output: 3
  console.log(myClass.add('Hello, ', 'world!')); // Output: 'Hello, world!'
  

export{};